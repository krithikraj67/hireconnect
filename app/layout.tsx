import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

import dbConnect from "@/lib/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HireConnect",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  return (
    <html className="h-full" lang="en">
      <body className={`h-full bg-shade4 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
