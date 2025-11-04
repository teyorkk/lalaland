import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La La Land — A Cinematic Journey",
  description: "A stunning tribute to Damien Chazelle's masterpiece. Explore the dreamy world of Mia and Sebastian through jazz, love, and ambition in modern Los Angeles.",
  keywords: ["La La Land", "musical romance", "jazz", "Mia and Sebastian", "Damien Chazelle", "Emma Stone", "Ryan Gosling", "Los Angeles", "dreams", "cinema"],
  authors: [{ name: "Moises" }],
  openGraph: {
    title: "La La Land — A Cinematic Journey",
    description: "A stunning tribute to Damien Chazelle's masterpiece musical romance.",
    type: "website",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "La La Land",
  },
  icons: {
    icon: [
      { url: "/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icon-512x512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                  .then((registration) => {
                    console.log('SW registered: ', registration);
                  })
                  .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                  });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
