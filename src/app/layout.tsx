import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vansh Kalra — Full Stack Developer",
  description:
    "Full Stack Developer building fast, polished web experiences with Next.js, TypeScript, and AI tooling. Explore my projects and get in touch.",
  openGraph: {
    title: "Vansh Kalra — Full Stack Developer",
    description: "Building fast, polished web experiences with Next.js, TypeScript & AI tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
