import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign Up',
  };


  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >{children}</body>
      </html>
    );
  }
  