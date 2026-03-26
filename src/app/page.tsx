import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar />
      <div className="lg:mt-32">
        <div className="h-[80rem] lg:h-[48rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-3xl mx-auto pb-40 lg:pb-4 px-4">
            <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Hey, I&apos;m Vansh Kalra
            </h1>
            <p className="mx-auto my-6 text-center text-sm md:text-lg text-neutral-300">
              Full Stack Developer &middot; CS Graduate &middot; Open Source Contributor
            </p>
            <div className="mt-12 text-center mx-auto flex justify-center bg-gradient-to-b from-teal-500 rounded-full h-72 w-72 md:w-96 md:h-96 overflow-hidden">
              <img
                src="avatar.png"
                alt="Vansh Kalra"
                className="flex flex-col w-full h-full object-cover"
              />
            </div>
            <p className="text-neutral-400 mt-8 text-lg max-w-3xl mx-auto my-8 text-center relative z-10">
              I&apos;m a B-Tech Computer Science graduate from JMIT, Radaur who
              loves building polished, user-centric web experiences. I work
              across the full stack with Next.js, TypeScript, PostgreSQL, and
              more — turning ideas into fast, reliable products. Lately
              I&apos;ve been diving deep into AI tooling and contributing to
              Open Source.
            </p>
            <div className="flex justify-center gap-4 relative z-10">
              <Link
                href="/Projects"
                className="px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/Contact"
                className="px-6 py-3 rounded-lg border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-medium transition-colors"
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
