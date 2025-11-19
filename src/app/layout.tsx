import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chera Mihiretu | Next-Gen AI Engineer',
  description: 'Building the future of intelligent software. A portfolio exploring the intersection of AI, Design, and Engineering.',
  icons: {
    icon: '/assets/logo-dark.png', // Assuming these assets exist, otherwise I should probably update them later
  },
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}