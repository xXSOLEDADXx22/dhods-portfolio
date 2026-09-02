/* eslint-disable @next/next/no-img-element */

import BackToTop from "@/components/BackToTop";
import LogoMarquee from "@/components/LogoMarquee";
import SiteNavigation from "@/components/SiteNavigation";
import { portfolio } from "@/data/portfolio";

function initials(name: string) {
  return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
}

export default function Home() {
  const visibleSocials = portfolio.socialLinks.filter(
      (social) => social.url.length > 0,
  );

  return (
      <main className="min-h-screen overflow-x-hidden bg-[#060610] text-white">
        <SiteNavigation />

        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6">
          <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-[-8rem] top-1/3 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-up text-center md:text-left">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                {portfolio.profile.headline}
              </p>

              <h1 className="mb-5 text-4xl font-black leading-tight sm:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                {portfolio.profile.name}
              </span>
              </h1>

              <p className="mb-3 text-xl font-semibold text-white">
                {portfolio.profile.title}
              </p>

              <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg md:mx-0">
                {portfolio.profile.introduction}
              </p>

              <p className="mb-8 text-sm text-slate-400">
                📍 {portfolio.profile.location}
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
                <a
                    href="#about"
                    className="rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-6 py-3 text-center font-semibold transition hover:scale-105"
                >
                  Discover My Story
                </a>

                <a
                    href={portfolio.profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold transition hover:border-violet-400 hover:bg-white/10"
                >
                  View Résumé
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-40 blur-2xl sm:h-96 sm:w-96" />

              <div className="relative h-64 w-64 rounded-[2rem] bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 p-1 sm:h-80 sm:w-80">
                <div className="h-full w-full overflow-hidden rounded-[1.8rem] bg-[#11111d]">
                  <img
                      src={portfolio.profile.image}
                      alt={`Professional portrait of ${portfolio.profile.name}`}
                      className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-[#0d0d19] px-4 py-24 sm:px-6">
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
                  Technology & Ministry
                </h3>
                <p className="leading-relaxed text-slate-300">
                  {portfolio.about.ministry}
                </p>
              </article>
            </div>
          </div>
        </section>

        <LogoMarquee />

        {/* Recommendations */}
        <section
            id="recommendations"
            className="scroll-mt-20 bg-[#0d0d19] px-4 py-24 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Recommendations</p>
            <h2 className="section-heading">
              What people say about working with me
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolio.recommendations.map((recommendation) => (
                  <article
                      key={recommendation.name}
                      className="glass-card flex flex-col"
                  >
                    <p className="mb-8 flex-1 leading-relaxed text-slate-300">
                      “{recommendation.recommendation}”
                    </p>

                    <div className="flex items-center gap-4">
                      {recommendation.photo ? (
                          <img
                              src={recommendation.photo}
                              alt={recommendation.name}
                              className="h-12 w-12 rounded-full object-cover"
                          />
                      ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 font-bold">
                            {initials(recommendation.name)}
                          </div>
                      )}

                      <div>
                        <p className="font-bold">{recommendation.name}</p>
                        <p className="text-sm text-slate-400">
                          {recommendation.position}, {recommendation.company}
                        </p>
                        <p className="text-xs text-violet-400">
                          {recommendation.relationship}
                        </p>
                      </div>
                    </div>
                  </article>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 p-8 text-center">
              <h3 className="mb-3 text-2xl font-bold">
                {portfolio.recommendationRequest.heading}
              </h3>

              <p className="mx-auto mb-6 max-w-2xl text-slate-300">
                {portfolio.recommendationRequest.description}
              </p>

              <a
                  href={portfolio.recommendationRequest.formUrl || "#contact"}
                  target={
                    portfolio.recommendationRequest.formUrl ? "_blank" : undefined
                  }
                  rel={
                    portfolio.recommendationRequest.formUrl
                        ? "noopener noreferrer"
                        : undefined
                  }
                  className="inline-block rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-6 py-3 font-semibold transition hover:scale-105"
              >
                Give a Recommendation
              </a>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section
            id="commitments"
            className="scroll-mt-20 px-4 py-24 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Beyond Work</p>
            <h2 className="section-heading">
              Volunteer Work & Commitments
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
            className="scroll-mt-20 bg-[#0d0d19] px-4 py-24 sm:px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-label">Contact</p>
            <h2 className="section-heading">
              {portfolio.contact.heading}
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
              {portfolio.contact.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {visibleSocials.map((social) => (
                  <a
                      key={social.name}
                      href={social.url}
                      target={
                        social.url.startsWith("http") ? "_blank" : undefined
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
          </div>
        </section>

        <BackToTop />

        <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {portfolio.profile.name}. All rights
          reserved.
        </footer>
      </main>
  );
}