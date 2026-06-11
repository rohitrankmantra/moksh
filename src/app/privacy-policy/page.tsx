import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans">
      <Header />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter">Privacy Policy</h1>
          <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
            <p>At Moksh Communication, accessible from www.mokshadagency.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Moksh Communication and how we use it.</p>
            
            <h2 className="text-xl font-black text-black uppercase">Log Files</h2>
            <p>Moksh Communication follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
            
            <h2 className="text-xl font-black text-black uppercase">Cookies and Web Beacons</h2>
            <p>Like any other website, Moksh Communication uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            
            <h2 className="text-xl font-black text-black uppercase">Our Advertising Partners</h2>
            <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include Google and Meta. Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>
            
            <h2 className="text-xl font-black text-black uppercase">Privacy Policies</h2>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Moksh Communication.</p>
            
            <h2 className="text-xl font-black text-black uppercase">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
