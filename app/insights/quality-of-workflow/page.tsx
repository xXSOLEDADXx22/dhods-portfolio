import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://dhods-portfolio.vercel.app";
const pageUrl = `${siteUrl}/insights/quality-of-workflow`;

/*
 * Use the date on which this page is first publicly
 * deployed. Do not change it for minor design updates.
 */
const publicationDate = "2026-09-04";

export const metadata: Metadata = {
    title: "The Quality of Our Workflow | Dhods Soledad",
    description:
        "An original Quality Assurance principle by Dhods Soledad: The quality of our workflow directly influences the quality of our deliverables.",

    authors: [
        {
            name: "Dhods Soledad",
            url: siteUrl,
        },
    ],

    creator: "Dhods Soledad",
    publisher: "Dhods Soledad",

    alternates: {
        canonical: pageUrl,
    },

    openGraph: {
        type: "article",
        url: pageUrl,
        title: "The Quality of Our Workflow | Dhods Soledad",
        description:
            "An original Quality Assurance principle by Dhods Soledad about the connection between workflow quality and deliverable quality.",
        siteName: "Dhods Soledad",
        authors: ["Dhods Soledad"],
        publishedTime: `${publicationDate}T00:00:00+08:00`,
    },

    twitter: {
        card: "summary_large_image",
        title: "The Quality of Our Workflow | Dhods Soledad",
        description:
            "An original Quality Assurance principle by Dhods Soledad.",
    },
};

const quoteSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "The Quality of Our Workflow",
    name: "The Quality of Our Workflow",
    text:
        "The quality of our workflow directly influences the quality of our deliverables.",
    description:
        "An original Quality Assurance principle about how disciplined workflows influence the reliability and quality of final deliverables.",
    author: {
        "@type": "Person",
        name: "Dhods Soledad",
        url: siteUrl,
    },
    creator: {
        "@type": "Person",
        name: "Dhods Soledad",
        url: siteUrl,
    },
    copyrightHolder: {
        "@type": "Person",
        name: "Dhods Soledad",
    },
    copyrightYear: 2026,
    datePublished: publicationDate,
    inLanguage: "en",
    isAccessibleForFree: true,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
};

export default function QualityOfWorkflowPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#060610] px-4 py-10 text-white sm:px-6 sm:py-16">
            {/* Search-engine authorship data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(quoteSchema).replace(
                        /</g,
                        "\\u003c",
                    ),
                }}
            />

            {/* Background lights */}
            <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-4xl">
                {/* Simple page navigation */}
                <header className="mb-12 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-black tracking-tight text-white"
                    >
                        Dhods
                        <span className="text-pink-400">.</span>
                    </Link>

                    <Link
                        href="/"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 backdrop-blur-xl transition hover:border-violet-400/60 hover:text-white"
                    >
                        ← Back to portfolio
                    </Link>
                </header>

                <article>
                    {/* Article category */}
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                        Quality Assurance Principle
                    </p>

                    <h1 className="mb-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                        The Quality of Our Workflow
                    </h1>

                    {/* Original quote */}
                    <figure className="group relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

                        <div className="relative mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

                        <blockquote className="relative text-2xl font-black leading-snug text-white sm:text-4xl lg:text-5xl">
                            “The{" "}
                            <span className="shimmer-text shimmer-1">
                QUALITY
              </span>{" "}
                            of our{" "}
                            <span className="shimmer-text shimmer-2">
                WORKFLOW
              </span>{" "}
                            directly influences the{" "}
                            <span className="shimmer-text shimmer-3">
                QUALITY
              </span>{" "}
                            of our{" "}
                            <span className="shimmer-text shimmer-4">
                DELIVERABLES
              </span>
                            <span className="text-pink-400">.</span>”
                        </blockquote>

                        <figcaption className="relative mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300 sm:text-base">
                            <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-pink-400" />

                            <span>Dhods Soledad</span>

                            <span className="text-slate-600">•</span>

                            <time dateTime={publicationDate}>
                                September 4, 2026
                            </time>
                        </figcaption>
                    </figure>

                    {/* Written perspective */}
                    <div className="glass-card space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
                        <p>
                            This principle reflects how I approach Quality
                            Assurance: reliable outcomes begin long before
                            testing starts.
                        </p>

                        <p>
                            The quality of a deliverable is shaped by the
                            workflow behind it—clear requirements, effective
                            collaboration, disciplined processes, thoughtful
                            validation, and continuous improvement.
                        </p>

                        <p>
                            When quality is embedded throughout the workflow,
                            teams can identify risks earlier, communicate more
                            clearly, and deliver products with greater
                            confidence.
                        </p>

                        <p>
                            Quality Assurance is therefore not only about
                            finding defects. It is about strengthening the
                            entire journey from an idea to a dependable
                            production experience.
                        </p>
                    </div>

                    {/* Authorship notice */}
                    <footer className="mt-8 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 p-5 text-sm leading-7 text-slate-400">
                        Originally written and published by{" "}
                        <strong className="text-slate-200">
                            Dhods Soledad
                        </strong>{" "}
                        on{" "}
                        <time dateTime={publicationDate}>
                            September 4, 2026
                        </time>
                        .
                    </footer>
                </article>
            </div>
        </main>
    );
}