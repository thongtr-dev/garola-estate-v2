import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import '@/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'Property Pulse',
  description: 'Find your next perfect rental property',
  keywords: ['rental', 'property', 'real estate'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
