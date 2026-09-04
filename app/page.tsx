/* eslint-disable @next/next/no-img-element */

import BackToTop from "@/components/BackToTop";
import EndorsementFormModal from "@/components/EndorsementFormModal";
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
                <figcaption className="relative mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300 sm:text-base">
                  <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-pink-400" />

                  <span>Dhods Soledad, 2026</span>

                  <span className="text-slate-600">•</span>

                  <a
                      href="/insights/quality-of-workflow"
                      className="text-violet-400 transition hover:text-pink-400"
                  >
                    Read the principle →
                  </a>
                </figcaption>
              </figure>

              {/* Compact impact metrics */}
              <div className="mx-auto grid max-w-xl grid-cols-3 gap-2 sm:gap-3 md:mx-0">
                {portfolio.impactMetrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-4 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-white/[0.08] sm:px-4 sm:py-5"
                    >
                      {/* Metric hover glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-pink-500/0 transition duration-300 group-hover:from-blue-500/10 group-hover:via-violet-500/10 group-hover:to-pink-500/10" />

                      {/* Metric value */}
                      <p className="relative whitespace-nowrap bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-sm font-black text-transparent min-[400px]:text-base sm:text-2xl">
                        {metric.value}
                      </p>

                      {/* Metric label */}
                      <p className="relative mt-1 text-[9px] font-medium leading-tight text-slate-400 min-[400px]:text-[10px] sm:text-xs">
                        {metric.label}
                      </p>
                    </div>
                ))}
              </div>
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
          <div className="mx-auto max-w-6xl">
            <p className="section-label">About Me</p>

            <h2 className="section-heading">
              {portfolio.about.heading}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="glass-card">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

                <h3 className="mb-4 text-xl font-bold">
                  Professional Journey
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {portfolio.about.professional}
                </p>
              </article>

              <article className="glass-card">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

                <h3 className="mb-4 text-xl font-bold">
                  Technology &amp; Ministry
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {portfolio.about.ministry}
                </p>
              </article>
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
            className="flex min-h-[calc(100dvh-5rem)] items-center px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Beyond Work</p>

            <h2 className="section-heading">
              Volunteer Work &amp; Commitments
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {portfolio.commitments.map((commitment) => (
                  <article
                      key={commitment.title}
                      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                  >
                    <div className="flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-pink-500/20">
                      {commitment.image ? (
                          <img
                              src={commitment.image}
                              alt={commitment.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                      ) : (
                          <span className="px-6 text-center text-lg font-bold text-slate-300">
                      {commitment.category}
                    </span>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between gap-3 text-sm">
                    <span className="text-violet-400">
                      {commitment.category}
                    </span>

                        <span className="text-slate-500">
                      {commitment.date}
                    </span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold">
                        {commitment.title}
                      </h3>

                      <p className="leading-relaxed text-slate-300">
                        {commitment.description}
                      </p>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
            id="contact"
            className="flex min-h-[calc(100dvh-5rem)] items-center bg-[#0d0d19] px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-4xl text-center">
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
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:-translate-y-1 hover:border-violet-400 hover:text-violet-300"
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
                  className="resume-heartbeat rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:border-violet-400 hover:bg-white/10"
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