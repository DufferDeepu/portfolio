import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
const font = Hanken_Grotesk({ subsets: ["latin"] });
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Deepesh Bind portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-[#111010] flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
