import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans">
      <Header />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter">Terms of Service</h1>
          <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
            <h2 className="text-xl font-black text-black uppercase">1. Terms</h2>
            <p>By accessing the website at www.mokshadagency.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h2 className="text-xl font-black text-black uppercase">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Moksh Communication's website for personal, non-commercial transitory viewing only.</p>
            
            <h2 className="text-xl font-black text-black uppercase">3. Disclaimer</h2>
            <p>The materials on Moksh Communication's website are provided on an 'as is' basis. Moksh Communication makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2 className="text-xl font-black text-black uppercase">4. Limitations</h2>
            <p>In no event shall Moksh Communication or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Moksh Communication's website.</p>
            
            <h2 className="text-xl font-black text-black uppercase">5. Accuracy of materials</h2>
            <p>The materials appearing on Moksh Communication's website could include technical, typographical, or photographic errors. Moksh Communication does not warrant that any of the materials on its website are accurate, complete or current.</p>
            
            <h2 className="text-xl font-black text-black uppercase">6. Links</h2>
            <p>Moksh Communication has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Moksh Communication of the site.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
