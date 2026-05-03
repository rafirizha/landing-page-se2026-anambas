import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sosialisasi Sensus Ekonomi 2026",
  description:
    "Landing page informasi Sosialisasi Sensus Ekonomi 2026 BPS Kabupaten Kepulauan Anambas.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Sosialisasi Sensus Ekonomi 2026",
    description:
      "Landing page informasi Sosialisasi Sensus Ekonomi 2026 BPS Kabupaten Kepulauan Anambas.",
    images: [
      {
        url: "/og-se2026.png",
        width: 1200,
        height: 630,
        alt: "Sosialisasi Sensus Ekonomi 2026 BPS Kabupaten Kepulauan Anambas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosialisasi Sensus Ekonomi 2026",
    description:
      "Landing page informasi Sosialisasi Sensus Ekonomi 2026 BPS Kabupaten Kepulauan Anambas.",
    images: ["/og-se2026.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
