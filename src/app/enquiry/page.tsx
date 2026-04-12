import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Enquiry",
  description:
    "Submit your project enquiry to ByteBricks Store for software development, SaaS, cloud, and digital transformation services.",
  path: "/enquiry",
  keywords: ["Project Enquiry", "Software Quote", "IT Consulting Enquiry"],
});

export default function EnquiryPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Enquiry" breadcrumb="Enquiry" />
      <EnquiryForm />
      <Footer />
    </>
  );
}
