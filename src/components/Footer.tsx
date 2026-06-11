"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="https://www.mokshadagency.com" className="relative w-40 h-14 md:w-48 md:h-16 bg-white border-2 border-white p-1">
          <Image src="/logo.png" alt="Moksh Communication" fill className="object-contain" priority />
        </a>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-wider">
          <a href="/privacy-policy" className="hover:text-[#4A6FA5] transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-[#4A6FA5] transition-colors">Terms of Service</a>
        </div>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} Moksh Communication. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
