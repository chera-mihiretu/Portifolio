import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chera Mihiretu - Portfolio',
  description: 'Personal portfolio showcasing my projects, skills, and achievements',
  icons: {
    icon: '/assets/logo-dark.png',
    shortcut: '/assets/logo-dark.png',
    apple: '/assets/logo-dark.png',
  },
};

export default function RootLayout({
  children, 
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo-light.png" />
        <title>Chera Mihiretu | Chara Mihiretu | Carra Miratu | Chera Mihretu | Chera Meheretu - Portfolio</title>
        <meta name="description" content="Chera Mihiretu (also known as Chara Mihiretu, Carra Miratu, Chera Mihretu, Chera Meheretu) - Software Engineer, Mobile Developer, Backend Developer. Explore my portfolio, projects, and skills." />
        <meta name="keywords" content="Chera Mihiretu, Chara Mihiretu, Carra Miratu, Chera Mihretu, Chera Meheretu, Software Engineer, Mobile Developer, Backend Developer, Portfolio" />
        <meta property="og:title" content="Chera Mihiretu - Portfolio" />
        <meta property="og:description" content="Portfolio of Chera Mihiretu (Chara Mihiretu, Carra Miratu, Chera Mihretu, Chera Meheretu). Software Engineer, Mobile Developer, Backend Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="/assets/logo-light.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chera Mihiretu - Portfolio" />
        <meta name="twitter:description" content="Portfolio of Chera Mihiretu (Chara Mihiretu, Carra Miratu, Chera Mihretu, Chera Meheretu). Software Engineer, Mobile Developer, Backend Developer." />
        <meta name="twitter:image" content="/assets/logo-light.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Chera Mihiretu',
          alternateName: [
            'Chara Mihiretu',
            'Carra Miratu',
            'Chera Mihretu',
            'Chera Meheretu',
            "carra",
            "mihiretu",
            "mihiratu",
            "Chera", 
            "carra",
            "chara",
            "chera", 
            "cara"
          ],
          url: 'https://www.linkedin.com/in/chera-mihiretu-a267472a2/',
          jobTitle: 'Software Engineer',
          sameAs: [
            'https://github.com/chera-mihiretu',
            // Add other social links if available
          ]
        })}} />
      </head>
      <body className={inter.className}>
        <div style={{position: 'absolute', left: '-9999px', height: '1px', width: '1px', overflow: 'hidden'}} aria-hidden="true">
          Chera Mihiretu, Chara Mihiretu, Carra Miratu, Chera Mihretu, Chera Meheretu
        </div>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}