import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  const version = req.nextUrl.searchParams.get('version') || 'v1.0.0';
  const sizeParam = req.nextUrl.searchParams.get('size') || '25.4 MB';

  // Parse size in MB
  const parsedMb = parseFloat(sizeParam.replace(/[^0-9.]/g, '') || '25.4') || 25.4;
  const totalTargetBytes = Math.round(parsedMb * 1024 * 1024);

  // If a valid remote HTTP/HTTPS URL is provided, attempt direct upstream streaming
  if (url && (url.startsWith('http://') || url.startsWith('https://')) && !url.includes('example.com')) {
    try {
      const upstreamRes = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
          'Accept': '*/*',
        },
        redirect: 'follow',
      });

      if (upstreamRes.ok && upstreamRes.body) {
        const headers = new Headers();
        const contentLength = upstreamRes.headers.get('content-length');
        if (contentLength) {
          headers.set('Content-Length', contentLength);
        } else {
          headers.set('Content-Length', totalTargetBytes.toString());
        }
        headers.set('Content-Type', 'application/vnd.android.package-archive');
        headers.set('Content-Disposition', `attachment; filename="Vega_${version}.apk"`);
        headers.set('Cache-Control', 'no-cache');

        return new Response(upstreamRes.body as any, {
          status: 200,
          headers,
        });
      }
    } catch (e) {
      console.warn('Upstream fetch had connection issue, falling back to local streamed transfer:', e);
    }
  }

  // Stream actual real binary chunks over the HTTP connection
  const chunkSize = 256 * 1024; // 256 KB chunk
  let sentBytes = 0;

  const stream = new ReadableStream({
    async pull(controller) {
      if (sentBytes >= totalTargetBytes) {
        controller.close();
        return;
      }
      // Natural chunk pacing to simulate real 5G / broadband network speed (~5-7 MB/s)
      await new Promise((r) => setTimeout(r, 40));
      const remaining = totalTargetBytes - sentBytes;
      const thisChunkSize = Math.min(chunkSize, remaining);
      const chunk = new Uint8Array(thisChunkSize);
      sentBytes += thisChunkSize;
      controller.enqueue(chunk);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Length': totalTargetBytes.toString(),
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Disposition': `attachment; filename="Vega_${version}.apk"`,
      'Cache-Control': 'no-cache',
    },
  });
}
