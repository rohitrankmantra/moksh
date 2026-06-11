"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black flex justify-between items-center py-2 px-4 md:px-8 transition-transform duration-300">
      <a href="/" className="relative w-44 h-16 md:w-56 md:h-20 -ml-2">
        <Image src="/logo.png" alt="Moksh Communication" fill className="object-contain object-left" priority />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-black uppercase tracking-wide">
        <a href="#services" className="hover:text-[#C1272D] transition-colors relative group">
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] transition-all group-hover:w-full"></span>
        </a>
        <a href="#projects" className="hover:text-[#C1272D] transition-colors relative group">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] transition-all group-hover:w-full"></span>
        </a>
        <a href="#faq" className="hover:text-[#C1272D] transition-colors relative group">
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] transition-all group-hover:w-full"></span>
        </a>
        <a href="#contact" className="bg-[#4A6FA5] text-white px-6 py-2 border-2 border-transparent hover:bg-white hover:text-[#4A6FA5] hover:border-[#4A6FA5] transition-all font-bold">
          GET STARTED
        </a>
      </div>
      <button className="md:hidden bg-[#4A6FA5] text-white px-5 py-2 text-sm font-bold border-2 border-[#4A6FA5] hover:bg-white hover:text-[#4A6FA5] transition-colors uppercase">
        ENQUIRE
      </button>
    </header>
  );
}
