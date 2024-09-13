import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'Garola Estate',
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
        <Footer />
      </body>
    </html>
  );
}
