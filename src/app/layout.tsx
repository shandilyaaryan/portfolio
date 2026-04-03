import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Pixelify_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aryan Shandilya — Software Engineer",
  description: "Portfolio of Aryan Shandilya, Software Engineer Intern at Dataring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${pixelifySans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="max-w-screen overflow-x-hidden px-2">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
