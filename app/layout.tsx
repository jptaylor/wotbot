import { cn } from "@/utils/tailwind";
import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

// Font
const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

// Metadata
export const metadata: Metadata = {
  title: "wot.bot",
  description: "Bots that do things.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased flex flex-col",
          sans.variable,
          mono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
