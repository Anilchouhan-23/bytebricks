import type { Metadata } from "next";

const siteName = "ByteBricks Store";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bytebricks.store";
const defaultImage = "/images/slides/slide2.jpg";

interface BuildMetadataInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function getSiteMetadataBase(): URL {
  return new URL(siteUrl);
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultImage,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();

  return {
    title: `${title} | ${siteName}`,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${title} | ${siteName}`,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
