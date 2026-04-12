import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sitemap",
  description:
    "Browse all important ByteBricks pages, services, products, and policy links in one place.",
  path: "/sitemap",
  keywords: ["Sitemap", "ByteBricks Navigation", "Website Structure"],
});

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Enquiry", href: "/enquiry" },
      { label: "Offers", href: "/offers" },
      { label: "Payment Options", href: "/payment" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "SaaS Solutions", href: "/services/saas-solutions" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Cloud Services", href: "/services/cloud-architecture" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "Bulk SMS", href: "/services/bulk-sms" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Software & Licenses", href: "/products/software-licenses" },
      { label: "Web Templates", href: "/products/web-templates" },
      { label: "SaaS Platforms", href: "/products/saas-platforms" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Returns & Refund Policy", href: "/returns-and-refund" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Affiliate Disclaimer", href: "/affiliate-disclaimer" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Site Map" breadcrumb="Site Map" />

      <section className="py-20">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h3 className="text-lg font-semibold text-navy mb-4 pb-2 border-b-2 border-cyan">
                  {sec.title}
                </h3>
                <ul className="space-y-3">
                  {sec.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-cyan transition-colors flex items-center gap-2 text-sm"
                      >
                        <i className="fas fa-chevron-right text-cyan text-[0.6rem]" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
