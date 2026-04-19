import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AirPods Max 2",
  description: "Sound beyond limits. The most advanced personal listening experience Apple has ever engineered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans h-full antialiased bg-apple-bg text-apple-accent`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
