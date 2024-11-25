import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

const inter = localFont({
  src: "./fonts/Inter.woff",
  variable: "--font-inter",
  weight: "300 400 500 600 700",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Droplo-task",
  description: "Made by Wiktor Nobis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
