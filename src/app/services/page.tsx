import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "fa-code",
    title: "Custom Software",
    href: "/services/custom-software",
    desc: "Tailor-made software solutions designed to meet your specific business requirements and streamline your workflows operations.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Architecture",
    href: "/services/cloud-architecture",
    desc: "Scalable and secure cloud infrastructure setup, migration, and management ensuring your applications run seamlessly.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    desc: "High-performance native and cross-platform mobile applications that provide intuitive experiences on both iOS and Android.",
  },
  {
    icon: "fa-laptop-code",
    title: "SaaS Solutions",
    href: "/services/saas-solutions",
    desc: "End-to-end development of Software-as-a-service platforms perfectly suited for enterprise and scalable businesses.",
  },
  {
    icon: "fa-chart-line",
    title: "IT Consulting",
    href: "/services/it-consulting",
    desc: "Expert technical guidance and strategy planning to navigate complex digital transformations and infrastructure upgrades.",
  },
  {
    icon: "fa-envelope-open-text",
    title: "Bulk SMS",
    href: "/services/bulk-sms",
    desc: "Affordable bulk SMS and RCS messaging services for marketing campaigns, notifications, OTP delivery, and business communication.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Our Services" breadcrumb="Services" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">
              What We Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              ByteBricks Store provides comprehensive software and digital solutions
              tailored for businesses of all sizes across India.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-t-4 border-transparent hover:border-t-cyan hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all block"
              >
                <i className={`fas ${s.icon} text-5xl text-cyan mb-5`} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span className="inline-block mt-4 text-cyan font-medium text-sm">
                  Learn More <i className="fas fa-arrow-right ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
