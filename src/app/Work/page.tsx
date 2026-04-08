"use client";
import ExperienceCard from "@/components/ExperienceCard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { FadeIn } from "@/components/ui/motion";
import { experiences } from "@/constants";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar />
      <PageTransition>
        <div className="min-h-[calc(100vh-60px)] w-full bg-black bg-grid-white/[0.03] relative flex flex-col items-center flex-1">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-20 w-full">
            <FadeIn>
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                  Experience
                </h1>
                <p className="text-neutral-500 mt-3 text-base md:text-lg">
                  Where I&apos;ve worked and what I&apos;ve built
                </p>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mt-6" />
              </div>
            </FadeIn>

            <ol className="relative border-s border-neutral-800">
              {experiences.map((experience, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <ExperienceCard experience={experience} />
                </FadeIn>
              ))}
            </ol>

            {/* CTA after experience */}
            <FadeIn delay={0.3}>
              <div className="mt-16 text-center">
                <div className="inline-block p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <p className="text-neutral-400 mb-4">
                    Interested in working together?
                  </p>
                  <Link
                    href="/Contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
                  >
                    Get in Touch
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Page;
