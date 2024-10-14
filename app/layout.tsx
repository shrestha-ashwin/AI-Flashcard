"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { FlashCardProvider } from "@/lib/flashCardContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={inter.className}>
          <FlashCardProvider>
            <div>{children}</div>
          </FlashCardProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
