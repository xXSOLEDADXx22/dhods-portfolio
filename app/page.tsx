/* eslint-disable @next/next/no-img-element */

import BackToTop from "@/components/BackToTop";
import AboutVideo from "@/components/AboutVideo";
import CommitmentsCarousel from "@/components/CommitmentsCarousel";
import EndorsementFormModal from "@/components/EndorsementFormModal";
import ImpactMetrics from "@/components/ImpactMetrics";
import LogoMarquee from "@/components/LogoMarquee";
import RecommendationCarousel from "@/components/RecommendationCarousel";
import SiteNavigation from "@/components/SiteNavigation";
import { portfolio } from "@/data/portfolio";

export default function Home() {
    const visibleSocials = portfolio.socialLinks.filter(
        (social) => social.url.length > 0,
    );

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#060610] text-white">
            <SiteNavigation />

            {/* Hero */}
            <section
                id="home"
                className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:py-28"
            >
                {/* Background gradient lights */}
                <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="pointer-events-none absolute right-[-8rem] top-1/3 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

                <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />

                <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
                    {/* Hero introduction */}
                    <div className="animate-fade-up text-center md:text-left">
                        {/* Personal QA principle */}
                        <figure className="group relative mx-auto mb-8 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left shadow-2xl shadow-violet-500/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07] sm:p-8 md:mx-0">
                            {/* Background glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl transition duration-500 group-hover:bg-pink-500/20" />

                            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

                            {/* Gradient accent */}
                            <div className="relative mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

                            {/* Quote */}
                            <blockquote className="relative text-2xl font-black leading-snug text-white sm:text-3xl lg:text-4xl">
                                The{" "}
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
                                <span className="text-pink-400">.</span>
                            </blockquote>

                            {/* Attribution and permanent-page link */}
                            <figcaption className="relative mt-6 flex items-center justify-between gap-3">
                                {/* Author */}
                                <span className="flex min-w-0 items-center gap-3">
    <span className="h-px w-6 shrink-0 bg-gradient-to-r from-blue-400 to-pink-400 sm:w-8" />

    <span className="whitespace-nowrap text-xs font-semibold text-slate-300 sm:text-base">
      Dhods Soledad, 2026
    </span>
  </span>

                                {/* Principle link */}
                                <a
                                    href="/insights/quality-of-workflow"
                                    aria-label="Read the quality of workflow principle"
                                    className="shrink-0 whitespace-nowrap rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300 transition duration-300 hover:border-pink-400/60 hover:bg-pink-500/10 hover:text-pink-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:px-4 sm:py-2 sm:text-sm"
                                >
                                    <span className="sm:hidden">Read →</span>
                                    <span className="hidden sm:inline">
      Read the principle →
    </span>
                                </a>
                            </figcaption>
                        </figure>

                        {/* Compact animated impact metrics */}
                        <ImpactMetrics metrics={portfolio.impactMetrics} />
                    </div>

                    {/* Profile picture */}
                    <div className="relative flex justify-center">
                        {/* Soft glow behind the photo */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-pink-500/40 blur-3xl sm:h-96 sm:w-96" />

                        {/* Gradient profile-photo border */}
                        <div className="group relative h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 p-1 shadow-2xl shadow-violet-500/20 transition duration-500 hover:scale-[1.03] sm:h-80 sm:w-80">
                            <div className="h-full w-full overflow-hidden rounded-full bg-[#11111d]">
                                <img
                                    src={portfolio.profile.image}
                                    alt={`Professional portrait of ${portfolio.profile.name}`}
                                    draggable={false}
                                    className="h-full w-full rounded-full object-cover object-center transition duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Availability indicator */}
                            <div
                                className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#060610] bg-emerald-500 shadow-lg shadow-emerald-500/30 sm:bottom-7 sm:right-7"
                                title="Available for opportunities"
                            >
                  <span className="sr-only">
                    Available for opportunities
                  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className="flex min-h-[calc(100dvh-5rem)] items-center bg-[#0d0d19] px-4 py-12 sm:px-6 sm:py-16"
            >
                <div className="mx-auto w-full max-w-6xl">
                    <div className="mb-8 text-center md:text-left">
                        <p className="section-label">About Me</p>

                        <h2 className="section-heading mb-0">
                            {portfolio.about.heading}
                        </h2>
                    </div>

                    {/* Personal story video */}
                    <div className="group relative mx-auto w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2 shadow-xl shadow-violet-500/10 backdrop-blur-xl transition duration-500 hover:border-violet-400/50 hover:shadow-violet-500/20 sm:p-3">
                        {/* Glass glow */}
                        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl transition duration-500 group-hover:bg-violet-500/25" />

                        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-pink-500/15 blur-3xl transition duration-500 group-hover:bg-pink-500/25" />

                        {/* Video only — no content panel below */}
                        <div className="relative overflow-hidden rounded-[1.1rem] bg-[#060610]">
                            <AboutVideo
                                src="/videos/about-dhods.mp4"
                                poster="/videos/about-dhods-poster.jpg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivered companies */}
            <LogoMarquee />

            {/* Endorsements */}
            <section
                id="endorsements"
                className="flex min-h-[calc(100dvh-5rem)] items-center overflow-x-clip bg-[#0d0d19] py-10 sm:py-12"
            >
                <div className="w-full">
                    {/* Section introduction */}
                    <div className="mx-auto mb-6 max-w-6xl px-4 text-center sm:px-6">
                        <p className="section-label">
                            Voices of Experience
                        </p>

                        <h2 className="mb-5 text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
                            What Professionals Say About Me
                        </h2>

                        <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-base">
                            Select a profile to read their experience working with me.
                        </p>
                    </div>

                    {/* Recommendation profiles */}
                    <RecommendationCarousel
                        recommendations={portfolio.recommendations}
                    />

                    {/* Endorsement request */}
                    <div className="mt-6 px-4 text-center sm:mt-8">
                        <p className="mx-auto mb-4 max-w-2xl text-sm text-slate-400">
                            {portfolio.recommendationRequest.description}
                        </p>

                        <EndorsementFormModal
                            formUrl={portfolio.recommendationRequest.formUrl}
                        />
                    </div>
                </div>
            </section>

            {/* Commitments */}
            <section
                id="commitments"
                className="flex min-h-[calc(100dvh-5rem)] items-center overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16"
            >
                <div className="mx-auto w-full max-w-6xl">
                    <div className="mb-10 text-center md:text-left">
                        <p className="section-label">Beyond Work</p>

                        <h2 className="section-heading mb-0">
                            Commitments That Matter
                        </h2>
                    </div>

                    <CommitmentsCarousel
                        commitments={portfolio.commitments}
                    />
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="bg-[#0d0d19] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:flex md:min-h-[calc(100dvh-5rem)] md:items-center md:py-16"
            >
                <div className="mx-auto w-full max-w-4xl text-center">
                    <p className="section-label">Contact</p>

                    <h2 className="section-heading">
                        {portfolio.contact.heading}
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
                        {portfolio.contact.description}
                    </p>

                    {/* Social links */}
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        {visibleSocials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target={
                                    social.url.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    social.url.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:-translate-y-1 hover:border-violet-400 hover:text-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>

                    {/* Résumé action — final clickable item */}
                    <div className="flex justify-center">
                        <a
                            href={portfolio.profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-heartbeat rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:border-violet-400 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                        >
                            View Résumé
                        </a>
                    </div>
                </div>
            </section>

            {/* Floating down/up control */}
            <BackToTop />

            {/* Footer */}
            <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
                © {new Date().getFullYear()}{" "}
                {portfolio.profile.name}. All rights reserved.
            </footer>
        </main>
    );
}