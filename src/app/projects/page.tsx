"use client"

import React, { useEffect, useRef, useCallback, useState } from "react";
import { Code2, ExternalLink, Github, Star, Eye, GitFork, Search } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  stats: {
    stars: number;
    views: number;
    forks: number;
  };
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Drone website",
    description: "A modern task drone website. Built with React, Next.js, TypeScript , and Tailwind CSS.",
    technologies: ["React", "Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    image: "/project/drone.png",
    liveUrl: "https://drone-website-theta.vercel.app/",
    githubUrl: "https://github.com/sami8890/Drone-website.git",
    category: "Web Application",
    stats: {
      stars: 128,
      views: 2.5e3,
      forks: 45
    },
    featured: true
  },
  {
    id: 2,
    title: "Real-state  Website",
    description: "A comprehensive dashboard for e-commerce analytics with real-time sales tracking, inventory management, and customer insights.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    image: "/project/realstate.png",
    liveUrl: "https://rebuild-com.vercel.app/",
    githubUrl: "https://github.com/sami8890/rebuild.com.git",
    category: "Front-end",
    stats: {
      stars: 89,
      views: 1.8e3,
      forks: 32
    },
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Real-time cryptocurrency portfolio tracking application with price alerts and performance analytics using multiple exchange APIs.",
    technologies: ["React", "Redux", "WebSocket", "Cryptocurrency API", "TailwindCSS"],
    image: "project/portfolio.png",
    liveUrl: "https://sami-portfolio-fc.vercel.app/",
    githubUrl: "https://github.com/sami8890/Portfolio-website.git",
    category: "Web development",
    stats: {
      stars: 156,
      views: 3.2e3,
      forks: 67
    },
    featured: false
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  const assignRef = useCallback((element: HTMLDivElement | null, index: number) => {
    if (element) {
      projectsRef.current[index] = element;
    }
  }, []);

  const filteredProjects = PROJECTS.filter(project => {
    const matchesFilter = filter === "all" ||
      (filter === "featured" && project.featured) ||
      project.category.toLowerCase() === filter.toLowerCase();

    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const categories = ["all", "featured", ...Array.from(new Set(PROJECTS.map(p => p.category.toLowerCase())))];
  useEffect(() => {
    const projects = projectsRef.current;

    gsap.set(projects, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(projects, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      },
    });

    // Enhanced project card hover animations
    projects.forEach((project) => {
      if (!project) return;

      const content = project.querySelector(".project-content");
      const image = project.querySelector(".project-image");
      const links = project.querySelector(".project-links");
      const tech = project.querySelectorAll(".tech-tag");
      const stats = project.querySelector(".project-stats");

      const tl = gsap.timeline({ paused: true });
      tl.to(project, {
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        duration: 0.3,
        ease: "power2.out",
      })
        .to(image, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(content, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(tech, {
          scale: 1.05,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        }, 0)
        .to(links, {
          y: -5,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(stats, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        }, 0);

      project.addEventListener("mouseenter", () => tl.play());
      project.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0F172A]"
      aria-label="Projects"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Code2 className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-400">Featured Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            A collection of my recent work in web development, featuring full-stack applications
            and innovative solutions.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => assignRef(el, index)}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 transform-gpu hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-contain transition-transform duration-300"
                />
                <div className="absolute" />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="project-content p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Stats */}
                <div className="project-stats flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.stats.views}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    {project.stats.forks}
                  </div>
                </div>

                <div className="project-links flex items-center gap-4 pt-4 border-t border-gray-700/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;