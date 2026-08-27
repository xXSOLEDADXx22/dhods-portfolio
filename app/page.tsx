import Image from "next/image";

export default function Home() {
  return (
      <main className="overflow-x-hidden bg-slate-950 text-white">
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
        {/* Hero section */}
        {/* Hero section */}
        <section className="flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
            {/* Introduction */}
            <div className="text-center md:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Quality Assurance • Agile • AI
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                Hi, I&apos;m Dhods Soledad
              </h1>

              <p className="mb-8 text-base leading-relaxed text-slate-300 sm:text-lg">
                I&apos;m a Quality Assurance Lead passionate about building better
                digital experiences through quality engineering, Agile delivery,
                AI-powered automation, and technology-driven ministry.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start">
                <a
                    href="#about"
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-500 sm:w-auto"
                >
                  About Me
                </a>

                <a
                    href="#contact"
                    className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400"
                >
                  Contact Me
                </a>

                <a
                    href="/Dhods-Soledad-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
                >
                  View Résumé
                </a>
              </div>
            </div>

            {/* Profile picture */}
            <div className="flex justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-800 shadow-2xl shadow-blue-500/20 sm:h-80 sm:w-80">                <Image
                    src="/profile.png"
                    alt="Professional portrait of Dhods Soledad"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section
            id="about"
            className="flex min-h-screen items-center bg-slate-900 px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
              About Me
            </p>

            <h2 className="mb-8 text-4xl font-bold">
              Quality, innovation, and meaningful impact
            </h2>

            <div className="grid gap-8 text-lg leading-relaxed text-slate-300 md:grid-cols-2">
              <p>
                I am a Quality Assurance Lead with experience in software
                quality, Agile delivery, process improvement, and cross-functional
                collaboration. I help teams deliver reliable products while
                improving the workflows behind them.
              </p>

              <p>
                Beyond quality assurance, I am passionate about AI automation,
                graphic design, social-media management, and digital ministry. I
                believe technology can be used not only to solve business
                problems but also to serve people and advance God&apos;s mission.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section
            id="contact"
            className="flex min-h-screen items-center px-6 py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
              Contact
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Let&apos;s build something meaningful
            </h2>

            <p className="mb-8 text-lg text-slate-300">
              I&apos;m open to opportunities involving Quality Assurance, Agile,
              AI automation, project collaboration, and technology-driven
              ministry.
            </p>

            <a
                href="mailto:dhodssoledad@gmail.com"
                className="inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
            >
              Send Me an Email
            </a>
          </div>
        </section>
      </main>
  );
}