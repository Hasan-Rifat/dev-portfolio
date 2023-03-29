"use client";
import Curser from "@/components/shared/Curser";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
