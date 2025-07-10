import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});
const geistMono = Source_Code_Pro({
  variable: "--font-source-code-pro-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yellow Dog",
  description: "A sample Next.js application with Tailwind CSS",
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
