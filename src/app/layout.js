// "use client";

import { Sora } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
   weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Kpop Road",
  description:
    "Kpop Road application for Kpop fans to explore idols and auditions",
  keywords: "Kpop, idols, auditions, voting, fan community",
  authors: [{ name: "Kpop Road Team" }],
  creator: "Kpop Road",
  publisher: "Kpop Road",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("http://kpoproad.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kpop Road - Vote for Your Favorite Idols",
    description:
      "Join the ultimate Kpop fan community. Vote for your favorite idols, participate in auditions, and earn rewards.",
    url: "http://kpoproad.io",
    siteName: "Kpop Road",
    images: [
      {
        url: "/kpop_road_logo1.png",
        width: 1200,
        height: 630,
        alt: "Kpop Road Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/icon-150x150.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`${sora.variable}`} lang="en">
      <head>
        <meta name="shortcut icon" content="shortcut icon" />
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
