import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Chera Mihiretu - Ethiopian Software Engineer | ACPC 2025 Finalist';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom right, #1a1a2e, #16213e, #0f3460)',
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
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #a855f7, #ec4899, #f97316)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
            }}
          >
            Chera Mihiretu
          </h1>
          <div
            style={{
              fontSize: 32,
              color: '#e2e8f0',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <p style={{ margin: 0 }}>🏆 ACPC 2025 Finalist</p>
            <p style={{ margin: 0 }}>⭐ Top Ethiopia GitHub Contributor</p>
            <p style={{ margin: 0 }}>🚀 A2SV Graduate | AWS Certified</p>
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#94a3b8',
              marginTop: '20px',
            }}
          >
            Software Engineer | ASTU Student
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

