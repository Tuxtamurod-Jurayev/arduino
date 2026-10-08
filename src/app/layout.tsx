import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { IntroSplash } from '@/components/common/IntroSplash';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ArduinoUz — Arduino va Robototexnika Bo\'yicha Interaktiv Qo\'llanma',
  description:
    'Arduino platformasi, datchiklar, C++ tili sintaksisi hamda amaliy bosqichma-bosqich loyihalarni o\'zbek tilida taqdim etuvchi ochiq ta\'limiy portal.',
  keywords: [
    'Arduino o\'zbekcha',
    'Arduino datchiklar',
    'HC-SR04 ulanishi',
    'DHT11 o\'zbekcha',
    'Arduino Uno pinout',
    'ESP32 drayver',
    'C++ Arduino funksiyalari',
    'Robototexnika darslari',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
        <ThemeProvider>
          <IntroSplash />
          <FavoritesProvider>
            <Suspense fallback={<div className="h-16 w-full border-b border-zinc-200 dark:border-zinc-800" />}>
              <Navbar />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Footer />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
