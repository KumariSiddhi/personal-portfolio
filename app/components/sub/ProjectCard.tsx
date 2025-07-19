// ProjectCard.tsx

import Image from "next/image";
import React from "react";
import { RxGithubLogo, RxExternalLink } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink?: string;
  deployLink?: string;
}

const ProjectCard = ({ src, title, description, githubLink, deployLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] min-h-[650px] group">
      {/* Floating glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
      
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="relative z-20 p-10">
        <h1 className="text-4xl font-semibold text-white mb-6">{title}</h1>
        <p className="text-gray-300 text-xl leading-relaxed mb-10">{description}</p>
        
        <div className="flex gap-6">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <RxGithubLogo className="text-2xl" />
              <span className="font-medium text-lg">GitHub</span>
            </a>
          )}
          
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <RxExternalLink className="text-2xl" />
              <span className="font-medium text-lg">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
