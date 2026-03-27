import React from "react";

import NavBar from "@/components/NavBar";
import { technologies } from "@/constants";
import BallCanvas from "@/components/ui/BallCanvas";
import { cn } from "@/utils/cn";
import { Boxes } from "./ui/background-boxes";
import Image from "next/image";

const TechComponent = () => {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-black flex flex-col items-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20 w-full">
        <NavBar />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full pt-8 pb-20">
        <div className="text-center mb-12">
          <h1 className={cn("text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500")}>
            Tech Stack
          </h1>
          <p className="text-neutral-500 mt-3 text-base md:text-lg">
            Technologies I work with daily
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8 max-w-5xl mx-auto px-6">
          {technologies.map((technology) => (
            <div key={technology.name} className="group flex flex-col items-center gap-2">
              <div className="w-24 h-24 hidden sm:flex items-center justify-center">
                <BallCanvas imgUrl={technology.icon.src} />
              </div>
              <div className="sm:hidden h-20 w-20 rounded-2xl bg-neutral-900/50 border border-white/5 p-3.5 flex items-center justify-center hover:border-white/10 transition-all duration-300">
                <Image src={technology.icon} alt={technology.name} quality={100} />
              </div>
              <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechComponent;
