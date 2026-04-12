"use client";

import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { DEFAULT_BLOG_IMAGE, getBlogImageSrc } from "@/data/blogPosts";

type BlogImageProps = Omit<ImageProps, "src"> & {
  src?: string;
  fallbackSrc?: string;
};

export default function BlogImage({
  src,
  fallbackSrc = DEFAULT_BLOG_IMAGE,
  ...props
}: BlogImageProps) {
  const [imageSrc, setImageSrc] = useState(getBlogImageSrc(src));

  useEffect(() => {
    setImageSrc(getBlogImageSrc(src));
  }, [src]);

  return (
    <Image
      {...props}
      src={imageSrc}
      onError={() => {
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        }
      }}
    />
  );
}
