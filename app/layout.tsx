import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Manrope, Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

import Navbar from "@/components/Navigation/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans scroll-smooth", geist.variable)}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary",
          font.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            {modal}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
