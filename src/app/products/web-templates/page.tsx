import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Web Templates",
  description:
    "Choose conversion-ready web templates and website starter kits tailored for business, ecommerce, and SaaS needs.",
  path: "/products/web-templates",
  keywords: [
    "Web Templates",
    "Business Website Templates",
    "Landing Page Templates",
    "UI Starter Kits",
  ],
});

const products = [
  {
    name: "Corporate Website Starter",
    brand: "ByteBricks",
    icon: "fa-briefcase",
    image: "/images/slides/slide1.jpg",
    desc: "Professional multi-page website template with service pages, lead forms, and contact flows.",
  },
  {
    name: "E-commerce Storefront UI",
    brand: "ByteBricks",
    icon: "fa-bag-shopping",
    image: "/images/slides/slide2.jpg",
    desc: "Responsive storefront template with product listings, offers, and checkout-oriented layouts.",
  },
  {
    name: "SaaS Landing Page Pro",
    brand: "ByteBricks",
    icon: "fa-rocket",
    image: "/images/slides/slide3.jpg",
    desc: "High-converting SaaS landing pages with pricing, feature blocks, testimonials, and CTA sections.",
  },
  {
    name: "Portfolio & Agency Theme",
    brand: "ByteBricks",
    icon: "fa-palette",
    image: "/images/slides/slide4.jpg",
    desc: "Modern visual portfolio layout for agencies, freelancers, and design studios.",
  },
  {
    name: "Dashboard Admin Kit",
    brand: "ByteBricks",
    icon: "fa-chart-line",
    image: "/images/slides/slide2.jpg",
    desc: "Admin template with charts, tables, user management views, and analytics-ready components.",
  },
  {
    name: "Blog & Content Theme",
    brand: "ByteBricks",
    icon: "fa-newspaper",
    image: "/images/slides/slide1.jpg",
    desc: "Editorial-first template optimized for content publishing, categories, and article discovery.",
  },
];

export default function WebTemplatesPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Web Templates" breadcrumb="Web Templates" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="Web Templates"
          brandImages={["tally", "quickheal"]}
          products={products}
          helpText="Need a custom template aligned with your brand guidelines? We can tailor it."
        />
      </section>
      <Footer />
    </>
  );
}
