"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center py-2">
        <a href="/" className="relative w-44 h-16 md:w-56 md:h-20 group">
          <Image src="/logo.png" alt="Moksh Communication" fill className="object-contain object-left md:grayscale md:group-hover:grayscale-0 transition-all duration-500" priority />
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
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black p-2 bg-[#4A6FA5] text-white border-2 border-black ml-4"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-black md:hidden flex flex-col gap-4 p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
          <a 
            href="#services" 
            className="text-sm font-bold text-black uppercase tracking-wide hover:text-[#C1272D] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="text-sm font-bold text-black uppercase tracking-wide hover:text-[#C1272D] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#faq" 
            className="text-sm font-bold text-black uppercase tracking-wide hover:text-[#C1272D] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            className="bg-[#4A6FA5] text-white px-6 py-2 text-sm font-bold border-2 border-black hover:bg-white hover:text-[#4A6FA5] transition-colors uppercase text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            GET STARTED
          </a>
        </div>
      )}
    </header>
  );
}
