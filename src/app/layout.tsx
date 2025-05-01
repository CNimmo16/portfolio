import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const bodyFont = Newsreader({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cameron Nimmo - Full Stack Engineer",
  description: "Generalist Full Stack Engineer with 5+ years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} antialiased`}>{children}</body>
    </html>
  );
}
