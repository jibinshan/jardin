import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Playfair_Display, Cormorant, Manrope } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "jardin",
  description: "Jardín Mexican Cocina & Tequila Bar",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter text-[#FBEAD2] antialiased",
          cormorant.variable,
          playfair.variable,
          inter.variable,
          manrope.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
