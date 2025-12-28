import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Chera Mihiretu - Software Engineer Ethiopia';
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Chera Mihiretu
          </h1>
          <div
            style={{
              fontSize: 28,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <p style={{ margin: 0 }}>ACPC 2025 Finalist 🏆</p>
            <p style={{ margin: 0 }}>Top GitHub Ethiopia ⭐</p>
            <p style={{ margin: 0 }}>Software Engineer | ASTU</p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

