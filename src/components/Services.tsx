"use client";

import Link from "next/link";
import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: "fa-code",
    title: "Custom Software",
    desc: "Tailor-made software solutions designed to meet your specific business requirements and streamline your workflows operations.",
    href: "/services/custom-software",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Architecture",
    desc: "Scalable and secure cloud infrastructure setup, migration, and management ensuring your applications run seamlessly.",
    href: "/services/cloud-architecture",
  },
  {
    icon: "fa-mobile-screen",
    title: "Mobile App Development",
    desc: "High-performance native and cross-platform mobile applications that provide intuitive experiences on both iOS and Android.",
    href: "/services/mobile-apps",
  },
  {
    icon: "fa-laptop-code",
    title: "SaaS Solutions",
    desc: "End-to-end development of Software-as-a-service platforms perfectly suited for enterprise and scalable businesses.",
    href: "/services/saas-solutions",
  },
  {
    icon: "fa-chart-line",
    title: "IT Consulting",
    desc: "Expert technical guidance and strategy planning to navigate complex digital transformations and infrastructure upgrades.",
    href: "/services/it-consulting",
  },
  {
    icon: "fa-envelope-open-text",
    title: "Bulk SMS & Web Services",
    desc: "Domain registration, web hosting, business email solutions, and bulk SMS/RCS messaging services for your digital presence.",
    href: "/services",
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-20">
      <div ref={ref} className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Our Services</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Comprehensive software development and digital solutions.
          </p>
          <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-t-4 border-transparent hover:border-t-cyan hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-cyan group-hover:scale-110 transition-all duration-300">
                <i
                  className={`fas ${s.icon} text-3xl text-cyan group-hover:text-navy transition-colors`}
                />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-cyan text-sm font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
