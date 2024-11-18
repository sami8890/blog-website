// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const FeaturedProjects = () => {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

//     useEffect(() => {
//         // Animate the section title
//         if (sectionRef.current) {
//             gsap.fromTo(
//                 sectionRef.current.querySelector("h2"),
//                 { opacity: 0, y: 50 },
//                 { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//             );
//         }

//         // Animate the project containers
//         projectRefs.current.forEach((ref, index) => {
//             if (ref) {
//                 gsap.fromTo(
//                     ref,
//                     { opacity: 0, y: 50 },
//                     { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: "power3.out" }
//                 );
//             }
//         });
//     }, []);

//     const projects = [
//         {
//             id: 1,
//             title: "Interactive Dashboard",
//             description: "Highly engaging data visualization with smooth animations",
//             image: "/project1.jpg",
//             tags: ["React", "GSAP", "D3.js"],
//         },
//         {
//             id: 2,
//             title: "Minimalist Portfolio",
//             description: "Clean, modern design with elegant transitions",
//             image: "/project2.jpg",
//             tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
//         },
//         {
//             id: 3,
//             title: "E-commerce Website",
//             description: "Responsive, mobile-friendly shopping experience",
//             image: "/project3.jpg",
//             tags: ["React", "Redux", "Stripe"],
//         },
//         {
//             id: 4,
//             title: "AI-powered Assistant",
//             description: "Conversational UI with natural language processing",
//             image: "/project4.jpg",
//             tags: ["Node.js", "TensorFlow.js", "Socket.IO"],
//         },
//     ];

//     return (
//         <div className="bg-gray-900 py-20" ref={sectionRef}>
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12">Featured Projects</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={project.id}
//                             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
//                             ref={(el) => {
//                                 if (el) projectRefs.current[index] = el;
//                             }}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1, delay: index * 0.2 }}
//                         >
//                             <div className="relative h-64">
//                                 <Image
//                                     src={project.image}
//                                     alt={project.title}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="w-full h-full"
//                                 />
//                             </div>
//                             <div className="p-6">
//                                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                                 <p className="text-gray-400 mb-4">{project.description}</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.tags.map((tag, i) => (
//                                         <span
//                                             key={i}
//                                             className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeaturedProjects;