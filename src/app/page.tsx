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
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
  category: string;
};

// This is the list of projects that you want to display
const projects: Project[] = [
  {
    title: "A Landing Page for a Startup",
    description: "A landing page for a startup that offers a range of services and products. Built with Next.js and Tailwind CSS for a responsive and modern design.",
    technologies: ["Next.js 14", "Tailwind CSS", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/project-one",
    liveUrl: "https://project-one-demo.com",
    image: "/project/project2.png",
    featured: true,
    status: 'completed',
    date: '2024-06-01',
    category: 'Web Development'
  },
  {
    title: "An E-commerce Dashboard",
    description: "An administrative dashboard for managing products, orders, and customers. Built with React and includes real-time data updates.",
    technologies: ["Next.js 14", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/dashboard",
    liveUrl: "https://dashboard-demo.com",
    image: "/project/project1.png",
    featured: true,
    status: 'completed',
    date: '2024-10-01',
    category: 'Web Development'
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather data and forecasts using the OpenWeather API.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.com",
    image: "/project/project3.png",
    featured: true,
    status: 'completed',
    date: '2024-10-01',
    category: 'Web Development'
  },
  {
    title: "Calculator App",
    description: "A simple calculator app that performs basic arithmetic operations. Built with React and Tailwind CSS for a sleek UI.",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/calculator-app",
    liveUrl: "https://calculator-app-demo.com",
    image: "/project-four.jpg", // Make sure this image exists
    featured: true,
    status: 'completed',
    date: '2024-10-01',
    category: 'Web Development'
  }
];

const BlogSection: React.FC = () => {
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
      <FeaturedProject projects={projects} />
    </main>
  );
};

export default BlogSection;
