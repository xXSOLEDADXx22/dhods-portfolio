/*
 * Canonical production website URL.
 *
 * NEXT_PUBLIC_SITE_URL is configured locally and in Vercel.
 * The fallback is used if the environment variable is missing.
 */
const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://dhods.vercel.app";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");