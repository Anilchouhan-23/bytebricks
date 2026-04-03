import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const capabilities = [
  { title: "Enterprise Applications", desc: "Large-scale systems resolving complex enterprise workflows and unifying data.", icon: "fa-building" },
  { title: "Legacy Modernization", desc: "Upgrading outdated legacy software with modern, secure, and agile frameworks.", icon: "fa-arrow-up-right-dots" },
  { title: "API Development", desc: "Custom API solutions enabling seamless integrations with third-party software.", icon: "fa-plug" },
];

const processSteps = [
  { step: "01", title: "Discovery & Planning", desc: "We analyze your business requirements and technical feasibility." },
  { step: "02", title: "UI/UX Design", desc: "Creating intuitive wireframes and interactive prototypes." },
  { step: "03", title: "Agile Development", desc: "Iterative sprints ensuring transparency and rapid delivery." },
  { step: "04", title: "Testing & Launch", desc: "Rigorous QA testing before smooth deployment." },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Custom Software Development" breadcrumb="Custom Software" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Why Custom Software?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Tailor-Made Solutions for Your Unique Business Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Off-the-shelf software often forces businesses to change their workflows to fit the tool. We build systems that fit your business perfectly. 
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                ByteBricks engineers develop highly scalable, deeply customized application architectures. Whether you need a sophisticated ERP, an internal operational tool, or a consumer-facing application, our full-stack team brings your vision to reality securely and efficiently.
              </p>
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-lg hover:-translate-y-1 transition-all">
                Discuss Your Project <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl rotate-3 scale-105" />
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 relative flex items-center justify-center aspect-square shadow-2xl">
                <i className="fas fa-code text-[120px] text-cyan/80 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Core Capabilities</h2>
            <p className="text-gray-500 text-lg">Comprehensive software engineering services spanning the entire application lifecycle.</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Our Development Process</h2>
            <p className="text-gray-500 text-lg">A transparent, agile workflow ensuring fast delivery without compromising quality.</p>
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
