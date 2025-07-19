// Projects.tsx

"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      src: "/login.png",
      title: "Online Registration",
      description: "An end-to-end online registration system for NIT Silchar with OTP-based login, fee verification, dynamic forms, and admin-side verification using React, Node.js, and Supabase.",
      githubLink: "https://github.com/KumariSiddhi/Online_registrations",
      deployLink: "https://online-registration-siddhi.vercel.app/"
    },
    {
      src: "/porty.png",
      title: "Personal Portfolio",
      description: "A personal portfolio website showcasing my skills, projects, and achievements.",
      githubLink: "https://github.com/KumariSiddhi/personal-portfolio",
      deployLink: "https://personal-portfolio-74se.vercel.app/"
    },
    {
      src: "/nh.png",
      title: "Nearby Hospitals",
      description: "A web application that allows users to find nearby hospitals based on their location.",
      githubLink: "https://github.com/KumariSiddhi/Nearby-Hospitals",
      deployLink: "https://kumarisiddhi.github.io/Nearby-Hospitals/"
    },
    {
      src: "/TD.png",
      title: "TinDog",
      description: "A responsive Tinder-style website for dogs, built with HTML, CSS, and Bootstrap to showcase modern UI design and layout skills",
      githubLink: "https://github.com/KumariSiddhi/TinDog",
      deployLink: "https://kumarisiddhi.github.io/TinDog/"
    },
    {
      src: "/ed.png",
      title: "Ecommerce-Sales-Dashboard",
      description: "A responsive dashboard for Ecommerce Sales, built with HTML, CSS, and Bootstrap to showcase modern UI design and layout skills",
      githubLink: "https://github.com/KumariSiddhi/Ecommerce-Sales-Dashboard",
      deployLink: "https://kumarisiddhi.github.io/Ecommerce-Sales-Dashboard/"
    },
    {
      src: "/food.jpeg",
      title: "GoSpoon",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      githubLink: "https://github.com/KumariSiddhi/Ecommerce_Sidlume_App",
      deployLink: "https://github.com/KumariSiddhi/Ecommerce_Sidlume_App"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
          My Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my latest work featuring modern web technologies and innovative solutions
        </p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-2xl mx-auto px-4">
        {/* Card Container - Fixed width container */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Single card display with absolute positioning */}
          <div className="relative w-full h-full">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full z-0'
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="w-full h-full flex justify-center items-center px-4">
                  <ProjectCard
                    src={project.src}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    deployLink={project.deployLink}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-purple-300 transition-colors" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-purple-300 transition-colors" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full max-w-md mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-white/70 text-sm">
            {currentIndex + 1} of {projects.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
