"use client"
import FeaturedProject from "@/components/Featured-project";
import Hero from "@/components/hero";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  date: string;
  category: string;
};


import React from 'react'

export default function HomePage() {
  return (
    <div>
      <main>
        <h1>
          <Hero
            author={{
              name: "Sami Gabol",
              role: "Website Developer",
              image: "/main-picture.webp",
            }}
          />
        </h1>
        <FeaturedProject />
      </main>
    </div>
  )
}

