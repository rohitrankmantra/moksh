"use client";

import { Target, Users, Search, BarChart3, TrendingUp, Layout } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "PPC Advertising",
      items: ["Google Search & Shopping", "Campaign architecture & bidding", "Conversion tracking", "Performance reports"]
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Social Media Ads",
      items: ["Meta, TikTok & Snapchat", "Creative strategy", "Audience segmentation", "A/B testing frameworks"]
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "SEO Excellence",
      items: ["Technical SEO audits", "Content strategy", "White-hat Link building", "Local SEO dominance"]
    },
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Social Management",
      items: ["Content calendars", "Platform-native creation", "Community management", "Analytics & reporting"]
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Conversion Opt.",
      items: ["Landing page audits", "A/B & multivariate testing", "Heatmap analysis", "Funnel drop-off"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Data Analytics",
      items: ["Custom dashboards", "Attribution modeling", "GA4 configuration", "ROI tracking"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white border-b-2 border-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter uppercase">Built for <span className="text-[#C1272D]">ROI.</span></h2>
          <p className="text-base text-gray-600 font-medium">
            Every service we offer is tied to a metric that actually matters to your business. No vanity metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(74,111,165,1)] transition-all duration-200 group">
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-5 group-hover:bg-[#4A6FA5] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-black mb-4 uppercase">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm font-medium">
                    <span className="text-[#C1272D] font-bold">/</span>
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
