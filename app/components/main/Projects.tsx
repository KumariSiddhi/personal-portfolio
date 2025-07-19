// Projects.tsx

"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      githubLink: "https://github.com/smasoom/PersonalPortfolio",
      deployLink: "https://personal-portfolio-mu-gray.vercel.app/"
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
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-32 min-h-screen" id="projects">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-24 mb-8"
      >
        My Projects
      </motion.h1>

      {/* Floating Panel Container */}
      <div className="relative w-full max-w-[95rem] mx-auto px-8">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Sliding Panel */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-md border border-purple-500/30 shadow-2xl min-h-[700px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>
          
          <div 
            ref={scrollRef}
            className="flex transition-transform duration-500 ease-in-out p-16"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index % 3) * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="transform hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <ProjectCard
                    src={project.src}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    deployLink={project.deployLink}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === Math.floor(index / 3)
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
