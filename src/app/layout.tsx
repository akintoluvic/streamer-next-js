import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "A detailed description of your page content.",
  canonical: "https://yoursite.com/current-page",
  openGraph: {
    url: "https://yoursite.com/current-page",
    title: "Your Page Title",
    description: "A detailed description of your page content.",
    images: [
      {
        url: "https://yoursite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Open Graph Image Alt",
        type: "image/jpeg",
      },
    ],
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@yourhandle",
    site: "@yoursite",
    cardType: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
