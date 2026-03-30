import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { projects } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar />
      <div className="relative">
        {/* ── Hero Section ── */}
        <div className="min-h-[calc(100vh-60px)] w-full rounded-md relative flex flex-col items-center justify-center antialiased px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left — Text */}
              <div className="flex-1 text-center lg:text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm text-neutral-400">
                    Available for work
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 font-bold tracking-tight leading-[1.1]">
                  Hey, I&apos;m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 animate-gradient-text">
                    Vansh
                  </span>
                </h1>

                <p className="mt-5 text-lg md:text-xl text-neutral-400 tracking-wide max-w-xl mx-auto lg:mx-0">
                  Full Stack Developer building fast, polished web experiences
                  with Next.js, TypeScript &amp; AI tooling.
                </p>

                {/* Social row */}
                <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                  <a
                    href="https://github.com/Vansh1379"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 hover:bg-white/5"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/vansh-kalra-626444228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 hover:bg-white/5"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:vanshkalra1379@gmail.com"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 hover:bg-white/5"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <Link
                    href="/Projects"
                    className="group px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5 text-center"
                  >
                    View Projects
                    <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="/Contact"
                    className="px-8 py-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 text-center"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Right — Avatar */}
              <div className="relative z-10 flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl" />
                  <div className="relative bg-gradient-to-b from-teal-500/80 to-teal-600/40 rounded-full h-64 w-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden ring-2 ring-teal-500/20 ring-offset-4 ring-offset-neutral-950 shadow-2xl shadow-teal-500/10">
                    <img
                      src="avatar.png"
                      alt="Vansh Kalra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-600">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-neutral-700 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-neutral-500 rounded-full animate-bounce" />
            </div>
          </div>

          <BackgroundBeams />
        </div>

        {/* ── Stats Strip ── */}
        <div className="relative z-10 border-y border-white/5 bg-neutral-950/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Projects Built" },
              { value: "1+", label: "Years Experience" },
              { value: "10+", label: "Technologies" },
              { value: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── About Section ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-teal-500" />
            <span className="text-sm text-teal-400 uppercase tracking-widest font-medium">
              About Me
            </span>
          </div>
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
            I&apos;m a B-Tech Computer Science graduate from JMIT, Radaur who
            loves building polished, user-centric web experiences. I work across
            the full stack with{" "}
            <span className="text-white font-medium">Next.js</span>,{" "}
            <span className="text-white font-medium">TypeScript</span>,{" "}
            <span className="text-white font-medium">PostgreSQL</span>, and more
            — turning ideas into fast, reliable products. Lately I&apos;ve been
            diving deep into{" "}
            <span className="text-white font-medium">AI tooling</span> and
            contributing to Open Source.
          </p>
        </div>

        {/* ── Featured Projects ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-teal-500" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-medium">
                Featured Work
              </span>
            </div>
            <Link
              href="/Projects"
              className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <a
                key={i}
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] overflow-hidden transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image.src}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">
                    {project.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
