import Link from "next/link";

const services = [
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "SaaS Solutions", href: "/services/saas-solutions" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Cloud Architecture", href: "/services/cloud-architecture" },
  { label: "IT Consulting", href: "/services/it-consulting" },
  { label: "Web Services", href: "/services/web-services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Enquiry", href: "/enquiry" },
];

const policies = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Returns & Refund Policy", href: "/returns-and-refund" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Affiliate Disclaimer", href: "/affiliate-disclaimer" },
  { label: "Site Map", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-6">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              ByteBricks Store
            </h4>
            <p className="text-sm leading-relaxed mb-3 text-gray-400">
              We specialize in{" "}
              <strong className="text-gray-200">
                Custom Software, SaaS Platforms, Cloud Architecture, and IT Consulting
              </strong>{" "}
              for modern businesses.
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              Our team helps you design, build, and scale reliable digital products
              with long-term performance and security in mind.
            </p>
            <div className="flex gap-3 mt-4">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="text-gray-400 text-lg hover:text-cyan transition-colors"
                    aria-label={icon}
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-cyan transition-colors"
                  >
                    <i className="fas fa-chevron-right text-cyan text-xs mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-cyan transition-colors"
                  >
                    <i className="fas fa-chevron-right text-cyan text-xs mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {policies.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-cyan">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <i className="fas fa-map-marker-alt text-cyan mr-2" />
                Hyderabad, Telangana, India
              </p>
              <p>
                <i className="fas fa-phone text-cyan mr-2" />
                +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope text-cyan mr-2" />
                support@bytebricks.store
              </p>
              <p>
                <i className="fas fa-globe text-cyan mr-2" />
                www.bytebricks.store
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <span>&copy; 2026 ByteBricks Store. All Rights Reserved.</span>
          <span className="flex gap-2 flex-wrap justify-center">
            <Link href="/terms-and-conditions" className="text-cyan hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="text-cyan hover:underline">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/affiliate-disclaimer" className="text-cyan hover:underline">
              Affiliate Disclaimer
            </Link>
            <span>&bull;</span>
            <Link href="/sitemap" className="text-cyan hover:underline">
              Sitemap
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
