import type { Metadata } from "next";
import { Jost, Source_Code_Pro } from "next/font/google";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={"antialiased flex m-12"}>
        <ViewTransition>
          <aside className="m-4 w-48 shrink-0">
            <Link href="/" className="block mb-8">
              <span className="text-4xl font-bold text-gray-900 tracking-tight">
                the
                <br />
                <span className="text-blue-500 text-shadow-md text-shadow-blue-200">
                  future
                </span>
                <br />
                is now
              </span>
            </Link>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-blue-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-500 hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </aside>
          <main className="m-4 shadow-[var(--shadow-elevation-high)] grow bg-white">
            {children}
          </main>
        </ViewTransition>
      </body>
    </html>
  );
}
