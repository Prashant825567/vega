import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const CONFIG_FILE_PATH = path.join(process.cwd(), 'vega-config.json');

const DEFAULT_CONFIG = {
  apkLink: 'https://github.com/Vega-Portal/vega-releases/releases/download/v1.0.0/Vega_v1.0.0.apk',
  apkVersion: 'v1.0.0',
  apkSize: '25.4 MB',
  releaseNotes: 'Initial launch with aggregated 50+ movie servers, anime hub, and micro vertical short dramas.',
  customQr: ''
};

async function readConfig() {
  try {
    const data = await fs.readFile(CONFIG_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, write defaults and return them
    try {
      await fs.writeFile(CONFIG_FILE_PATH, JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf-8');
    } catch (writeErr) {
      console.error('Failed to write default config:', writeErr);
    }
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

    await fs.writeFile(CONFIG_FILE_PATH, JSON.stringify(updatedConfig, null, 2), 'utf-8');
    return NextResponse.json({ success: true, config: updatedConfig });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to save config' },
      { status: 500 }
    );
  }
}
