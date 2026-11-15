import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Chera Mihiretu | Software Engineer at Bloomberg',
  description:
    'Chera Mihiretu is a Software Engineer at Bloomberg building high-reliability backend systems, autonomous agents, and host-based platforms like e-school.et.',
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