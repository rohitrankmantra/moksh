"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 md:px-12 border-t-2 border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="/" className="relative w-56 h-20 md:w-64 md:h-24">
          <Image src="/logo.png" alt="Moksh Communication" fill className="object-contain object-left" priority />
        </a>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-wider">
          <a href="/privacy-policy" className="hover:text-[#4A6FA5] transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-[#4A6FA5] transition-colors">Terms of Service</a>
        </div>
        <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} Moksh Communication. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
