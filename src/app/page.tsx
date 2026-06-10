"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans selection:bg-[#C1272D] selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Trusted By - Minimal Inline Section */}
        <section className="py-8 border-b-2 border-black bg-white overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap animate-auto-scroll items-center gap-16 text-xl font-black text-gray-300 px-8 uppercase tracking-widest">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="hover:text-black transition-colors">TechFlow</span>
                <span className="hover:text-black transition-colors">GlobalRetail</span>
                <span className="hover:text-black transition-colors">NextGen</span>
                <span className="hover:text-black transition-colors">ApexCorp</span>
                <span className="hover:text-black transition-colors">Innovate</span>
                <span className="hover:text-black transition-colors">Vertex</span>
              </div>
            ))}
          </div>
        </section>

        <Services />
        
        {/* Process Section */}
        <section id="process" className="py-16 md:py-20 bg-[#fafafa] border-b-2 border-black px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4">
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter uppercase">What happens after you <span className="text-[#C1272D]">hit send</span></h2>
            <p className="text-base text-gray-600 mb-10 max-w-2xl font-medium">No lengthy proposals before we understand your business. Here's exactly how it works.</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 border-2 border-black relative overflow-hidden group hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="absolute -right-2 -top-2 text-8xl font-black text-gray-100 group-hover:text-[#4A6FA5]/20 transition-colors pointer-events-none">01</div>
                <p className="text-xs font-bold tracking-widest text-gray-400 mb-4 relative z-10 uppercase">Step 01</p>
                <h3 className="text-xl font-black mb-2 relative z-10 text-black uppercase">Book a discovery call</h3>
                <p className="text-gray-600 relative z-10 text-sm font-medium">30 minutes. We ask the hard questions. You tell us what's broken.</p>
              </div>
              <div className="bg-white p-8 border-2 border-black relative overflow-hidden group hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="absolute -right-2 -top-2 text-8xl font-black text-gray-100 group-hover:text-[#4A6FA5]/20 transition-colors pointer-events-none">02</div>
                <p className="text-xs font-bold tracking-widest text-gray-400 mb-4 relative z-10 uppercase">Step 02</p>
                <h3 className="text-xl font-black mb-2 relative z-10 text-black uppercase">We audit your...</h3>
                <p className="text-[#4A6FA5] font-black relative z-10 uppercase">Funnels & Analytics</p>
              </div>
              <div className="bg-white p-8 border-2 border-black relative overflow-hidden group hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="absolute -right-2 -top-2 text-8xl font-black text-gray-100 group-hover:text-[#4A6FA5]/20 transition-colors pointer-events-none">03</div>
                <p className="text-xs font-bold tracking-widest text-gray-400 mb-4 relative z-10 uppercase">Step 03</p>
                <h3 className="text-xl font-black mb-2 relative z-10 text-black uppercase">The verdict</h3>
                <p className="text-gray-600 relative z-10 text-sm font-medium">We tell you the truth, show you the data, and see if we're the right fit.</p>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
