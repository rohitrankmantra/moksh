"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { name: "Chhabria & Sons", link: "https://www.chabsons.com/", logo: "/port10.jpg" },
    { name: "Essae", link: "https://www.essae.com/", logo: "/port2.png" },
    { name: "STAYFIT", link: "https://stayfitindia.com/", logo: "/port3.png" },
    { name: "EuroKids", link: "https://www.eurokidsindia.com/", logo: "/port4.png" },
    { name: "Gufha", link: "https://www.paihotels.com/gufha-restaurant/", logo: "/port6.png" },
    { name: "PRO FITNESS", link: "#", logo: "/port7.png" },
    { name: "Puran Interiors", link: "https://puraninteriors.com/", logo: "/port8.png" },
    { name: "WISEGO", link: "https://wisego.in/", logo: "/port9.png" },
    { name: "Tranquil", link: "https://tranquil.in/", logo: "/port10.png" },
    { name: "National Public School", link: "https://npskgl.com/", logo: "/port11.png" },
    { name: "TVESATE", link: "https://tvesate.com/", logo: "/port12.png" },
    { name: "PAI GROUP", link: "https://www.paihotels.com/", logo: "/port5.jpg" },
    { name: "Amanvana", link: "#", logo: "/port1.png" },
  ];
  
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
          {scrollItems.map((project, i) => (
            <div 
              key={i} 
              className="w-[200px] sm:w-[240px] aspect-[4/3] relative border-2 border-black flex-shrink-0 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
            >
              <Image
                src={project.logo}
                alt={project.name}
                fill
                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-[10px] font-bold uppercase py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
