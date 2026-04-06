"use client";
import ExperienceCard from "@/components/ExperienceCard";
import NavBar from "@/components/NavBar";
import { FadeIn } from "@/components/ui/motion";
import { experiences } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <div className="min-h-[calc(100vh-60px)] w-full bg-black bg-grid-white/[0.03] relative flex flex-col items-center">
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
        </div>
      </div>
    </div>
  );
};

export default page;
