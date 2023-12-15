import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flödesskrivning",
  description:
    "En hemsida för att hjälpa till att få igång ditt flödesskrivande",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`p-10 ${inter.className}`}>{children}</body>
    </html>
  );
}
