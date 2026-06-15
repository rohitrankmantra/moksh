"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Old credentials (saved for reference)
      // Service ID: service_a7nwr7j
      // Template ID: template_eeiew48
      // Public Key: gS5TDsYALA9p_GJuQ
      
      await emailjs.send(
        "service_lkk4c3u",
        "template_7km4twm",
        formData,
        "D3vhF2DBKAIdtmTN-"
      );
      setSubmitStatus("success");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-6 md:px-12 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid lg:grid-cols-5">
          {/* Contact Info Side */}
          <div className="lg:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black relative">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-black opacity-10"></div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter">Let's build<br />something great.</h2>
              <p className="text-white/90 leading-relaxed mb-10 font-medium">
                Ready to take your digital marketing to the next level? Contact us today for a free consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white text-black border-2 border-black flex items-center justify-center shrink-0 group-hover:-translate-y-1 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/80 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                    <a href="mailto:info@mokshadagency.com" className="text-base font-bold hover:underline">info@mokshadagency.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white text-black border-2 border-black flex items-center justify-center shrink-0 group-hover:-translate-y-1 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/80 font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                    <a href="tel:+919740666660" className="text-base font-bold hover:underline">+91 97406 66660</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white text-black border-2 border-black flex items-center justify-center shrink-0 group-hover:-translate-y-1 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/80 font-bold uppercase tracking-wider mb-0.5">Visit Us</p>
                    <p className="text-sm font-bold">115, 5th Main, 6th Cross, Chamrajpet, Bangalore - 560018</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 h-48 w-full border-2 border-black md:grayscale md:hover:grayscale-0 transition-all overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2262554618337!2d77.5633558!3d12.957369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f8a04530db%3A0xf9276265b39fb590!2sMoksh%20Communication%20-%20Digital%20Marketing%20Agency%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1781239861863!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="mt-6">
              <a href="https://maps.app.goo.gl/u2qx3tTceR8ZouNS9" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm hover:underline">Open in Google Maps →</a>
            </div>
            
            <div className="mt-6 pt-6 border-t-2 border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider text-white/80">Based in Bangalore, India</p>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <h3 className="text-2xl font-black text-black mb-6 uppercase">Send us a message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="first_name" 
                    className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold" 
                    required 
                    value={formData.first_name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="last_name" 
                    className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold" 
                    required 
                    value={formData.last_name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91" 
                  className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">How can we help?</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  className="w-full bg-white border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-bold resize-none" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-secondary text-white font-black px-8 py-3 border-2 border-[#C1272D] hover:bg-white hover:text-[#C1272D] transition-colors w-full sm:w-auto uppercase tracking-widest mt-2 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
              <p className="text-green-600 font-bold text-center">Thank you! We'll be in touch soon.</p>
            )}
              {submitStatus === "error" && (
                <p className="text-red-600 font-bold text-center">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
