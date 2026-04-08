"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Form from "./helper/Form";
import { FadeIn } from "./ui/motion";

const ContactComponent = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full overflow-x-hidden bg-black flex flex-col items-center justify-center rounded-md px-4 py-16">
      <FadeIn>
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Let&apos;s Connect
          </h1>
          <p className="text-neutral-500 mt-3 text-base md:text-lg max-w-md mx-auto">
            Have an idea? Let&apos;s make it happen
          </p>
        </div>
      </FadeIn>

      <div className="w-full max-w-[40rem] h-32 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Left info column */}
        <FadeIn delay={0.1} className="md:col-span-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Get in touch
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of something amazing.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:vanshkalra1379@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
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
                </div>
                <div>
                  <div className="text-sm text-neutral-400 group-hover:text-teal-400 transition-colors duration-200">
                    vanshkalra1379@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Vansh1379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white/10 transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-neutral-400 group-hover:text-white transition-colors duration-200">
                    github.com/Vansh1379
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vansh-kalra-626444228"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white/10 transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-neutral-400 group-hover:text-white transition-colors duration-200">
                    LinkedIn
                  </div>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Right form column */}
        <FadeIn delay={0.2} className="md:col-span-3">
          <Form />
        </FadeIn>
      </div>
    </div>
  );
};

export default ContactComponent;
