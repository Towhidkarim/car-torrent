import PageTransition from '@/components/AuthProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider';
import { Toaster } from '@/components/ui/toaster';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Torrent',
  description: 'Best car rental service available',
  openGraph: {
    siteName: 'Car Torrent',
    description: 'Best car rental service available',
    images: [
      {
        url: '/Assets/og.jpeg',
        width: 1409,
        height: 733,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={` ${jakarta.className}`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
