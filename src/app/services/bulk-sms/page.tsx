import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bulk SMS Services",
  description:
    "Launch transactional and promotional SMS campaigns with ByteBricks bulk messaging and RCS integration services.",
  path: "/services/bulk-sms",
  keywords: ["Bulk SMS", "Transactional SMS", "Promotional SMS", "RCS Messaging"],
});

const capabilities = [
  { title: "Transactional SMS", desc: "Instantly deliver crucial OTPs, alerts, and system notifications with maximum priority.", icon: "fa-bolt" },
  { title: "Promotional SMS", desc: "Launch effective marketing campaigns reaching thousands of potential customers instantly.", icon: "fa-bullhorn" },
  { title: "RCS Business Messaging", desc: "Next-gen rich communication services enabling interactive media, buttons, and carousels right within native SMS apps.", icon: "fa-comment-dots" },
];

const processSteps = [
  { step: "01", title: "Account & DLT Registration", desc: "We guide you through the mandatory DLT compliance process to approve sender IDs." },
  { step: "02", title: "Template Approval", desc: "Creating and approving standard message templates per TRAI regulations." },
  { step: "03", title: "API Integration", desc: "Connecting your backend software to our robust SMS gateways." },
  { step: "04", title: "Campaign Launch", desc: "Uploading contacts, firing campaigns, and analyzing delivery reports." },
];

export default function BulkSMSPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Bulk SMS Services" breadcrumb="Bulk SMS" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Messaging Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Reliable, Fast, and Scalable SMS Communications
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Even in the era of social media, SMS boasts an unparalleled 98% open rate. It remains the most direct and reliable way to communicate critical information to your customers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                ByteBricks offers robust messaging pipelines designed for high-volume enterprise throughput. With deep API integration, comprehensive delivery receipts, and full DLT compliance advisory, we simplify the complex world of telecom regulations so you can focus on your audience.
              </p>
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-lg hover:-translate-y-1 transition-all">
                Start Your Campaign <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl -rotate-3 scale-105" />
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 relative flex items-center justify-center aspect-square shadow-2xl overflow-hidden">
                <i className="fas fa-comment-sms text-[120px] text-cyan/80 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Messaging Products</h2>
            <p className="text-gray-500 text-lg">Tools designed to ensure your message reaches its destination securely.</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Getting Started</h2>
            <p className="text-gray-500 text-lg">A straightforward process to becoming a verified SMS sender.</p>
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

