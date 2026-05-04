import { Metadata } from "next"
import { siteConfig } from "@/content/site"

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "/",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  path?: string
  noIndex?: boolean
} = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString()
  const resolvedTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name

  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    ...(title && { title: resolvedTitle }),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
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
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  }
}
