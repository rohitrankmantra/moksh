"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-40 h-14 md:w-48 md:h-16 bg-white border-2 border-white">
          <Image src="/logo.jpg" alt="Moksh Communication" fill className="object-contain" priority />
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-wider">
          <a href="#" className="hover:text-[#4A6FA5] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#4A6FA5] transition-colors">Terms of Service</a>
        </div>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} Moksh Communication. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
