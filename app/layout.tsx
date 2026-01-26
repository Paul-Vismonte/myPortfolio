import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Interactive portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable}`}>
      <body className="antialiased bg-(--background) text-(--foreground)">
        {children}
      </body>
    </html>
  );
}
