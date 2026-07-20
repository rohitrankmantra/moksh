"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center py-2">
        
        {/* Left Side: Main Logo */}
        <div className="flex items-center">
          <a href="/" className="relative w-32 h-12 sm:w-44 sm:h-16 md:w-56 md:h-20 group">
            <Image 
              src="/logo.png" 
              alt="Moksh Communication" 
              fill 
              className="object-contain object-left md:grayscale md:group-hover:grayscale-0 transition-all duration-500" 
              priority 
            />
          </a>
        </div>

        {/* Right Side: Desktop Navigation + Button + Google Partner Logo (Shows Last) */}
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
          <a href="#contact" className="bg-[#4A6FA5] text-white px-6 py-2 border-2 border-transparent hover:bg-white hover:text-[#4A6FA5] hover:border-[#4A6FA5] transition-all font-bold whitespace-nowrap">
            GET STARTED
          </a>

          {/* Google Partner Logo (Desktop View - After Get Started) */}
          {/* Added 'group cursor-pointer' to allow proper hover detection */}
          <div className="relative w-28 h-14 border-l border-gray-300 pl-6 flex items-center group cursor-pointer">
            <div className="relative w-full h-full">
              <Image 
                src="/google-partner.png" 
                alt="Google Partner" 
                fill 
                className="object-contain object-left md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                priority 
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Actions: Hamburger Menu followed by Google Partner Logo */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black p-2 bg-[#4A6FA5] text-white border-2 border-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Google Partner Logo (Mobile View - After Hamburger Menu) */}
          <div className="relative w-20 h-10 sm:w-24 sm:h-12 border-l border-gray-300 pl-3 flex items-center">
            <div className="relative w-full h-full">
              <Image 
                src="/google-partner.png" 
                alt="Google Partner" 
                fill 
                className="object-contain object-left"
                priority 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
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