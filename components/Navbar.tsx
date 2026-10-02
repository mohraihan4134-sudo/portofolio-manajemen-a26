// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - font Inter bold */}
        <Link
          href="/"
          className="text-xl font-bold text-[#111111] hover:text-[#7C9A72] transition-colors duration-300"
        >
          Manajemen A 26
        </Link>

        {/* Menu Navigasi */}
        <ul className="flex gap-8">
          <li>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === "/"
                  ? "text-[#7C9A72]"
                  : "text-[#525252] hover:text-[#111111]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === "/about"
                  ? "text-[#7C9A72]"
                  : "text-[#525252] hover:text-[#111111]"
              }`}
            >
              Tentang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}