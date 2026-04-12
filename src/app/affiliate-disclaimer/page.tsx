import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Affiliate Disclaimer",
  description:
    "Read ByteBricks Store affiliate disclosure and understand how affiliate partnerships may influence recommendations.",
  path: "/affiliate-disclaimer",
  keywords: [
    "Affiliate Disclaimer",
    "Affiliate Disclosure",
    "ByteBricks Policies",
  ],
});

export default function AffiliateDisclaimerPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Affiliate Disclaimer" breadcrumb="Affiliate Disclaimer" />

      <section className="py-20">
        <div className="w-[90%] max-w-[860px] mx-auto bg-white rounded-2xl p-7 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Affiliate Disclosure
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some links on this website may be affiliate links. This means ByteBricks
            Store may earn a small commission if you purchase through these links, at no
            additional cost to you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We only recommend tools, products, and platforms that we believe can provide
            real value for businesses. Affiliate relationships do not influence our
            technical recommendations, implementation quality, or support standards.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You are always encouraged to independently evaluate any product or service
            before making a purchase decision. Your trust is important to us, and we aim
            to keep all disclosures clear and transparent.
          </p>

          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                How Affiliate Links Work
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Affiliate links help us sustain research and content operations. If you
                click an eligible link and complete a purchase, we may receive a referral
                commission from the provider.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This compensation does not increase the price you pay. In many cases,
                affiliate offers may include the same public pricing or occasionally a
                partner discount made available through campaign terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Editorial Independence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our recommendations are based on practical relevance, service quality,
                implementation feasibility, and long-term value for business users.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We do not sell paid rankings or guarantee positive coverage in exchange
                for affiliate participation. Any sponsorship or paid promotion is intended
                to be identified clearly where applicable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Scope of This Disclosure
              </h3>
              <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
                <li>
                  This disclosure applies to pages, blogs, comparisons, and resource links
                  where affiliate relationships may exist.
                </li>
                <li>
                  Not every outbound link is an affiliate link. Many references are shared
                  solely for informational purposes.
                </li>
                <li>
                  Product availability, pricing, and terms are controlled by third-party
                  vendors and may change without prior notice.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Your Responsibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Before purchasing any third-party product or service, review official
                documentation, terms of service, security commitments, and support policies
                directly from the vendor. Final purchasing decisions remain your
                responsibility.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-navy mb-2">Questions</h3>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding this disclaimer, contact us at{" "}
              <a
                href="mailto:support@bytebricks.store"
                className="text-cyan font-semibold hover:underline"
              >
                support@bytebricks.store
              </a>
              .
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Last updated: April 12, 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
