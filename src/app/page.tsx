"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why should I choose Moksh Communication?",
      a: "With over 15 years of experience in digital marketing, Moksh Communication helps businesses generate quality leads, increase sales, and improve online visibility. We provide personalized strategies, transparent reporting, dedicated support, and proven expertise across Google Ads, Meta Ads, SEO and Google Business Profile Optimization."
    },
    {
      q: "How much should I spend on Google Ads?",
      a: "The ideal Google Ads budget depends on your industry, competition, and business goals. For most local businesses, we recommend starting with a minimum budget of ₹15,000–₹30,000 per month. During our free consultation, we'll analyze your market and suggest a budget that can generate meaningful results."
    },
    {
      q: "How soon can I get leads?",
      a: "Google Ads can start generating leads within days of launching a campaign. However, campaign optimization and performance improvements typically occur over the first 30–90 days as we gather data and refine targeting, keywords, and ad creatives."
    },
    {
      q: "Do you manage Meta Ads?",
      a: "Yes. We manage advertising campaigns across Facebook, Instagram, and other platforms like LinkedIn too."
    },
    {
      q: "What is your pricing?",
      a: "Our pricing varies based on the scope of services, advertising platforms, and campaign requirements. We offer flexible digital marketing packages for businesses of all sizes. Contact us for a free consultation and customized proposal based on your goals."
    },
    {
      q: "How do you track leads and conversions?",
      a: "We implement advanced tracking using Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Ads Conversion Tracking, Meta Pixel, call tracking, WhatsApp tracking, and form submission tracking. This helps us measure every lead and optimize campaigns for maximum return on investment."
    },
    {
      q: "Will I get regular performance reports?",
      a: "Yes. We provide detailed performance reports that include lead generation metrics, ad spend, clicks, conversions, cost per lead, and campaign insights. Regular review meetings can also be scheduled to discuss performance and future growth opportunities."
    },
    {
      q: "Do you work with businesses outside Bangalore?",
      a: "Absolutely. We work with clients across India and internationally. Our team can manage campaigns remotely and conduct strategy discussions through phone calls, video meetings, and online collaboration tools."
    }
  ];

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
                <span className="hover:text-black transition-colors">Chhabria's & Sons</span>
                <span className="hover:text-black transition-colors">Kangaroo Kids</span>
                <span className="hover:text-black transition-colors">Tvesate by Preeya</span>
                <span className="hover:text-black transition-colors">National Public School</span>
                <span className="hover:text-black transition-colors">Paigroup</span>
              </div>
            ))}
          </div>
        </section>

        <Services />

        {/* Results Section */}
        <section className="py-16 md:py-24 bg-black text-white border-b-2 border-black relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-16 text-center md:text-left">
              <div className="inline-block bg-[#C1272D] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                Our Impact
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                Results We<br /><span className="text-[#C1272D]">Delivered</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: "Ad Spend Managed", value: "₹40+ Million" },
                { label: "Leads Generated", value: "3 Lakhs+" },
                { label: "Experience", value: "15+ Years" },
                { label: "Businesses Served", value: "500+" }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-[#111] border-2 border-white/10 p-8 hover:border-[#C1272D] transition-all duration-300 relative overflow-hidden">
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-[#C1272D] translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-[0.03]"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-black mb-4 group-hover:text-[#C1272D] transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="h-1 w-12 bg-[#C1272D] mb-4 group-hover:w-full transition-all duration-300"></div>
                    <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Projects />
        <Contact />

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-20 bg-[#fafafa] border-b-2 border-black px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-10 tracking-tighter uppercase">Common Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border-2 border-black overflow-hidden transition-all group">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-black text-black uppercase tracking-tight pr-8">{faq.q}</h3>
                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center bg-[#fafafa] group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                      {openFaq === idx ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[500px] border-t-2 border-black' : 'max-h-0'}`}
                  >
                    <div className="p-6 md:p-8">
                      <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Contact Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="https://wa.me/919740666660" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            title="WhatsApp Us"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a 
            href="tel:+919740666660" 
            className="w-14 h-14 bg-[#4A6FA5] text-white flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            title="Call Us"
          >
            <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
