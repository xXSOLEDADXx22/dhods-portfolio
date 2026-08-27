/* eslint-disable @next/next/no-img-element */

import { client } from "@/sanity/lib/client";
import { PROFILE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const profile = await client.fetch(
      PROFILE_QUERY,
      {},
      {
        cache: "no-store",
      },
  );

  const profileImageUrl =
      profile?.profileImage?.asset?.url ?? "/profile.png";

  const profileImageAlt =
      profile?.profileImage?.alt ??
      `Professional portrait of ${profile?.fullName ?? "Dhods Soledad"}`;

  const resumeUrl =
      profile?.resume?.asset?.url ?? "/Dhods-Soledad-Resume.pdf";

  return (
      <main className="overflow-x-hidden bg-slate-950 text-white">
        {/* Navigation */}
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <a href="#" className="text-lg font-bold text-white sm:text-xl">
              Dhods<span className="text-blue-400">.</span>
            </a>

            <div className="flex items-center gap-3 text-xs font-medium text-slate-300 sm:gap-6 sm:text-sm">
              <a className="transition hover:text-blue-400" href="#">
                Home
              </a>

              <a className="transition hover:text-blue-400" href="#about">
                About
              </a>

              <a className="transition hover:text-blue-400" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
            {/* Introduction */}
            <div className="text-center md:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                {profile?.headline ?? "Quality Assurance • Agile • AI"}
              </p>

              <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
                Hi, I&apos;m {profile?.fullName ?? "Dhods Soledad"}
              </h1>

              <p className="mb-3 text-lg font-semibold text-slate-200">
                {profile?.professionalTitle ?? "Quality Assurance Lead"}
              </p>

              <p className="mb-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {profile?.introduction ??
                    "I’m passionate about building better digital experiences."}
              </p>

              {profile?.location && (
                  <p className="mb-8 text-sm text-slate-400">
                    📍 {profile.location}
                  </p>
              )}

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start">
                <a
                    href="#about"
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-500 sm:w-auto"
                >
                  About Me
                </a>

                <a
                    href="#contact"
                    className="w-full rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold transition hover:border-blue-400 sm:w-auto"
                >
                  Contact Me
                </a>

                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-lg border border-blue-500 px-6 py-3 text-center font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white sm:w-auto"
                >
                  View Résumé
                </a>
              </div>
            </div>

            {/* Profile picture */}
            <div className="flex justify-center">
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-800 shadow-2xl shadow-blue-500/20 sm:h-80 sm:w-80">
                <img
                    src={profileImageUrl}
                    alt={profileImageAlt}
                    className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
            id="about"
            className="flex min-h-screen items-center bg-slate-900 px-4 py-24 sm:px-6"
        >
          <div className="mx-auto w-full max-w-5xl">
            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
              About Me
            </p>

            <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
              Quality, innovation, and meaningful impact
            </h2>

            <div className="grid gap-8 text-base leading-relaxed text-slate-300 sm:text-lg md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Professional Journey
                </h3>

                <p className="whitespace-pre-line">
                  {profile?.about ??
                      "My complete professional introduction will be available soon."}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Technology & Ministry
                </h3>

                <p className="whitespace-pre-line">
                  {profile?.ministryStatement ??
                      "I believe technology can be used to serve people and support meaningful ministry."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
            id="contact"
            className="flex min-h-screen items-center px-4 py-24 sm:px-6"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
              Contact
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Let&apos;s build something meaningful
            </h2>

            <p className="mb-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile?.availability ??
                  "I’m open to opportunities involving Quality Assurance, Agile, AI automation, and technology-driven ministry."}
            </p>

            {profile?.location && (
                <p className="mb-8 text-slate-400">
                  Based in {profile.location}
                </p>
            )}

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              {profile?.email && (
                  <a
                      href={`mailto:${profile.email}`}
                      className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                  >
                    Email Me
                  </a>
              )}

              {profile?.linkedInUrl && (
                  <a
                      href={profile.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
              )}

              {profile?.githubUrl && (
                  <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
                  >
                    GitHub
                  </a>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()}{" "}
          {profile?.fullName ?? "Dhods Soledad"}. All rights reserved.
        </footer>
      </main>
  );
}