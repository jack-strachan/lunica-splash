import { Metadata } from "next"
import { siteConfig } from "@/content/site"

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    ...(title && { title: `${title} | ${siteConfig.name}` }),
    description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [image],
      creator: "@lunica",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180" },
      ],
    },
    manifest: "/site.webmanifest",
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
