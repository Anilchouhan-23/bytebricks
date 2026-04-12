import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import BlogImage from "@/components/BlogImage";
import {
  formatBlogDate,
  getBlogImageSrc,
  getAllBlogPosts,
  getBlogPostBySlug,
} from "@/data/blogPosts";
import { buildMetadata } from "@/lib/seo";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: BlogDetailPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, ...post.tags, "ByteBricks Blog"],
    image: getBlogImageSrc(post.featuredImage),
  });
}

export default async function BlogDetailPage(props: BlogDetailPageProps) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <PageBanner title={post.title} breadcrumb="Blog Details" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1000px] mx-auto">
          <article className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="relative aspect-[16/9]">
              <BlogImage
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-cyan/10 text-cyan text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">
                  {formatBlogDate(post.publishedAt)}
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-navy mb-4">
                {post.title}
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {post.excerpt}
              </p>

              <div className="space-y-8">
                {post.sections.map((section) => (
                  <section key={section.heading ?? section.paragraphs[0]}>
                    {section.heading ? (
                      <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                        {section.heading}
                      </h2>
                    ) : null}
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-gray-600 leading-relaxed text-[1.03rem]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-navy mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy mb-5">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-xl border border-gray-200 p-5 hover:border-cyan hover:-translate-y-1 transition-all bg-white"
                >
                  <span className="text-xs text-cyan font-semibold">{item.category}</span>
                  <h3 className="text-navy font-semibold mt-2 leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-cyan text-sm mt-4">
                    Read Article <i className="fas fa-arrow-right text-xs" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-all"
            >
              <i className="fas fa-arrow-left text-xs" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
