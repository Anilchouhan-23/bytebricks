import Link from "next/link";
import { BlogPost, formatBlogDate } from "@/data/blogPosts";
import BlogImage from "@/components/BlogImage";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all">
      <div className="relative aspect-[16/9]">
        <BlogImage
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        <span className="absolute bottom-4 left-4 bg-cyan text-navy text-xs font-bold px-3 py-1.5 rounded">
          {formatBlogDate(post.publishedAt)}
        </span>
        <span className="absolute top-4 right-4 bg-black/45 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-navy mb-3 hover:text-cyan transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-cyan font-medium text-sm hover:gap-3 transition-all"
        >
          Read More <i className="fas fa-arrow-right text-xs" />
        </Link>
      </div>
    </article>
  );
}
