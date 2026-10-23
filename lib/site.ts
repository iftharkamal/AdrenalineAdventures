// Set NEXT_PUBLIC_SITE_URL to the production domain so canonical URLs, Open Graph and the sitemap are absolute
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE_NAME = "Adrenaline Adventures";
