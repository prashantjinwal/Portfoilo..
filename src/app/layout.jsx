import "./globals.css";
import ParticleNetwork from "@/components/ParticleNetwork";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <ParticleNetwork />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
