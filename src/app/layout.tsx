import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Chera Mihiretu | AI Automation Engineer',
  description:
    'AI Automation Engineer building autonomous agents, self-running workflows, and intelligent backend systems for companies scaling without scaling headcount.',
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased selection:bg-indigo-500 selection:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}