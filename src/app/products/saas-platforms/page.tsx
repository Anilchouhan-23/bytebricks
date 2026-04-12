import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProductPageLayout from "@/components/ProductPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SaaS Platforms",
  description:
    "Explore business-focused SaaS platforms from ByteBricks including CRM, HRMS, inventory, and support solutions.",
  path: "/products/saas-platforms",
  keywords: [
    "SaaS Platforms",
    "CRM Software",
    "HRMS Software",
    "Inventory SaaS",
  ],
});

const products = [
  {
    name: "Sales CRM Suite",
    brand: "ByteBricks",
    icon: "fa-users",
    image: "/images/slides/slide3.jpg",
    desc: "Track leads, automate follow-ups, and monitor pipeline health with role-based access controls.",
  },
  {
    name: "HRMS & Payroll Cloud",
    brand: "ByteBricks",
    icon: "fa-user-tie",
    image: "/images/slides/slide4.jpg",
    desc: "Manage attendance, payroll workflows, employee records, and policy compliance from one dashboard.",
  },
  {
    name: "Inventory & Billing SaaS",
    brand: "ByteBricks",
    icon: "fa-boxes-stacked",
    image: "/images/slides/slide2.jpg",
    desc: "Real-time stock management, invoicing, purchase orders, and GST-ready reports in one platform.",
  },
  {
    name: "Customer Support Desk",
    brand: "ByteBricks",
    icon: "fa-headset",
    image: "/images/slides/slide1.jpg",
    desc: "Handle tickets, SLAs, and multichannel support operations with analytics and automation rules.",
  },
  {
    name: "Project Delivery Hub",
    brand: "ByteBricks",
    icon: "fa-list-check",
    image: "/images/slides/slide3.jpg",
    desc: "Plan projects, assign sprints, monitor milestones, and centralize files and communication.",
  },
  {
    name: "Subscription Billing Engine",
    brand: "ByteBricks",
    icon: "fa-credit-card",
    image: "/images/slides/slide4.jpg",
    desc: "Manage recurring plans, invoicing cycles, and revenue tracking for subscription businesses.",
  },
];

export default function SaaSPlatformsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="SaaS Platforms" breadcrumb="SaaS Platforms" />
      <section className="py-20">
        <ProductPageLayout
          activeCategory="SaaS Platforms"
          brandImages={["tally", "quickheal"]}
          products={products}
          helpText="Looking for a white-labeled SaaS solution? We can adapt the platform for your domain."
        />
      </section>
      <Footer />
    </>
  );
}
