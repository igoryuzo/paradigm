import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paradigm Shifts",
  description: "Inside one of cryptos most trusted institutions with Co-founder and Managing Partner Matt Huang",
  other: {
    'fc:frame': JSON.stringify({
      version: 'next',
      imageUrl: 'https://paradigm-nine-nu.vercel.app/images/paradigm-image.png',
      button: {
        title: '👋 Say Hello',
        action: {
          type: 'launch_frame',
          url: 'https://paradigm-nine-nu.vercel.app',
          name: 'Hello World',
          splashImageUrl: 'https://paradigm-nine-nu.vercel.app/images/paradigm-splash.png',
          splashBackgroundColor: '#f8f5f1'
        }
      }
    })
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
