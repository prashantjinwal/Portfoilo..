import "./globals.css";
import ParticleNetwork from "@/components/ParticleNetwork";
import { Major_Mono_Display, Inter } from 'next/font/google';

// Google Fonts setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = Major_Mono_Display({ subsets: ['latin'], weight: '400', variable: '--font-mono' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="overflow-hidden">
        <ParticleNetwork />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
