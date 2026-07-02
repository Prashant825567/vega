import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

const DEFAULT_CONFIG = {
  apkLink: 'https://github.com/Vega-Portal/vega-releases/releases/download/v1.0.0/Vega_v1.0.0.apk',
  apkVersion: 'v1.0.0',
  apkSize: '25.4 MB',
  releaseNotes: 'Initial launch with aggregated 50+ movie servers, anime hub, and micro vertical short dramas.',
  customQr: '',
  qrType: 'auto', // 'auto' | 'url' | 'upload'
  qrUrl: ''
};

// In-memory cache fallback to guarantee 100% uptime if database has transient connection issues
let memoryCache: any = null;

async function getFirestoreConfig() {
  try {
    const docRef = doc(db, 'settings', 'vega-config');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      memoryCache = { ...DEFAULT_CONFIG, ...data };
      return memoryCache;
    }
  } catch (err) {
    console.error('Failed to read config from Firestore:', err);
  }
  
  // Fallback to memory cache or default
  return memoryCache || DEFAULT_CONFIG;
}

export async function GET() {
  const config = await getFirestoreConfig();
  return NextResponse.json(config);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const currentConfig = await getFirestoreConfig();

    const updatedConfig = {
      apkLink: typeof body.apkLink === 'string' ? body.apkLink : currentConfig.apkLink,
      apkVersion: typeof body.apkVersion === 'string' ? body.apkVersion : currentConfig.apkVersion,
      apkSize: typeof body.apkSize === 'string' ? body.apkSize : currentConfig.apkSize,
      releaseNotes: typeof body.releaseNotes === 'string' ? body.releaseNotes : currentConfig.releaseNotes,
      customQr: typeof body.customQr === 'string' ? body.customQr : currentConfig.customQr,
      qrType: typeof body.qrType === 'string' ? body.qrType : (currentConfig.qrType || 'auto'),
      qrUrl: typeof body.qrUrl === 'string' ? body.qrUrl : (currentConfig.qrUrl || '')
    };

    // Save to Firestore
    const docRef = doc(db, 'settings', 'vega-config');
    await setDoc(docRef, updatedConfig);
    
    // Update memory cache
    memoryCache = updatedConfig;

    return NextResponse.json({ success: true, config: updatedConfig });
  } catch (error: any) {
    console.error('Failed to save config to Firestore:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to save config' },
      { status: 500 }
    );
  }
}
