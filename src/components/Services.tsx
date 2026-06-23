"use client";

import { Target, Users, Search, BarChart3, TrendingUp, Layout } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "PPC Advertising",
      description: "Stop wasting budget on low-intent keywords. We optimize for high-conversion traffic.",
      items: ["Google Search & Shopping", "Campaign architecture & bidding", "Conversion tracking", "Performance reports"],
      outcome: "3.5x Avg ROAS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Social Media Ads",
      description: "Scale your brand with thumb-stopping creative and hyper-targeted audience segments.",
      items: ["Meta & LinkedIn", "Creative strategy", "Audience segmentation", "A/B testing frameworks"],
      outcome: "Lower CPA by 40%",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "SEO Excellence",
      description: "Dominate search results with a technical foundation and content that actually ranks.",
      items: ["Technical SEO audits", "Content strategy", "White-hat Link building", "Keyword Research & On-Page SEO"],
      outcome: "+120% Organic Traffic",
      image: "/seo.jpg"
    },
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Social Management",
      description: "We help you stay active on social media, engage with your audience, and turn followers into customers.",
      items: ["Content calendars", "Platform-native creation", "Audience Engagement", "Monthly Performance Reports"],
      outcome: "Engagement +85%",
      image: "/social-media.jpg"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Google Business Profile Optimization",
      description: "Get More Calls & Enquiries from Google Maps",
      items: ["Profile Setup & Optimization", "Business Information Updates", "Review Management & Growth Strategies", "Google Posts & Regular Updates"],
      outcome: "More Enquiries",
      image: "/gmb.png"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white border-b-2 border-black px-6 md:px-12 relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      {/* Subtle background pattern for the whole section */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 max-w-2xl">
          <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter uppercase">More Leads. More Customers. <span className="text-[#C1272D]">More Growth.</span></h2>
          <p className="text-base text-gray-600 font-medium">
            We help businesses generate quality enquiries through Google Ads, Meta Ads, SEO, and high-converting websites—turning marketing spend into measurable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(74,111,165,1)] transition-all duration-200 group relative overflow-hidden flex flex-col h-full">
              {/* Card Pattern with Fading Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`pattern-${idx}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
                    </pattern>
                    <linearGradient id={`fade-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="1" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id={`mask-${idx}`}>
                      <rect width="100" height="100" fill={`url(#fade-${idx})`} />
                    </mask>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${idx})`} style={{ mask: `url(#mask-${idx})`, WebkitMaskImage: `linear-gradient(to bottom left, black, transparent)` }} />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-[#4A6FA5] transition-colors">
                  {service.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#C1272D] border-b border-[#C1272D] pb-0.5">
                  {service.outcome}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-black mb-3 uppercase leading-tight">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed">
                {service.description}
              </p>

              {/* Client requested image */}
              <div className="mb-6 h-40 w-full border-2 border-black overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              
              <ul className="space-y-2 mb-2 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-xs font-bold uppercase tracking-tight">
                    <span className="text-[#C1272D]">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
