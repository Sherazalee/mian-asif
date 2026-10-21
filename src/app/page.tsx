import Image from "next/image";

const services = [
  {
    number: "01",
    title: "SEO Strategy",
    description:
      "A clear search strategy built around your audience, business goals, and opportunities for sustainable organic growth.",
    tags: ["SEO audits", "Keyword research", "Competitor analysis"],
  },
  {
    number: "02",
    title: "Content & On-Page SEO",
    description:
      "Helpful, well-structured content that connects search intent with your expertise and gives visitors a reason to stay.",
    tags: ["Content strategy", "On-page optimization", "Internal linking"],
  },
  {
    number: "03",
    title: "Agentic AI Workflows",
    description:
      "Practical AI-assisted workflows that simplify research, organize information, and support repeatable marketing tasks.",
    tags: ["Workflow design", "Research assistance", "Task automation"],
  },
];

const approach = [
  {
    title: "Understand the opportunity",
    description:
      "Start with your business, your audience, and the problems you want to solve.",
  },
  {
    title: "Build a focused plan",
    description:
      "Turn research into clear priorities, useful content, and practical workflows.",
  },
  {
    title: "Measure and improve",
    description:
      "Review what is working, refine the approach, and keep moving toward your goals.",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#f7f8fc] text-slate-900 selection:bg-indigo-200 selection:text-indigo-950"
    >
      <a
        href="#main-content"
        className="sr-only z-50 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-800 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-8">
          <a
            href="#top"
            aria-label="Sheraz Ali home"
            className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-700 text-sm font-bold tracking-wide text-white">
              SA
            </span>
            <span className="text-lg font-bold tracking-tight">
              Sheraz Ali<span className="text-indigo-700">.</span>
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-700"
          >
            <a
              href="#about"
              className="rounded-sm transition-colors hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
            >
              About
            </a>
            <a
              href="#services"
              className="rounded-sm transition-colors hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
            >
              Services
            </a>
            <a
              href="#approach"
              className="rounded-sm transition-colors hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
            >
              Approach
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
            >
              Let&apos;s talk
              <ArrowIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="main-content"
        aria-labelledby="hero-heading"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-800">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-indigo-700"
              />
              SEO Strategy & Agentic AI
            </p>

            <h1
              id="hero-heading"
              className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Better visibility.
              <br />
              <span className="text-indigo-700">Smarter growth.</span>
            </h1>

            <p className="mt-7 text-xl font-semibold text-slate-900">
              Hi, I&apos;m Sheraz Ali.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              I bring together SEO strategy and agentic AI to help businesses
              improve their search presence, create useful content, and build
              smarter marketing workflows.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-indigo-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-700/15 transition-colors hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
              >
                Let&apos;s work together
                <ArrowIcon className="h-5 w-5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-colors hover:border-indigo-700 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
              >
                Explore my services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm font-medium text-slate-600">
              <span>Search-first thinking</span>
              <span>Human-centered content</span>
              <span>Practical AI</span>
            </div>
          </div>

          {/* Your photo: public/Sheeraz.jpg */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto lg:mr-0">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-3 rounded-[2.5rem] border border-indigo-200 bg-indigo-100 sm:-inset-4"
            />

            <figure className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-slate-100">
                <Image
                  src="/Sheeraz.jpg"
                  alt="Portrait of Sheraz Ali, SEO strategist and agentic AI enthusiast"
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 500px"
                  className="object-cover object-top"
                />
              </div>

              <figcaption className="flex flex-wrap items-center justify-between gap-3 px-3 pb-3 pt-5">
                <div>
                  <p className="text-lg font-bold text-slate-900">Sheraz Ali</p>
                  <p className="mt-1 text-sm text-slate-600">
                    SEO Strategist & AI Enthusiast
                  </p>
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-800">
                  Strategy + Systems
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-8 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
              A little about me
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Curious by nature.
              <br />
              Strategic by choice.
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p className="max-w-3xl text-xl leading-9 text-slate-700">
              I&apos;m interested in how people find information, what makes
              content valuable, and how AI can make everyday work more effective.
              My focus sits where those ideas meet.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              I approach SEO with a clear purpose: help the right people discover
              the right information. Alongside search strategy, I explore
              agentic AI workflows that support research, planning, and
              execution—with thoughtful human review.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-8"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
              How I can help
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Clear strategy. Useful execution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Connecting search, content, and AI to make your next step clearer.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-bold text-indigo-700">
                  {service.number}
                </span>

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul
                  aria-label={`${service.title} capabilities`}
                  className="mt-7 flex flex-wrap gap-2"
                >
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="scroll-mt-8 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
              My approach
            </p>
            <h2
              id="approach-heading"
              className="mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Make the complex feel manageable.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              Good work starts with the right questions. I focus on understanding
              the challenge, choosing practical priorities, and improving with
              each iteration.
            </p>
          </div>

          <ol className="space-y-8">
            {approach.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-sm font-bold text-indigo-800">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-8"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-indigo-200 bg-indigo-50 px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-800">
              Let&apos;s connect
            </p>

            <h2
              id="contact-heading"
              className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              Have a challenge in mind?
              <br />
              Let&apos;s find a clear next step.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-700">
              Whether you&apos;re exploring SEO, planning content, or looking for
              a practical AI workflow, I&apos;d love to hear what you&apos;re
              working on.
            </p>

            {/* Replace this example address with your real email. */}
            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-indigo-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-700/15 transition-colors hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
            >
              Email Sheraz
              <ArrowIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-7 text-sm text-slate-600 sm:flex-row sm:items-center lg:px-8">
          <p>© {new Date().getFullYear()} Sheraz Ali. All rights reserved.</p>
          <a
            href="#top"
            className="rounded-sm font-semibold text-slate-800 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}