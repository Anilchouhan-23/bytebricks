import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const capabilities = [
  { title: "Domain Registration", desc: "Find, secure, and manage the perfect domain name for your digital identity with auto-renewals and advanced DNS management.", icon: "fa-globe" },
  { title: "Business Emails", desc: "Professional, ad-free business email hosting using robust infrastructure for high deliverability and spam protection.", icon: "fa-envelope" },
  { title: "Secure Web Hosting", desc: "High-speed SSD hosting, VPS, and dedicated servers with free SSL certificates and daily automated backups.", icon: "fa-server" },
];

const processSteps = [
  { step: "01", title: "Assess Needs", desc: "Evaluating your traffic estimates, storage needs, and domain preferences." },
  { step: "02", title: "Provisioning", desc: "Registering domains and instantly provisioning your hosting environments." },
  { step: "03", title: "Configuration", desc: "Setting up DNS records, SSL certificates, and enterprise email inboxes." },
  { step: "04", title: "Launch Support", desc: "Ensuring flawless uptime and providing ongoing technical support." },
];

export default function WebServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Web Services & Hosting" breadcrumb="Web Services" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Digtial Identity</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Domains, Hosting, and Enterprise Email
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Your online presence begins with a solid foundation. We provide the essential building blocks for your digital business, making it simple to get online securely and professionally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From finding the perfect top-level domain to configuring high-performance SSD hosting environments and setting up custom branded business emails, ByteBricks acts as your single point of contact for all fundamental web infrastructure needs.
              </p>
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-lg hover:-translate-y-1 transition-all">
                Get Your Domain <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl rotate-3 scale-105" />
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 relative flex items-center justify-center aspect-square shadow-2xl overflow-hidden">
                <i className="fas fa-server text-[120px] text-cyan/80 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-[bounce_2s_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Web Infrastructure</h2>
            <p className="text-gray-500 text-lg">The foundational services required to run a reliable, professional online business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map(cap => (
              <div key={cap.title} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,212,255,0.1)] transition-all border border-transparent hover:border-cyan/20">
                <div className="w-16 h-16 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                  <i className={`fas ${cap.icon} text-2xl text-cyan`} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Onboarding Process</h2>
            <p className="text-gray-500 text-lg">Getting your business live on the internet quickly and securely.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
            {processSteps.map((step, idx) => (
              <div key={step.step} className="bg-white p-6 rounded-2xl text-center relative border border-gray-100 shadow-sm hover:border-cyan/40 transition-colors">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy text-cyan text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-white">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-navy mt-6 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
