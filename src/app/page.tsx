import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar />
      <div className="relative">
        <div className="min-h-[calc(100vh-60px)] w-full rounded-md relative flex flex-col items-center justify-center antialiased px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Subtitle chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 relative z-10">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm text-neutral-400">Available for work</span>
            </div>

            <h1 className="relative z-10 text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 font-bold tracking-tight leading-[1.1]">
              Hey, I&apos;m Vansh
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 animate-gradient-text">
                Kalra
              </span>
            </h1>

            <p className="mx-auto mt-6 mb-8 text-base md:text-xl text-neutral-400 tracking-wide relative z-10">
              Full Stack Developer &middot; CS Graduate &middot; Open Source Contributor
            </p>

            <div className="mt-8 flex justify-center relative z-10">
              <div className="bg-gradient-to-b from-teal-500/80 to-teal-600/40 rounded-full h-64 w-64 md:w-80 md:h-80 overflow-hidden ring-2 ring-teal-500/20 ring-offset-4 ring-offset-neutral-950 shadow-2xl shadow-teal-500/10">
                <img
                  src="avatar.png"
                  alt="Vansh Kalra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-neutral-400 mt-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
              I&apos;m a B-Tech Computer Science graduate from JMIT, Radaur who
              loves building polished, user-centric web experiences. I work
              across the full stack with Next.js, TypeScript, PostgreSQL, and
              more — turning ideas into fast, reliable products. Lately
              I&apos;ve been diving deep into AI tooling and contributing to
              Open Source.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 relative z-10">
              <Link
                href="/Projects"
                className="group px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
              >
                View Projects
                <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="/Contact"
                className="px-8 py-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
}
