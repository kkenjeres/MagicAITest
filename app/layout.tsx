import { Header } from "common/Header";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <aside className="h-screen md:w-80">
          <Header />
        </aside>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
