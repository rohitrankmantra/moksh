"use client";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 bg-[#fafafa] relative border-b-2 border-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-block border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
            Accelerating Digital Growth
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.05] mb-6 text-black tracking-tighter uppercase">
            Scale Faster.<br />
            Spend Smarter.<br />
            <span className="text-[#4A6FA5]">Grow Without Limits.</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md mb-8 leading-snug font-medium">
            Skip the guesswork. Book a free audit call and we'll show you exactly where your growth is leaking and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex justify-center items-center bg-black text-white font-bold px-8 py-3 border-2 border-black hover:bg-white hover:text-black transition-all uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(193,39,45,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Book a Free Audit
            </a>
            <a href="#services" className="inline-flex justify-center items-center bg-white text-black border-2 border-black font-bold px-8 py-3 hover:bg-gray-100 transition-all uppercase tracking-wide">
              Explore Services
            </a>
          </div>
        </div>

        {/* Boxy Form */}
        <div className="bg-white p-8 md:p-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transition-transform duration-300 hover:-translate-y-1">
          <div className="absolute -top-3 -right-3 bg-[#C1272D] border-2 border-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            100% Free
          </div>
          <h3 className="text-2xl font-black text-black mb-2 uppercase">Let's talk numbers</h3>
          <p className="text-sm text-gray-600 mb-6 font-medium">Free 30 minutes audit call. No fluff, just a real audit.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="FIRST NAME" className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold placeholder-gray-400" required />
              <input type="text" placeholder="LAST NAME" className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold placeholder-gray-400" required />
            </div>
            <input type="email" placeholder="WORK EMAIL" className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold placeholder-gray-400" required />
            <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold placeholder-gray-400" required />
            <input type="text" placeholder="COMPANY URL" className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold placeholder-gray-400" />
            <button type="submit" className="w-full bg-[#4A6FA5] text-white font-black py-3 border-2 border-[#4A6FA5] hover:bg-white hover:text-[#4A6FA5] transition-colors uppercase tracking-widest mt-2">
              Get Your Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
