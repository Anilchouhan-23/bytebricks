import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Payment Options",
  description:
    "Review ByteBricks Store payment options including UPI, card payments, bank transfer, and invoicing support.",
  path: "/payment",
  keywords: ["Payment Options", "UPI Payment", "Bank Transfer", "ByteBricks"],
});

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
