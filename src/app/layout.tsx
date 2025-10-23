import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebasNeue",
  weight: "400", // Bebas Neue only supports 400
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "600", "700"], // choose weights you need
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Fauzan Sulthoni",
  description: "Full Stack Web Developer specializing in scalable architecture, and modern JavaScript frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${outfit.variable} antialiased scroll-smooth overscroll-none touch-none`}
      >
        {children}
      </body>
    </html>
  );
}
