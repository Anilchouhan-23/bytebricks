const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src/app/services');
const dirs = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

dirs.forEach(dir => {
  const filePath = path.join(servicesDir, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('id="expanded-content"')) {
    console.log(`Skipping ${dir}, already expanded.`);
    return;
  }
  
  const newSections = `
      {/* Expanded Content Section */}
      <section id="expanded-content" className="py-20 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <span className="text-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl font-bold text-navy mb-6">Your Strategic Technology Partner</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                In today's hyper-competitive digital ecosystem, having a reliable technology lifecycle partner is the difference between leading the market and falling behind. We don't just execute tasks; we consult, strategize, and build robust foundations that guarantee long-term operational success for your business.
              </p>
              <ul className="space-y-6 mb-8 mt-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <i className="fas fa-award text-cyan" />
                  </div>
                  <div>
                    <strong className="text-navy block mb-1 text-lg">Industry-Leading Expertise</strong>
                    <p className="text-gray-600 text-base leading-relaxed">Our engineers, designers, and strategists bring over a decade of enterprise-grade experience to every project we undertake.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <i className="fas fa-shield-halved text-cyan" />
                  </div>
                  <div>
                    <strong className="text-navy block mb-1 text-lg">Scalable & Secure by Design</strong>
                    <p className="text-gray-600 text-base leading-relaxed">We build system architectures meant to effortlessly handle massive traffic spikes and pass the most stringent security audits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <i className="fas fa-headset text-cyan" />
                  </div>
                  <div>
                    <strong className="text-navy block mb-1 text-lg">Dedicated Ongoing Support</strong>
                    <p className="text-gray-600 text-base leading-relaxed">Post-launch, our 24/7 SLA-driven support ensures reliable uptime, zero downtime deployments, and rapid bug resolution.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <div className="bg-navy rounded-3xl p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan/10 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen" />
                
                <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Technology Stack</h2>
                <p className="text-white/70 mb-10 leading-relaxed text-lg relative z-10">
                  We utilize the latest, most reliable frameworks and cloud tools to ensure your product is blindingly fast, maintainable, and future-proof.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
                  {[
                    { name: "React", icon: "fa-brands fa-react" },
                    { name: "Node.js", icon: "fa-brands fa-node-js" },
                    { name: "AWS Cloud", icon: "fa-brands fa-aws" },
                    { name: "Docker", icon: "fa-brands fa-docker" },
                    { name: "Databases", icon: "fa-solid fa-database" },
                    { name: "Security", icon: "fa-solid fa-lock" },
                  ].map(tech => (
                    <div key={tech.name} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:border-cyan/50 transition-all backdrop-blur-sm group">
                      <i className={\`\${tech.icon} text-3xl text-white/50 group-hover:text-cyan mb-3 transition-colors\`} />
                      <span className="block text-sm font-semibold text-white/90">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center relative z-10">
                  <a href="/enquiry" className="inline-block px-8 py-3.5 rounded-full font-semibold bg-white text-navy hover:bg-cyan transition-colors w-full sm:w-auto">
                    Request a Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

  content = content.replace('<Footer />', newSections + '\n      <Footer />');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(\`Updated \${dir}\`);
});
