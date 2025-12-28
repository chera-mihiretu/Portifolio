import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';
import StructuredData from '@/components/StructuredData';

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
  metadataBase: new URL('https://chera-mihiretu.vercel.app'),
  title: {
    default: 'Chera Mihiretu | Software Engineer | Ethiopia Top GitHub Contributor | ACPC 2025 Finalist',
    template: '%s | Chera Mihiretu - Software Engineer Ethiopia'
  },
  description: 'Chera Mihiretu - Software Engineering student at Adama Science and Technology University (ASTU). 2025 ACPC Finalist, Africa To Silicon Valley (A2SV) Graduate, Top Ethiopia GitHub Contributor. AWS Certified Solutions Architect specializing in Full-Stack Development, Mobile Apps, AI/ML, and Competitive Programming.',
  keywords: [
    'Chera Mihiretu',
    'Ethiopian Software Engineer',
    'Adama Science and Technology University',
    'ASTU Software Engineering',
    'Africa To Silicon Valley',
    'A2SV Ethiopia',
    'ACPC 2025 Finalist',
    'ACPC Ethiopia',
    'Top GitHub Ethiopia',
    'Ethiopia Developer',
    'Ethiopian Programmer',
    'ICPC Ethiopia',
    'Competitive Programming Ethiopia',
    'AWS Solutions Architect Ethiopia',
    'Full Stack Developer Ethiopia',
    'Mobile Developer Ethiopia',
    'React Native Developer',
    'Next.js Developer Ethiopia',
    'TypeScript Developer',
    'Python Developer Ethiopia',
    'Django Developer',
    'LeetCode Ethiopia',
    'Codeforces Ethiopia',
    'Software Engineer Adama',
    'Tech Talent Ethiopia',
    'African Software Developer',
    'Silicon Valley Africa',
    'Cloud Computing Ethiopia',
    'AI ML Ethiopia'
  ],
  authors: [{ name: 'Chera Mihiretu', url: 'https://github.com/chera-mihiretu' }],
  creator: 'Chera Mihiretu',
  publisher: 'Chera Mihiretu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chera-mihiretu.vercel.app',
    title: 'Chera Mihiretu | Top Ethiopian Software Engineer | ACPC 2025 Finalist | A2SV Graduate',
    description: 'Portfolio of Chera Mihiretu - ASTU Software Engineering Student, 2025 ACPC Finalist, Africa To Silicon Valley Graduate, and Top Ethiopia GitHub Contributor. Specializing in Full-Stack Development, Mobile Apps, and Competitive Programming.',
    siteName: 'Chera Mihiretu Portfolio',
    images: [
      {
        url: '/assets/me.png',
        width: 1200,
        height: 630,
        alt: 'Chera Mihiretu - Ethiopian Software Engineer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chera Mihiretu | Software Engineer Ethiopia | ACPC 2025 Finalist',
    description: 'ASTU Student, A2SV Graduate, Top Ethiopia GitHub Contributor, AWS Certified, ACPC 2025 Finalist. Specializing in Full-Stack & Mobile Development.',
    images: ['/assets/me.png'],
    creator: '@chera_mihiretu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/logo-dark.png',
    shortcut: '/assets/logo-dark.png',
    apple: '/assets/logo-dark.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://chera-mihiretu.vercel.app',
  },
  category: 'technology',
  classification: 'Software Engineering Portfolio',
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children, 
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <StructuredData />
        <link rel="canonical" href="https://chera-mihiretu.vercel.app" />
      </head>
      <body className="antialiased selection:bg-indigo-500 selection:text-white"
      cz-shortcut-listen="true"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}