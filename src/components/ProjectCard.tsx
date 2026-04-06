"use client";
import React from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

interface CardProps {
  title: string;
  description: string;
  img: string;
  codeLink: string;
  deployedLink: string;
  isDeployed: boolean;
  tags?: string[];
}

const ProjectCard = ({
  title,
  description,
  img,
  codeLink,
  deployedLink,
  isDeployed,
  tags = [],
}: CardProps) => {
  return (
    <div className="group mt-8 md:ml-6 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/5 hover:-translate-y-1">
      <div className="overflow-hidden">
        <Image
          src={img}
          alt={title}
          height={250}
          width={600}
          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-teal-500/10 text-teal-400/80 border border-teal-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-4">
          <a
            href={codeLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <FaGithub className="text-sm" />
            Code
          </a>
          {isDeployed ? (
            <a
              href={deployedLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-lg hover:bg-teal-500/20 hover:border-teal-500/30 transition-all duration-200"
            >
              Live
              <FaArrowUpRightFromSquare className="text-[0.6rem]" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-600 bg-white/[0.02] border border-white/5 rounded-lg cursor-not-allowed">
              Not Deployed
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
