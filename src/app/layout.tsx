import type { Metadata } from "next";
import { Jost, Source_Code_Pro } from "next/font/google";
import Link from "next/link";

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
      <body
        className={
          "m-4 flex flex-col bg-white antialiased lg:m-12 lg:flex-row dark:bg-slate-900"
        }
      >
        <aside className="m-4 flex shrink-0 flex-col gap-4 lg:w-48 lg:gap-8">
          <Link href="/" className="block">
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              the <br className="hidden lg:inline" />
              <span className="text-blue-500 text-shadow-blue-200 text-shadow-md dark:text-blue-700 dark:text-shadow-slate-950">
                future
              </span>
              <br className="hidden lg:inline" /> is now
            </span>
          </Link>
          <ul className="flex gap-4 lg:flex-col">
            <li>
              <Link href="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/web-features"
                className="text-blue-500 hover:underline"
              >
                Web Features
              </Link>
            </li>
            <li>
              <Link href="/test-mdx" className="text-blue-500 hover:underline">
                Test MDX Page
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-500 hover:underline">
                About
              </Link>
            </li>
          </ul>
        </aside>
        <main className="m-4 grow bg-white shadow-[var(--shadow-elevation-high)] dark:bg-slate-800 dark:shadow-[var(--shadow-elevation-high-dark)]">
          {children}
        </main>
      </body>
    </html>
  );
}
