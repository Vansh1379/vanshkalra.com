"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/ui/PageTransition";
import { SparklesCore } from "@/components/ui/sparkles";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";
import { projects } from "@/constants";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar />
      <PageTransition>
        <div className="relative w-full bg-black overflow-scroll rounded-md flex-1">
          <div className="w-full absolute inset-0 min-h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={80}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                  <span className="text-sm text-neutral-400">
                    {projects.length} projects
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                  Projects
                </h1>
                <p className="text-neutral-500 mt-4 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                  A selection of things I&apos;ve built — from AI-powered tools
                  to full-stack platforms
                </p>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mt-6" />
              </div>
            </FadeIn>

            <StaggerChildren
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.1}
            >
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <ProjectCard
                    deployedLink={project.deployedLink}
                    isDeployed={project.isDeployed}
                    title={project.name}
                    description={project.description}
                    img={project.image.src}
                    codeLink={project.github_link}
                    tags={project.tags}
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Projects;
