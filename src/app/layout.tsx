import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "A detailed description of your page content.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  alternates: {
    canonical: "https://yoursite.com/current-page",
    languages: {
      "en-US": "https://example.com/en-US",
      "de-DE": "https://example.com/de-DE",
    },
  },
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
    creator: "@yourhandle",
    site: "@yoursite",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${instrument.className} bg-background p-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
