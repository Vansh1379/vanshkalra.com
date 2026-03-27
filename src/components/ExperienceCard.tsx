"use client";
import React from "react";

interface Experience {
  date: string;
  title: string;
  company_name: string;
  points: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <li className="mb-0 ms-6 mt-10">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-2 border-teal-500/50 bg-teal-500/20 shadow-sm shadow-teal-500/20" />
      <div className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
        <time className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 text-xs font-medium text-teal-400 mb-3">
          {experience.date}
        </time>
        <h3 className="text-xl font-semibold text-white">
          {experience.title}
        </h3>
        <p className="text-sm text-neutral-500 mt-0.5">{experience.company_name}</p>
        <ul className="mt-4 space-y-2.5">
          {experience.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500/40 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceCard;
