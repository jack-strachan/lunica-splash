const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "https://lunica.com"
}

export const siteConfig = {
  name: "Lunica",
  description: "The ultimate toolkit for exceptional credit and collections teams. Save time, stay ahead of risk, and recover more cash with less effort.",
  url: getBaseUrl(),
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/lunica",
    github: "https://github.com/lunica",
  },
}
