import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact ByteBricks Store for custom software, SaaS, cloud architecture, and IT consulting enquiries.",
  path: "/contact",
  keywords: ["Contact ByteBricks", "Software Consultation", "IT Support"],
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />
      <EnquiryForm />
      <MapSection />
      <Footer />
    </>
  );
}
