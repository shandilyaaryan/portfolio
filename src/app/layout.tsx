import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aryan Shandilya — Software Engineer",
  description: "Portfolio of Aryan Shandilya, Software Engineer Intern at Dataring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] antialiased">
        {children}
      </body>
    </html>
  );
}
