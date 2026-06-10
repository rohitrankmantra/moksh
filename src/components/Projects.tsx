"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [1, 2, 3, 4, 5, 6];
  // Duplicate for seamless infinite scrolling
  const scrollItems = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#fafafa] border-b-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4">
          Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase">Our Work</h2>
      </div>
      
      <div className="relative w-full flex items-center bg-white border-y-2 border-black py-8">
        <div className="flex w-max animate-auto-scroll gap-4 px-4 hover:animate-paused">
          {scrollItems.map((idx, i) => (
            <div key={i} className="w-[200px] sm:w-[240px] aspect-[4/3] relative border-2 border-black flex-shrink-0 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              <Image
                src={`/port${idx}.png`}
                alt={`Project ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
