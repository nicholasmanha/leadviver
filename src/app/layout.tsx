import type { Metadata } from "next";
import { kumbhSans, ballet } from './fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${kumbhSans.variable} ${ballet.variable}`} lang="en">
      <body className={ballet.className}>{children}</body>
    </html>
  );
}
