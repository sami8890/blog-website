"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  FolderIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

// Expanded Project interface with more metadata
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  date: string | number;
  viewCount?: number;
  highlights?: string[];
  status?: "completed" | "in-progress" | "planned";
  category?: string;
}

interface FeaturedProjectProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

interface Theme {
  primary: string;
  secondary: string;
  text: string;
  muted: string;
  card: string;
  hover: string;
  success: string;
  warning: string;
  info: string;
}

const theme: Theme = {
  primary: "#64ffda",
  secondary: "#0a192f",
  text: "#ccd6f6",
  muted: "#8892b0",
  card: "#112240",
  hover: "#233554",
  success: "#0abb92",
  warning: "#ffb86c",
  info: "#4a9eff",
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  projects,
  onProjectClick,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Get unique categories with memoization
  const categories = useMemo(() => {
    const projectCategories = projects
      .map((p) => p.category)
      .filter(Boolean) as string[];
    const uniqueCategories = Array.from(new Set(projectCategories));
    return ["all", ...uniqueCategories];
  }, [projects]);

  // Filter projects by category
  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  const getStatusColor = (status?: Project["status"]): string => {
    switch (status) {
      case "completed":
        return theme.success;
      case "in-progress":
        return theme.warning;
      case "planned":
        return theme.info;
      default:
        return theme.muted;
    }
  };

  const handleLike = (index: number): void => {
    setLikedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Loading skeleton component
  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="h-56 bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    </div>
  );

  const capitalizeFirstLetter = (str: string): string => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  };

  return (
    <section
      className="w-full h-full py-20"
      style={{ background: theme.secondary }}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative group">
            <h2
              className="text-4xl font-bold mb-4 tracking-tight"
              style={{ color: theme.primary }}
            >
              Featured Projects
            </h2>
            <span
              className="absolute -bottom-2 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ background: theme.primary }}
            />
          </div>
          <p
            className="text-center max-w-2xl mb-4"
            style={{ color: theme.muted }}
          >
            Exploring the intersection of design and technology through
            meaningful digital experiences.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-opacity-75"
                style={{
                  background:
                    activeFilter === category
                      ? theme.primary
                      : `${theme.primary}20`,
                  color:
                    activeFilter === category ? theme.secondary : theme.primary,
                }}
                aria-label={`Filter projects by ${category}`}
              >
                {capitalizeFirstLetter(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            // Show skeletons while loading
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg p-3 md:p-4"
                style={{ background: theme.card }}
              >
                <Skeleton />
              </div>
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105"
                style={{
                  background: theme.card,
                  borderColor:
                    hoveredIndex === index ? theme.primary : "transparent",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onProjectClick?.(project)}
              >
                {/* Project Status Badge */}
                {project.status && (
                  <div
                    className="absolute top-3 md:top-4 left-3 md:left-4 z-10 px-2 md:px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                    style={{
                      background: `${getStatusColor(project.status)}20`,
                      color: getStatusColor(project.status),
                    }}
                    aria-label={`Status: ${project.status}`}
                  >
                    <ClockIcon className="w-3 h-3" />
                    {project.status.replace("-", " ")}
                  </div>
                )}

                {/* Project Image/Placeholder with Adjusted Height */}
                <div className="relative w-full h-60 sm:h-72 md:h-64 lg:h-56 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title || "Project image"}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: theme.hover }}
                      aria-label="Placeholder image"
                    >
                      <FolderIcon
                        className="w-16 h-16 sm:w-20 sm:h-20 transition-transform group-hover:scale-110"
                        style={{ color: theme.primary }}
                      />
                    </div>
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-b opacity-90"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${theme.card})`,
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="relative p-4 sm:p-6">
                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(index);
                    }}
                    className="absolute top-3 md:top-4 right-3 md:right-4 p-1 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
                    style={{ background: theme.hover }}
                    aria-label={`Like ${project.title}`}
                  >
                    <HeartIcon
                      className="w-5 h-5 md:w-6 md:h-6"
                      style={{
                        color: likedProjects.has(index)
                          ? "#ff6b6b"
                          : theme.muted,
                      }}
                    />
                  </button>

                  <h3
                    className="text-md md:text-lg font-semibold mb-1 md:mb-2 transition-all duration-300 group-hover:text-opacity-80"
                    style={{ color: theme.text }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs md:text-sm mb-2 md:mb-4"
                    style={{ color: theme.muted }}
                  >
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-opacity-20 rounded-full"
                        style={{
                          color: theme.primary,
                          background: `${theme.primary}30`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex items-center gap-1 md:gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm flex items-center gap-1 hover:underline"
                        aria-label={`View ${project.title} on GitHub`}
                        style={{ color: theme.primary }}
                      >
                        <StarIcon className="w-3 h-3 md:w-4 md:h-4" />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm flex items-center gap-1 hover:underline"
                        aria-label={`View ${project.title} live`}
                        style={{ color: theme.primary }}
                      >
                        <ArrowTopRightOnSquareIcon className="w-3 h-3 md:w-4 md:h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center" style={{ color: theme.muted }}>
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
