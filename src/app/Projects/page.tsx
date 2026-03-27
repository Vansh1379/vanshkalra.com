import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import { SparklesCore } from "@/components/ui/sparkles";
import { projects } from "@/constants";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <div className="relative w-full bg-black overflow-scroll rounded-md">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-20">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
              Projects
            </h1>
            <p className="text-neutral-500 mt-3 text-base md:text-lg max-w-md mx-auto">
              A selection of things I&apos;ve built and contributed to
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                deployedLink={project.deployedLink}
                isDeployed={project.isDeployed}
                title={project.name}
                description={project.description}
                img={project.image.src}
                codeLink={project.github_link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
