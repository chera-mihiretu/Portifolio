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
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
