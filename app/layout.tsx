import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Font Inter - font paling populer untuk website modern
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portofolio Kelas Manajemen A 26",
  description: "Kumpulan karya dan profil anggota kelas Manajemen A 26",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={inter.variable}
    >
      <body className="bg-[#FAFAF9] text-[#111111] antialiased font-[family-name:var(--font-inter)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}