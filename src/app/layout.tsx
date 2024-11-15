import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equimaster",
  description: "Elaboración y comercialización de productos de calidad para la salud e higiene de los equinos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <main>
          <Navbar/>
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
