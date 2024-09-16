import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import path from 'path';
import fs from 'fs';

export const config = {
  runtime: 'edge',
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://blog.temizmama.com';

const fontPath = path.join(process.cwd(), 'public/fonts/Arial.ttf');
let fontData = fs.readFileSync(fontPath);

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Kediler Hakkında Bilgiler';
    const page = searchParams.get('page') || '';

    // Rastgele bir kedi görseli seç
    const catImages = ['1.png', '2.png'];
    const randomCat = catImages[Math.floor(Math.random() * catImages.length)];

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/blog/cats/${randomCat}`}
            alt="Kedi"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: 60,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              {title}
            </div>
            {page && (
              <div
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontWeight: 'bold',
                }}
              >
                Sayfa {page}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Arial',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}