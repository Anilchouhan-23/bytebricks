import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const capabilities = [
  { title: "Cloud Migration Strategy", desc: "Seamless lift-and-shift or systematic refactoring of monolithic apps to cloud microservices.", icon: "fa-server" },
  { title: "Serverless Deployments", desc: "Reducing operational overhead with auto-scaling AWS Lambda and Azure Functions.", icon: "fa-bolt" },
  { title: "Performance & Cost Audit", desc: "Optimizing inefficient cloud setups to drastically reduce monthly infrastructure bills.", icon: "fa-money-bill-trend-up" },
];

const processSteps = [
  { step: "01", title: "Infrastructure Audit", desc: "Assessing current server loads, dependencies, and architectural weaknesses." },
  { step: "02", title: "Cloud Blueprinting", desc: "Designing a robust DevOps pipeline and highly-available network topology." },
  { step: "03", title: "Migration Execution", desc: "Gradually moving databases and applications with zero downtime parameters." },
  { step: "04", title: "24/7 Monitoring", desc: "Applying rigorous logging, alerting, and CI/CD security controls post-launch." },
];

export default function CloudArchitecturePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Cloud Architecture" breadcrumb="Cloud Architecture" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Enterprise Scale</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Scalable, Secure, and Cost-Optimized Cloud Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Operating legacy on-premise servers is expensive and risky. We help businesses successfully transition to robust, managed cloud environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Partner with our certified AWS and Azure architects to build infrastructure that auto-scales dynamically with traffic, withstands regional outages, and defends against modern cybersecurity threats. We make the cloud work for your budget.
              </p>
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-lg hover:-translate-y-1 transition-all">
                Audit Your Infrastructure <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl -rotate-3 scale-105" />
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 relative flex items-center justify-center aspect-square shadow-2xl overflow-hidden">
                <i className="fas fa-cloud text-[120px] text-cyan/80 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Cloud Engineering</h2>
            <p className="text-gray-500 text-lg">Next-generation DevOps strategies to modernize your software delivery.</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Migration Execution</h2>
            <p className="text-gray-500 text-lg">Our proven, zero-downtime methodology for transitioning your data securely.</p>
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
