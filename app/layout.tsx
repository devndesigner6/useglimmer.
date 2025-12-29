import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "uselayouts | Free Premium Animated React & Framer Motion Components",
    template: "%s | uselayouts",
  },
  description:
    "Free premium animated React components and micro-interactions built with Framer Motion and Tailwind CSS. Modern, ready-to-use motion components for high-converting websites.",
  authors: [{ name: "uselayouts team" }],
  creator: "uselayouts",
  metadataBase: new URL("https://uselayouts.com"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uselayouts.com",
    title:
      "uselayouts | Free Premium Animated React & Framer Motion Components",
    description:
      "Free premium animated React components and micro-interactions built with Framer Motion and Tailwind CSS. Modern, ready-to-use motion components for high-converting websites.",
    siteName: "uselayouts",
    images: [
      {
        url: "/apple-touch-icon.png", // Temporary OG Image
        width: 180,
        height: 180,
        alt: "uselayouts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "uselayouts | Free Premium Animated React & Framer Motion Components",
    description:
      "Free premium animated React components and micro-interactions built with Framer Motion and Tailwind CSS. Modern, ready-to-use motion components for high-converting websites.",
    images: ["/apple-touch-icon.png"], // Temporary OG Image
    creator: "@uselayouts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} light`}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
