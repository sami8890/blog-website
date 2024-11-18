// import FeaturedProject from "@/components/Featured-project";
// import Hero from "@/components/hero";

// export type Project = {
//   title: string;
//   description: string;
//   technologies: string[];
//   githubUrl: string;
//   liveUrl: string;
//   image: string;
//   featured: boolean;
//   status: "completed" | "in-progress" | "planned";
//   date: string;
//   category: string;
// };

// // This is the list of projects that you want to display
// const projects: Project[] = [
//   {
//     title: "A Landing Page for a Startup",
//     description:
//       "A landing page for a startup that offers a range of services and products. Built with Next.js and Tailwind CSS for a responsive and modern design.",
//     technologies: ["Next.js 14", "Tailwind CSS", "TypeScript", "Vercel"],
//     githubUrl: "https://github.com/sami8890/figma-to-nextjs-blog_website.git",
//     liveUrl: "https://figma-to-nextjs-blog-website.vercel.app/",
//     image: "/project/project2.png",
//     featured: true,
//     status: "completed",
//     date: "2024-06-01",
//     category: "Web Development",
//   },
//   {
//     title: "Small E-commerce Website",
//     description:
//       "An administrative dashboard for managing products, orders, and customers. Built with React and includes real-time data updates.",
//     technologies: ["Next.js 14", "Tailwind CSS", "TypeScript"],
//     githubUrl: "#",
//     liveUrl: "https://dashboard-demo.com",
//     image: "/project/project1.png",
//     featured: true,
//     status: "completed",
//     date: "2024-10-01",
//     category: "Web Development",
//   },
//   {
//     title: "Drone-website",
//     description: "A fully Animated website for drone seeling website.",
//     technologies: ["next.js 14 ", "gsap", "Tailwind CSS"],
//     githubUrl: "https://github.com/sami8890/Drone-website.git",
//     liveUrl: "https://drone-website-theta.vercel.app/",
//     image: "/project/drone.png",
//     featured: true,
//     status: "completed",
//     date: "2024-10-01",
//     category: "Web Development",
//   },
//   {
//     title: "Portfolio-website",
//     description: "Myportfolio website to showcase my skills .",
//     technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
//     githubUrl: "https://github.com/sami8890/MyPortfolio..git",
//     liveUrl: "https://sami-fc.vercel.app/",
//     image: "/project/project3.png",
//     featured: true,
//     status: "completed",
//     date: "2024-10-01",
//     category: "Web Development",
//   },
// ];

// const BlogSection: React.FC = () => {
//   return (
//     <main>
      
//       <h1>
//         <Hero
//           author={{
//             name: "Sami Gabol",
//             role: "Website Developer",
//             image: "/main-picture.webp",
//           }}
//         />
//       </h1>
//       <FeaturedProject />
//     </main>
//   );
// };

// export default BlogSection;

"use client"
import { useEffect, useState } from "react";
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

const projects: Project[] = [
  {
    title: "A Landing Page for a Startup",
    description:
      "A landing page for a startup that offers a range of services and products. Built with Next.js and Tailwind CSS for a responsive and modern design.",
    technologies: ["Next.js 14", "Tailwind CSS", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/sami8890/figma-to-nextjs-blog_website.git",
    liveUrl: "https://figma-to-nextjs-blog-website.vercel.app/",
    image: "/project/project2.png",
    featured: true,
    status: "completed",
    date: "2024-06-01",
    category: "Web Development",
  },
  {
    title: "Small E-commerce Website",
    description:
      "An administrative dashboard for managing products, orders, and customers. Built with React and includes real-time data updates.",
    technologies: ["Next.js 14", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "https://dashboard-demo.com",
    image: "/project/project1.png",
    featured: true,
    status: "in-progress", // Changed to in-progress for demonstration
    date: "2024-10-01",
    category: "Web Development",
  },
  {
    title: "Drone-website",
    description: "A fully Animated website for drone seeling website.",
    technologies: ["next.js 14 ", "gsap", "Tailwind CSS"],
    githubUrl: "https://github.com/sami8890/Drone-website.git",
    liveUrl: "https://drone-website-theta.vercel.app/",
    image: "/project/drone.png",
    featured: true,
    status: "completed",
    date: "2024-10-01",
    category: "Web Development",
  },
  {
    title: "Portfolio-website",
    description: "Myportfolio website to showcase my skills .",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/sami8890/MyPortfolio..git",
    liveUrl: "https://sami-fc.vercel.app/",
    image: "/project/project3.png",
    featured: true,
    status: "completed",
    date: "2024-10-01",
    category: "Web Development",
  },
];

const BlogSection: React.FC = () => {
  const [hasAlerted, setHasAlerted] = useState(false);

  useEffect(() => {
    if (!hasAlerted) {
      alert("This section is currently under development!");
      setHasAlerted(true); // Prevent alert from showing again
    }
  }, [hasAlerted]);



  return (
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
  );
};

export default BlogSection;