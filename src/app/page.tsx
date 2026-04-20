"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FadeIn, StaggerChildren, StaggerItem, ScaleIn } from "@/components/ui/motion";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { projects, technologies } from "@/constants";
import { motion } from "framer-motion";
import RotatingText from "@/components/ui/RotatingText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar />
      <div className="relative">
        {/* ── Hero Section ── */}
        <div className="min-h-[calc(100vh-60px)] w-full rounded-md relative flex flex-col items-center justify-center antialiased px-4 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 hero-grid pointer-events-none" />
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none animate-float-slow" style={{ animationDelay: "-6s" }} />

          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left — Text */}
              <div className="flex-1 text-center lg:text-left relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm text-neutral-400">
                    Available for work
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 font-bold tracking-tight leading-[1.1]"
                >
                  Hey, I&apos;m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 animate-gradient-text">
                    Vansh
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mt-4 text-2xl md:text-3xl font-semibold text-neutral-300 tracking-tight"
                >
                  I&apos;m a{" "}
                  <RotatingText
                    words={[
                      "Full Stack Developer",
                      "AI Enthusiast",
                      "Open Source Contributor",
                      "Problem Solver",
                    ]}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-4 text-lg md:text-xl text-neutral-500 tracking-wide max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  I craft fast, polished web experiences with Next.js,
                  TypeScript &amp; AI tooling — turning ideas into products
                  people love.
                </motion.p>

                {/* Social row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
                >
                  <a
                    href="https://github.com/Vansh1379"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-teal-500/50 text-neutral-400 hover:text-teal-400 transition-all duration-300 hover:bg-teal-500/5 hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/vansh-kalra-626444228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-teal-500/50 text-neutral-400 hover:text-teal-400 transition-all duration-300 hover:bg-teal-500/5 hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:vanshkalra1379@gmail.com"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-teal-500/50 text-neutral-400 hover:text-teal-400 transition-all duration-300 hover:bg-teal-500/5 hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
                >
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
                </motion.div>
              </div>

              {/* Right — Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative z-10 flex-shrink-0"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow" />
                  <div className="absolute -inset-1 rounded-full animate-spin-slow pointer-events-none" style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(20,184,166,0.6) 60deg, transparent 140deg, rgba(34,211,238,0.4) 220deg, transparent 300deg)" }} />
                  <div className="relative bg-gradient-to-b from-teal-500/80 to-teal-600/40 rounded-full h-64 w-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden ring-2 ring-teal-500/20 ring-offset-4 ring-offset-neutral-950 shadow-2xl shadow-teal-500/10">
                    <img
                      src="avatar.png"
                      alt="Vansh Kalra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-600"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-neutral-700 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-neutral-500 rounded-full animate-bounce" />
            </div>
          </motion.div>

          <BackgroundBeams />
        </div>

        {/* ── Stats Strip ── */}
        <div className="relative z-10 border-y border-white/5 bg-neutral-950/80 backdrop-blur-sm">
          <StaggerChildren className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/5" staggerDelay={0.1}>
            {[
              { value: "5+", label: "Projects Shipped" },
              { value: "1+", label: "Years Building" },
              { value: "10+", label: "Technologies" },
              { value: "4+", label: "Client Projects" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group cursor-default px-4">
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 group-hover:from-teal-300 group-hover:to-teal-500 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500 mt-1 group-hover:text-neutral-400 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* ── About Section ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-teal-500" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-medium">
                About Me
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Building digital experiences that{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">
                matter
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              I&apos;m a B-Tech Computer Science graduate from JMIT, Radaur who
              loves building polished, user-centric web experiences. I work across
              the full stack with{" "}
              <span className="text-neutral-200 font-medium">Next.js</span>,{" "}
              <span className="text-neutral-200 font-medium">TypeScript</span>,{" "}
              <span className="text-neutral-200 font-medium">PostgreSQL</span>,
              and more — turning ideas into fast, reliable products. Lately
              I&apos;ve been diving deep into{" "}
              <span className="text-neutral-200 font-medium">AI tooling</span> and
              contributing to Open Source.
            </p>
          </FadeIn>
        </div>

        {/* ── What I Do ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-px bg-teal-500" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-medium">
                What I Do
              </span>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
                title: "Full Stack Development",
                desc: "End-to-end web apps with Next.js, TypeScript, PostgreSQL, and Prisma — from database design to pixel-perfect UI.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                title: "AI Integration",
                desc: "Building intelligent features with LangChain, OpenAI, and vector databases — from chatbots to document understanding.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                ),
                title: "DevOps & Deployment",
                desc: "Containerized deployments with Docker, monorepo management with Turborepo, and CI/CD pipelines for reliable shipping.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <div className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/5 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* ── Tech Stack ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-px bg-teal-500" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-medium">
                Tech Stack
              </span>
            </div>
          </FadeIn>

          <StaggerChildren className="flex flex-wrap gap-3 justify-center lg:justify-start" staggerDelay={0.05}>
            {technologies.map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-0.5">
                  <img
                    src={tech.icon.src}
                    alt={tech.name}
                    className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* ── Featured Projects ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <FadeIn>
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
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {projects.slice(0, 3).map((project, i) => (
              <StaggerItem key={i}>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] overflow-hidden transition-all duration-500 hover:border-teal-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={project.image.src}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg group-hover:text-teal-300 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <svg
                        className="w-4 h-4 text-neutral-600 group-hover:text-teal-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className="text-neutral-500 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-teal-500/10 text-teal-400/80 border border-teal-500/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* ── CTA Section ── */}
        <div className="relative z-10 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 dot-mesh pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow" />
          </div>
          <div className="max-w-4xl mx-auto px-6 py-24 text-center relative">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Let&apos;s build something{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">
                  great
                </span>{" "}
                together
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/Contact"
                  className="group px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
                >
                  Start a Conversation
                  <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <a
                  href="https://drive.google.com/file/d/12tyQ7A04zbw_ui3h_XZJJeF6uEBGjehk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
                >
                  Download Resume
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </div>
  );
}
