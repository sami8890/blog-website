// import React from "react";
// import { Code2, Terminal, Briefcase, GraduationCap } from "lucide-react";

// interface StatCardProps {
//   icon: React.ReactNode;
//   value: string;
//   label: string;
// }

// interface SkillProps {
//   name: string;
//   level: number;
// }

// const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
//   <div className="bg-[#0f172a]/40 backdrop-blur-sm border border-slate-800/60 p-6 rounded-xl hover:border-[#4D9BF3]/40 transition-all duration-300 group">
//     <div className="text-[#4D9BF3] mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
//       {icon}
//     </div>
//     <div className="text-3xl font-bold text-white mb-1">{value}</div>
//     <div className="text-slate-400 text-sm">{label}</div>
//   </div>
// );

// const SkillBar: React.FC<SkillProps> = ({ name, level }) => (
//   <div className="space-y-2">
//     <div className="flex justify-between items-center">
//       <span className="text-slate-300">{name}</span>
//       <span className="text-sm text-slate-400">{level}%</span>
//     </div>
//     <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
//       <div
//         className="h-full bg-gradient-to-r from-[#4D9BF3] to-[#60a5ff] rounded-full transition-all duration-300"
//         style={{ width: `${level}%` }}
//       />
//     </div>
//   </div>
// );

// const About: React.FC = () => {
//   const skills: SkillProps[] = [
//     { name: "Next.js & React", level: 90 },
//     { name: "TypeScript", level: 85 },
//     { name: "Tailwind CSS", level: 95 },
//     { name: "UI/UX Design", level: 80 },
//   ];

//   return (
//     <section className="relative min-h-[80vh] lg:min-h-screen w-full bg-[#0a1224] selection:bg-green-600 overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0a1224] via-[#0a1224] to-[#0f172a] pointer-events-none" />

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -right-1/2 w-full h-full">
//           <div className="w-[500px] h-[500px] rounded-full bg-[#4D9BF3]/5 blur-3xl" />
//         </div>
//         <div className="absolute -bottom-1/2 -left-1/2 w-full h-full">
//           <div className="w-[500px] h-[500px] rounded-full bg-[#4D9BF3]/5 blur-3xl" />
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
//           {/* Left Column */}
//           <div className="flex-1 space-y-12">
//             {/* Section Header */}
//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 About Me
//               </h2>
//               <div className="h-1.5 w-20 bg-gradient-to-r from-[#4D9BF3] to-[#60a5ff] rounded-full mb-8" />
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 Transitioning from pre-med to web development, I combine
//                 analytical thinking with creative problem-solving. My journey
//                 has equipped me with a unique perspective on creating
//                 user-centered digital experiences that make a real impact.
//               </p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               <StatCard
//                 icon={<Code2 size={24} />}
//                 value="6+"
//                 label="Technologies"
//               />
//               <StatCard
//                 icon={<Terminal size={24} />}
//                 value="10k+"
//                 label="Lines of Code"
//               />
//               <StatCard
//                 icon={<Briefcase size={24} />}
//                 value="18+"
//                 label="Projects"
//               />
//               <StatCard
//                 icon={<GraduationCap size={24} />}
//                 value="5+"
//                 label="Certifications"
//               />
//             </div>

//             {/* Skills Section */}
//             <div className="space-y-8">
//               <h3 className="text-2xl font-semibold text-white">Core Skills</h3>
//               <div className="grid gap-6">
//                 {skills.map((skill) => (
//                   <SkillBar key={skill.name} {...skill} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex-1 lg:mt-24">
//             <div className="sticky top-24 space-y-8">
//               {/* Featured Work Preview */}
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#4D9BF3] to-[#60a5ff] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
//                 <div className="relative bg-[#0f172a] border border-slate-800/60 rounded-lg overflow-hidden">
//                   <div className="bg-slate-900/50 p-3 border-b border-slate-800/60">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500/80" />
//                       <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
//                       <div className="w-3 h-3 rounded-full bg-green-500/80" />
//                     </div>
//                   </div>
//                   <div className="p-8">
//                     <div className="space-y-6">
//                       <h3 className="text-xl font-semibold text-white">
//                         Featured Work
//                       </h3>
//                       <p className="text-slate-400">
//                         I specialize in building modern web applications with a
//                         focus on performance, accessibility, and user
//                         experience. My work combines clean code with thoughtful
//                         design.
//                       </p>
//                       <div className="flex flex-wrap gap-3">
//                         {["Next.js", "TypeScript", "Tailwind CSS"].map(
//                           (tech) => (
//                             <span
//                               key={tech}
//                               className="px-3 py-1 bg-slate-800/50 rounded-full text-sm text-slate-300"
//                             >
//                               {tech}
//                             </span>
//                           )
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Call to Action */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="px-8 py-3 bg-[#4D9BF3] hover:bg-[#3d7bc2] text-white rounded-lg transition-colors">
//                   View Projects
//                 </button>
//                 <button className="px-8 py-3 border border-[#4D9BF3] text-[#4D9BF3] hover:bg-[#4D9BF3] hover:text-white rounded-lg transition-colors">
//                   Download CV
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// second 


// "use client";
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Code, Briefcase, Award, Terminal, ChevronRight, ExternalLink, Github } from 'lucide-react';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('experience');

//   const tabs = {
//     experience: {
//       title: 'Experience',
//       content: [
//         {
//           period: '2023 - Present',
//           role: 'Full Stack Developer',
//           company: 'Freelance',
//           description: 'Building responsive web applications using modern technologies.'
//         },
//         {
//           period: '2022 - 2023',
//           role: 'Pre-med Student',
//           company: 'Medical School',
//           description: 'Studied medicine before transitioning to technology.'
//         }
//       ]
//     },
//     skills: {
//       title: 'Technical Skills',
//       content: [
//         { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
//         { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
//         { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] }
//       ]
//     },
//     education: {
//       title: 'Education',
//       content: [
//         {
//           year: '2023',
//           degree: 'Web Development Bootcamp',
//           institution: 'Tech Academy'
//         },
//         {
//           year: '2022',
//           degree: 'Pre-Medical Studies',
//           institution: 'Medical University'
//         }
//       ]
//     }
//   };

//   return (
//     <section className="w-full min-h-[80vh] lg:min-h-screen bg-[#0a1224] text-white selection:bg-green-600 relative overflow-hidden">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="w-full h-full" style={{
//           backgroundImage: 'linear-gradient(#4D9BF3 1px, transparent 1px), linear-gradient(90deg, #4D9BF3 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative">
//         {/* Floating Elements */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute top-10 right-10 text-[#4D9BF3] opacity-20"
//         >
//           <Code size={120} className='animate-pulse lg:hidden ' />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//           {/* Left Column - Main Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <div>
//               <div className="inline-block mb-6">
//                 <h2 className="text-4xl lg:text-5xl font-bold mb-2">About Me</h2>
//                 <div className="h-1 w-1/3 bg-[#4D9BF3]"></div>
//               </div>
              
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 Transitioning from pre-med to programming, I bring a unique analytical perspective 
//                 to web development. My medical background has instilled in me precise attention to detail 
//                 and a deep understanding of user needs, which I now apply to creating impactful digital solutions.
//               </p>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               {[
//                 { icon: <Code />, value: "6+", label: "Technologies" },
//                 { icon: <Terminal />, value: "10k+", label: "Lines of Code" },
//                 { icon: <Briefcase />, value: "18+", label: "Projects" },
//                 { icon: <Award />, value: "5+", label: "Certifications" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="bg-[#1a2537] p-4 rounded-lg border border-gray-800 hover:border-[#4D9BF3] transition-colors"
//                 >
//                   <div className="text-[#4D9BF3] mb-2">{stat.icon}</div>
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                   <div className="text-gray-400 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Tab Navigation */}
//             <div className="space-y-6">
//               <div className="flex space-x-4 border-b border-gray-800">
//                 {Object.keys(tabs).map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`pb-2 px-4 transition-colors ${activeTab === tab
//                         ? 'text-[#4D9BF3] border-b-2 border-[#4D9BF3]'
//                         : 'text-gray-400 hover:text-gray-300'
//                       }`}
//                   >
//                     {tabs[tab as keyof typeof tabs].title}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               <div className="min-h-[200px]">
//                 {activeTab === 'experience' && (
//                   <div className="space-y-4">
//                     {tabs.experience.content.map((exp, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.1 }}
//                         className="p-4 bg-[#1a2537] rounded-lg hover:bg-[#1f2b3d] transition-colors"
//                       >
//                         <div className="text-sm text-[#4D9BF3]">{exp.period}</div>
//                         <div className="font-semibold">{exp.role}</div>
//                         <div className="text-gray-400">{exp.company}</div>
//                         <div className="text-sm text-gray-300 mt-2">{exp.description}</div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === 'skills' && (
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {tabs.skills.content.map((category, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.1 }}
//                         className="p-4 bg-[#1a2537] rounded-lg"
//                       >
//                         <div className="text-[#4D9BF3] font-semibold mb-2">{category.name}</div>
//                         <div className="space-y-2">
//                           {category.items.map((item, i) => (
//                             <div key={i} className="flex items-center space-x-2">
//                               <ChevronRight size={14} className="text-[#4D9BF3]" />
//                               <span className="text-gray-300">{item}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === 'education' && (
//                   <div className="space-y-4">
//                     {tabs.education.content.map((edu, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.1 }}
//                         className="p-4 bg-[#1a2537] rounded-lg hover:bg-[#1f2b3d] transition-colors"
//                       >
//                         <div className="text-sm text-[#4D9BF3]">{edu.year}</div>
//                         <div className="font-semibold">{edu.degree}</div>
//                         <div className="text-gray-400">{edu.institution}</div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Call to Action */}
//             <div className="flex flex-wrap gap-4">
//               <button className="px-6 py-3 bg-[#4D9BF3] hover:bg-[#3d7bc2] rounded-lg transition-colors flex items-center space-x-2">
//                 <span>View Portfolio</span>
//                 <ExternalLink size={16} />
//               </button>
//               <button className="px-6 py-3 border border-[#4D9BF3] text-[#4D9BF3] hover:bg-[#4D9BF3] hover:text-white rounded-lg transition-colors flex items-center space-x-2">
//                 <Github size={16} />
//                 <span>GitHub</span>
//               </button>
//             </div>
//           </motion.div>

//           {/* Right Column - Featured Project Preview */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="sticky top-20 space-y-6">
//               <div className="rounded-lg overflow-hidden border border-gray-800">
//                 <div className="bg-[#1a2537] p-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                 </div>
//                 <div className="p-6 bg-[#0f172a]">
//                   <div className="space-y-4">
//                     <div className="h-4 bg-gray-800 rounded w-3/4"></div>
//                     <div className="h-4 bg-gray-800 rounded w-1/2"></div>
//                     <div className="h-4 bg-gray-800 rounded w-5/6"></div>
//                     <div className="h-4 bg-gray-800 rounded w-2/3"></div>
//                   </div>
//                   <div className="mt-6 grid grid-cols-2 gap-4">
//                     <div className="h-20 bg-gray-800 rounded"></div>
//                     <div className="h-20 bg-gray-800 rounded"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-center">
//                 <div className="text-sm text-gray-400">Featured Project Preview</div>
//                 <div className="text-[#4D9BF3] flex items-center justify-center space-x-1 mt-2">
//                   <span>View Project</span>
//                   <ChevronRight size={16} />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// Gpt code --------------------------------------------------------------------------------------------------------------------

// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Code, Briefcase, Award, Terminal, ChevronRight, ExternalLink, Github } from 'lucide-react';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('experience');

//   const tabs = {
//     experience: {
//       title: 'Experience',
//       content: [
//         {
//           period: '2023 - Present',
//           role: 'Full Stack Developer',
//           company: 'Freelance',
//           description: 'Building responsive web applications using modern technologies.'
//         },
//         {
//           period: '2022 - 2023',
//           role: 'Pre-med Student',
//           company: 'Medical School',
//           description: 'Studied medicine before transitioning to technology.'
//         }
//       ]
//     },
//     skills: {
//       title: 'Technical Skills',
//       content: [
//         { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
//         { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
//         { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] }
//       ]
//     },
//     education: {
//       title: 'Education',
//       content: [
//         {
//           year: '2023',
//           degree: 'Web Development Bootcamp',
//           institution: 'Tech Academy'
//         },
//         {
//           year: '2022',
//           degree: 'Pre-Medical Studies',
//           institution: 'Medical University'
//         }
//       ]
//     }
//   };

//   return (
//     <section className="w-full min-h-[80vh] lg:min-h-screen bg-[#0a1224] text-white selection:bg-green-600 relative overflow-hidden">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="w-full h-full" style={{
//           backgroundImage: 'linear-gradient(#4D9BF3 1px, transparent 1px), linear-gradient(90deg, #4D9BF3 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute top-10 right-10 text-[#4D9BF3] opacity-20"
//         >
//           <Code size={120} className='animate-pulse lg:hidden ' />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//           {/* Left Column - Main Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <div>
//               <div className="inline-block mb-6">
//                 <h2 className="text-4xl lg:text-5xl font-bold mb-2">About Me</h2>
//                 <div className="h-1 w-1/3 bg-[#4D9BF3]"></div>
//               </div>
              
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 Transitioning from pre-med to programming, I bring a unique <span className="text-[#4D9BF3]">analytical perspective</span> 
//                 to web development. My medical background has instilled in me <span className="text-[#4D9BF3]">precise attention to detail</span> 
//                 and a deep understanding of user needs, which I now apply to creating impactful digital solutions.
//               </p>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               {[
//                 { icon: <Code />, value: "6+", label: "Technologies" },
//                 { icon: <Terminal />, value: "10k+", label: "Lines of Code" },
//                 { icon: <Briefcase />, value: "18+", label: "Projects" },
//                 { icon: <Award />, value: "5+", label: "Certifications" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="bg-[#1a2537] p-4 rounded-lg border border-gray-800 hover:border-[#4D9BF3] transition-colors shadow-lg hover:shadow-[#4D9BF3]/50"
//                 >
//                   <div className="text-[#4D9BF3] mb-2">{stat.icon}</div>
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                   <div className="text-gray-400 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Tab Navigation */}
//             <div className="space-y-6">
//               <div className="flex space-x-4 border-b border-gray-800">
//                 {Object.keys(tabs).map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`pb-2 px-4 transition-colors ${activeTab === tab
//                         ? 'text-[#4D9BF3] border-b-2 border-[#4D9BF3]'
//                         : 'text-gray-400 hover:text-gray-300'
//                       }`}
//                   >
//                     {tabs[tab as keyof typeof tabs].title}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               <div className="min-h-[200px]">
//                 {activeTab === 'experience' && (
//                   <div className="space-y-4">
//                     {tabs.experience.content.map((exp, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.1 }}
//                         className="p-4 bg-[#1a2537] rounded-lg hover:bg-[#1f2b3d] transition-colors"
//                       >
//                         <div className="text-sm text-[#4D9BF3]">{exp.period}</div>
//                         <div className="font-semibold">{exp.role}</div>
//                         <div className="text-gray-400">{exp.company}</div>
//                         <div className="text-sm text-gray-300 mt-2">{exp.description}</div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//                 {/* Additional Tab Content for 'skills' and 'education' remain unchanged */}
//               </div>
//             </div>

//             {/* Call to Action */}
//             <div className="flex flex-wrap gap-4">
//               <Link href="/portfolio">
//                 <a className="px-6 py-3 bg-[#4D9BF3] hover:bg-[#3d7bc2] rounded-lg transition-colors flex items-center space-x-2">
//                   <span>View Portfolio</span>
//                   <ExternalLink size={16} />
//                 </a>
//               </Link>
//               <Link href="https://github.com/yourusername">
//                 <a target="_blank" className="px-6 py-3 border border-[#4D9BF3] text-[#4D9BF3] hover:bg-[#4D9BF3] hover:text-white rounded-lg transition-colors flex items-center space-x-2">
//                   <Github size={16} />
//                   <span>GitHub</span>
//                 </a>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Right Column - Featured Project Preview */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="sticky top-20 space-y-6">
//               <div className="rounded-lg overflow-hidden border border-gray-800 hover:border-[#4D9BF3] transition-colors">
//                 <div className="bg-[#1a2537] p-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                 </div>
//                 <div className="p-6 bg-[#0f172a]">
//                   {/* Placeholder Project Preview */}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// claude code 

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Award, Terminal, ChevronRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = {
    experience: {
      title: 'Experience',
      content: [
        {
          period: '2023 - Present',
          role: 'Full Stack Developer',
          company: 'Freelance',
          description: 'Building responsive web applications using modern technologies.'
        },
        {
          period: '2022 - 2023',
          role: 'Pre-med Student',
          company: 'Medical School',
          description: 'Studied medicine before transitioning to technology.'
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      content: [
        { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
        { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
        { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] }
      ]
    },
    education: {
      title: 'Education',
      content: [
        {
          year: '2023',
          degree: 'Web Development Bootcamp',
          institution: 'Tech Academy'
        },
        {
          year: '2022',
          degree: 'Pre-Medical Studies',
          institution: 'Medical University'
        }
      ]
    }
  };

  return (
    <section className="w-full min-h-[80vh] lg:min-h-screen bg-[#0a1224] text-white selection:bg-green-600 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#4D9BF3 1px, transparent 1px), linear-gradient(90deg, #4D9BF3 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative">
        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 right-10 text-[#4D9BF3] opacity-20"
        >
          <Code size={120} className="animate-pulse lg:hidden" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold mb-2">About Me</h2>
                <div className="h-1 w-1/3 bg-[#4D9BF3]"></div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Transitioning from pre-med to programming, I bring a unique{' '}
                <span className="text-[#7EB3F7]">analytical perspective</span> to web development.
                My medical background has instilled in me precise attention to detail
                and a deep understanding of user needs, which I now apply to creating{' '}
                <span className="text-[#7EB3F7]">impactful digital solutions</span>.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Code />, value: "6+", label: "Technologies" },
                { icon: <Terminal />, value: "10k+", label: "Lines of Code" },
                { icon: <Briefcase />, value: "18+", label: "Projects" },
                { icon: <Award />, value: "5+", label: "Certifications" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#1a2537] p-4 rounded-lg border border-gray-800 hover:border-[#4D9BF3] 
                    transition-all duration-300 shadow-lg hover:shadow-xl 
                    group cursor-pointer"
                >
                  <div className="text-[#4D9BF3] mb-2 group-hover:text-[#7EB3F7] transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="space-y-6">
              <div className="flex space-x-4 border-b border-gray-800">
                {Object.keys(tabs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 px-4 transition-all duration-300 relative
                      ${activeTab === tab
                        ? 'text-[#4D9BF3]'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-[#1a2537]/50'
                      }`}
                    aria-label={`Show ${tabs[tab as keyof typeof tabs].title} section`}
                  >
                    {tabs[tab as keyof typeof tabs].title}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4D9BF3]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === 'experience' && (
                  <div className="space-y-4">
                    {tabs.experience.content.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 bg-[#1a2537] rounded-lg hover:bg-[#1f2b3d] 
                          transition-all duration-300 group relative"
                      >
                        <div className="text-sm text-[#4D9BF3]">{exp.period}</div>
                        <div className="font-semibold">{exp.role}</div>
                        <div className="text-gray-400">{exp.company}</div>
                        <div className="text-sm text-gray-300 mt-2">{exp.description}</div>
                        <Link
                          href="#"
                          className="text-[#4D9BF3] text-sm mt-2 hidden group-hover:inline-flex items-center gap-1"
                        >
                          Learn more
                          <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tabs.skills.content.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 bg-[#1a2537] rounded-lg group hover:bg-[#1f2b3d] transition-all duration-300"
                      >
                        <div className="text-[#4D9BF3] font-semibold mb-2">{category.name}</div>
                        <div className="space-y-2">
                          {category.items.map((item, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <ChevronRight size={14} className="text-[#4D9BF3] transform group-hover:translate-x-1 transition-transform" />
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4">
                    {tabs.education.content.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 bg-[#1a2537] rounded-lg hover:bg-[#1f2b3d] 
                          transition-all duration-300 group"
                      >
                        <div className="text-sm text-[#4D9BF3]">{edu.year}</div>
                        <div className="font-semibold">{edu.degree}</div>
                        <div className="text-gray-400">{edu.institution}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-[#4D9BF3] hover:bg-[#3d7bc2] rounded-lg 
                  transition-all duration-300 flex items-center space-x-2 group"
                aria-label="View Portfolio"
              >
                <span>View Portfolio</span>
                <ExternalLink size={16} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://github.com/yourusername"
                className="px-6 py-3 border border-[#4D9BF3] text-[#4D9BF3] hover:bg-[#4D9BF3] 
                  hover:text-white rounded-lg transition-all duration-300 flex items-center space-x-2 group"
                aria-label="Visit GitHub Profile"
              >
                <Github size={16} className="transform transition-transform group-hover:rotate-12" />
                <span>GitHub</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Featured Project Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-20 space-y-6">
              <motion.div
                className="rounded-lg overflow-hidden border border-gray-800 
                  transition-transform duration-300 hover:scale-[1.02] cursor-pointer
                  hover:shadow-lg hover:shadow-[#4D9BF3]/10"
              >
                <div className="bg-[#1a2537] p-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6 bg-[#0f172a] relative group">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-800 rounded w-2/3"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-800 rounded"></div>
                    <div className="h-20 bg-gray-800 rounded"></div>
                  </div>
                  <div className="absolute inset-0 bg-[#4D9BF3]/80 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white">E-Commerce Dashboard</h3>
                  </div>
                </div>
              </motion.div>

              <div className="text-center">
                <div className="text-sm text-gray-400">Featured Project Preview</div>
                <Link
                  href="#"
                  className="text-[#4D9BF3] flex items-center justify-center space-x-1 mt-2 
                    group hover:text-[#7EB3F7] transition-colors"
                >
                  <span>View Project</span>
                  <ChevronRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;



