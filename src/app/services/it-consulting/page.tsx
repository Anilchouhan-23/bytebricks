import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "IT Consulting Services",
  description:
    "Get strategic IT consulting from ByteBricks for digital transformation, enterprise architecture, and cybersecurity planning.",
  path: "/services/it-consulting",
  keywords: [
    "IT Consulting",
    "Digital Transformation",
    "Enterprise Architecture",
    "Cybersecurity Audit",
  ],
});

const capabilities = [
  { title: "Digital Transformation Roadmap", desc: "Long-term strategies to integrate modern technologies and retire manual workflows.", icon: "fa-map-location-dot" },
  { title: "Enterprise Architecture", desc: "Evaluating your current tech stack for bottlenecks, tech-debt, and alignment with business goals.", icon: "fa-sitemap" },
  { title: "Cybersecurity Audits", desc: "Risk assessments and vulnerability scans to ensure regulatory compliance and data protection.", icon: "fa-shield-halved" },
];

const processSteps = [
  { step: "01", title: "Discovery Phase", desc: "Deep diving into your organizational structure, goals, and legacy systems." },
  { step: "02", title: "Gap Assessment", desc: "Identifying friction points between where your technology is and where it needs to be." },
  { step: "03", title: "Strategic Roadmap", desc: "Delivering a comprehensive, phased execution plan with ROI projections." },
  { step: "04", title: "Vendor Management", desc: "Assisting in software selection, implementation oversight, and training." },
];

export default function ITConsultingPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="IT Consulting Strategy" breadcrumb="IT Consulting" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Strategic Vision</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Empowering Decisions with Technical Expertise
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Navigating complex software transitions and digital initiatives can be overwhelming. Making the wrong technological choice early on can severely handicap growth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our seasoned IT consultants bridge the gap between business objectives and technical realities. We evaluate your current systems, propose vendor-neutral solutions, structure secure architectures, and provide the technical leadership needed to execute large-scale digital transformations confidently.
              </p>
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-lg hover:-translate-y-1 transition-all">
                Schedule a Consultation <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl rotate-3 scale-105" />
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 relative flex items-center justify-center aspect-square shadow-2xl overflow-hidden">
                <i className="fas fa-network-wired text-[120px] text-cyan/80 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Advisory Services</h2>
            <p className="text-gray-500 text-lg">Vendor-agnostic technical advice driving measurable business outcomes.</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Consultation Lifecycle</h2>
            <p className="text-gray-500 text-lg">Our systematic approach to uncovering hidden opportunities for automation and scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
            {processSteps.map((step) => (
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

