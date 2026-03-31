import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Software Solutions in Gurgaon - Complete Guide",
    excerpt:
      "Looking for reliable custom software solutions in Gurgaon? Software Pilot provides complete end-to-end development, architecture, and consulting for businesses of all sizes.",
    date: "24 Mar 2026",
    category: "Software",
    icon: "fa-code",
  },
  {
    id: 2,
    title: "Cloud Infrastructure Setup for Business",
    excerpt:
      "Scale your business globally with our professional cloud solutions. We work with leading platforms like AWS and Azure to modernize your application architecture.",
    date: "24 Mar 2026",
    category: "Cloud",
    icon: "fa-cloud-arrow-up",
  },
  {
    id: 3,
    title: "How to Choose the Best SaaS Platform for Your Business",
    excerpt:
      "A complete guide to selecting the right SaaS solutions. Compare custom in-house software versus established platforms for enterprise and startup use.",
    date: "16 Sep 2025",
    category: "SaaS",
    icon: "fa-laptop-code",
  },
  {
    id: 4,
    title: "Choosing the Right IT Consulting Partner",
    excerpt:
      "How to find a reliable IT consulting service for your business. Tips on selecting the right strategists for digital transformation and enterprise architecture.",
    date: "12 Sep 2025",
    category: "Consulting",
    icon: "fa-chart-line",
  },
  {
    id: 5,
    title: "Benefits of Cross-platform Mobile Apps",
    excerpt:
      "Why your business needs a mobile application. Explore the difference between native and cross-platform apps to enhance your user engagement.",
    date: "05 Aug 2025",
    category: "Mobile",
    icon: "fa-mobile-screen",
  },
  {
    id: 6,
    title: "API vs Microservices: Which Architecture is Right?",
    excerpt:
      "Compare traditional monolithic models with modern microservices. Understand development costs, features and scalability to make the right choice.",
    date: "20 Jul 2025",
    category: "Architecture",
    icon: "fa-server",
  },
];

const tags = [
  "Custom Software",
  "SaaS",
  "Cloud Migration",
  "Cloud Architecture",
  "IT Consulting",
  "Mobile Apps",
  "API Development",
  "Web Hosting",
  "React",
  "Bulk SMS",
];

const recentPosts = posts.slice(0, 5);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Blog" breadcrumb="Blog" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-[2]">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all"
                >
                  {/* Image placeholder */}
                  <div className="bg-gradient-to-br from-navy-light to-navy-dark h-[250px] flex items-center justify-center relative">
                    <i
                      className={`fas ${post.icon} text-7xl text-white/15`}
                    />
                    <span className="absolute bottom-4 left-4 bg-cyan text-navy text-xs font-bold px-3 py-1.5 rounded">
                      {post.date}
                    </span>
                    <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-navy mb-3 hover:text-cyan transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-cyan font-medium text-sm cursor-pointer hover:gap-3 transition-all">
                      Read More <i className="fas fa-arrow-right text-xs" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <span className="w-10 h-10 bg-cyan text-navy font-bold rounded-lg flex items-center justify-center">
                1
              </span>
              <span className="w-10 h-10 bg-white text-gray-600 font-medium rounded-lg flex items-center justify-center shadow hover:bg-cyan hover:text-navy transition-colors cursor-pointer">
                2
              </span>
              <span className="w-10 h-10 bg-white text-gray-600 font-medium rounded-lg flex items-center justify-center shadow hover:bg-cyan hover:text-navy transition-colors cursor-pointer">
                3
              </span>
              <span className="w-10 h-10 bg-white text-gray-600 font-medium rounded-lg flex items-center justify-center shadow hover:bg-cyan hover:text-navy transition-colors cursor-pointer">
                <i className="fas fa-chevron-right text-sm" />
              </span>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex-1 space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-bold text-navy mb-5 pb-3 border-b-2 border-cyan">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex gap-3 cursor-pointer group"
                  >
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-navy-light to-navy rounded-lg flex items-center justify-center shrink-0">
                      <i
                        className={`fas ${post.icon} text-white/30 text-lg`}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-navy group-hover:text-cyan transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-bold text-navy mb-5 pb-3 border-b-2 border-cyan">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-cyan hover:text-cyan hover:bg-cyan/5 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-center">
              <i className="fas fa-headset text-4xl text-cyan/40 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Need IT Support?
              </h3>
              <p className="text-blue-200/60 text-sm mb-4">
                Get in touch with our expert team for any IT needs.
              </p>
              <Link
                href="/enquiry"
                className="inline-block px-6 py-2.5 bg-cyan text-navy font-semibold rounded-full text-sm hover:bg-cyan-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
