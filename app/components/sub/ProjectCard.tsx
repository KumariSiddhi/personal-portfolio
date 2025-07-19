import React from "react";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
  deployLink: string;
}

const ProjectCard = ({ src, title, description, githubLink, deployLink }: Props) => {
  return (
    <div className="group relative w-full h-full max-w-lg mx-auto">
      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl shadow-black/20 transition-all duration-700 hover:shadow-purple-500/20 hover:border-purple-500/30 hover:scale-[1.02] hover:-translate-y-2">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Image Container */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group/btn"
            >
              <span>Live Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
            
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 group/btn"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-[1px] animate-pulse">
            <div className="w-full h-full rounded-3xl bg-transparent" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-pulse" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500 animate-pulse" />
    </div>
  );
};

export default ProjectCard;
