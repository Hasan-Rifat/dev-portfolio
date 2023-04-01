"use client";
import Curser from "@/components/shared/Curser";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Nav from "@/components/shared/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Curser />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
