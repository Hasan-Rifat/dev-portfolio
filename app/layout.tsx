"use client";
import Curser from "@/components/shared/Curser";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/shared/Nav";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Curser />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
