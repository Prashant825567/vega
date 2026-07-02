import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const CONFIG_FILE_PATH = path.join(process.cwd(), 'vega-config.json');

const DEFAULT_CONFIG = {
  apkLink: 'https://github.com/Vega-Portal/vega-releases/releases/download/v1.0.0/Vega_v1.0.0.apk',
  apkVersion: 'v1.0.0',
  apkSize: '25.4 MB',
  releaseNotes: 'Initial launch with aggregated 50+ movie servers, anime hub, and micro vertical short dramas.',
  customQr: ''
};

const BUCKET_ID = 'vega_bucket_21470024_b27b_41ee_b87c_1e14e814bae8';
const KV_URL = `https://kvdb.io/${BUCKET_ID}/config`;

async function readFromKV() {
  try {
    const res = await fetch(KV_URL, {
      method: 'GET',
      next: { revalidate: 0 }
    } as any);
    
    if (res.ok) {
      const text = await res.text();
      if (text && text.trim()) {
        return JSON.parse(text);
      }
    }
  } catch (err) {
    console.error('Failed to read from KVdb, falling back to local:', err);
  }
  return null;
}

async function writeToKV(config: any) {
  try {
    const res = await fetch(KV_URL, {
      method: 'POST',
      body: JSON.stringify(config),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to write to KVdb:', err);
    return false;
  }
}

async function readConfig() {
  // 1. Try reading from cloud storage first
  const kvConfig = await readFromKV();
  if (kvConfig) {
    return kvConfig;
  }

  // 2. Fallback to local file
  try {
    const data = await fs.readFile(CONFIG_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // 3. Fallback to default
    return DEFAULT_CONFIG;
  }
}

export async function GET() {
  const config = await readConfig();
  return NextResponse.json(config);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const currentConfig = await readConfig();

    const updatedConfig = {
      apkLink: typeof body.apkLink === 'string' ? body.apkLink : currentConfig.apkLink,
      apkVersion: typeof body.apkVersion === 'string' ? body.apkVersion : currentConfig.apkVersion,
      apkSize: typeof body.apkSize === 'string' ? body.apkSize : currentConfig.apkSize,
      releaseNotes: typeof body.releaseNotes === 'string' ? body.releaseNotes : currentConfig.releaseNotes,
      customQr: typeof body.customQr === 'string' ? body.customQr : currentConfig.customQr
    };

    // 1. Write to cloud store
    const cloudSuccess = await writeToKV(updatedConfig);
    if (!cloudSuccess) {
      throw new Error('Failed to save config to the cloud storage.');
    }

    // 2. Gracefully attempt writing to local filesystem for development environment
    try {
      await fs.writeFile(CONFIG_FILE_PATH, JSON.stringify(updatedConfig, null, 2), 'utf-8');
    } catch (writeErr) {
      console.warn('FileSystem is read-only or writing failed, saved to cloud only.', writeErr);
    }

    return NextResponse.json({ success: true, config: updatedConfig });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to save config' },
      { status: 500 }
    );
  }
}
