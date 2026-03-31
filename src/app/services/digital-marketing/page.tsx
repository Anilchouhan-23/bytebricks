import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const capabilities = [
  { title: "Search Engine Optimization", desc: "Technical and content-driven SEO to boost your organic rankings, traffic, and domain authority on Google.", icon: "fa-magnifying-glass-chart" },
  { title: "Social Media Campaigns", desc: "Data-driven advertising and community management across platforms like LinkedIn, Instagram, and Facebook.", icon: "fa-hashtag" },
  { title: "Email Marketing Automations", desc: "Personalized, high-converting email funnels using modern digital tools to nurture leads into loyal customers.", icon: "fa-envelope-open-text" },
];

const processSteps = [
  { step: "01", title: "Market Research", desc: "Analyzing your ideal customer profiles, competitor gaps, and high-value keywords." },
  { step: "02", title: "Content Strategy", desc: "Drafting engaging social media calendars, blogs, and compelling email copy." },
  { step: "03", title: "Campaign Execution", desc: "Deploying targeted ads and utilizing premium digital marketing tools." },
  { step: "04", title: "Analytics & ROI", desc: "Tracking conversions, cost-per-click, and optimizing funnels for maximum return." },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Digital Marketing" breadcrumb="Digital Marketing" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Growth & Visibility</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Data-Driven SEO, Social Media, and Email Marketing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Building great software or maintaining incredible digital tools is just half the battle. If your target audience cannot find your SaaS or applications, growth stalls. We provide end-to-end digital marketing solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our suite of high-performance digital marketing services leverages the latest SEO techniques, deep social media targeting algorithms, and automated email drip campaigns. We utilize premium digital tools to maximize visibility on search engines, engage your social audience, and turn raw traffic into paying subscribers and loyal enterprise software clients.
              </p>
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-lg hover:-translate-y-1 transition-all">
                Grow Your Brand <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl -rotate-3 scale-105" />
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 relative flex items-center justify-center aspect-square shadow-2xl overflow-hidden">
                <i className="fas fa-bullseye text-[120px] text-cyan/80 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Marketing Capabilities</h2>
            <p className="text-gray-500 text-lg">Premium digital marketing solutions deploying cutting-edge digital tools.</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Our Growth Roadmap</h2>
            <p className="text-gray-500 text-lg">A structured funnel to scale your customer acquisition strategies.</p>
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
