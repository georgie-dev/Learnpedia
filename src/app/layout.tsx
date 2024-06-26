import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/contexts/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Learnpedia',
    default: 'Learnpedia',
  },
  description: "Making Learning Open source",
  icons: '/books.png',
  authors: { name: 'George Manger' }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ContextProvider>
  );
}
