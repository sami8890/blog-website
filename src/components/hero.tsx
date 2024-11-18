"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ChevronDown, Star, Plus } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  author = {
    name: "Sami Gabol",
    role: "Design & Development",
    image: "/main-picture.webp",
  },
}) => {
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate heading elements with a staggered effect
    gsap.fromTo(
      headingRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );

    // Animate buttons with elastic effect
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        delay: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.3)",
      }
    );

    // Animate image with a smooth scale and opacity transition
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    }
 
    // Smooth counting animation for stats
    statsRefs.current.forEach((ref: HTMLDivElement | null) => {
      if (ref) { 
        const endValue = parseInt(ref.getAttribute("data-count") || "0");
        const countElement = ref.querySelector(".count") as HTMLElement;

        if (countElement) {
          gsap.to(countElement, {
            innerHTML: endValue,
            duration: 4.7,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function () {
              const target = this.targets()[0] as HTMLElement;
              const currentValue = Math.floor(
                gsap.getProperty(target, "innerHTML") as number
              );
              target.innerHTML = currentValue.toLocaleString();
            },
          });
        }
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F172A] overflow-hidden">
      <div className="relative container mx-auto px-4 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Star className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-400">Featured Blog</span>
            </div>
            <div className="space-y-4">
              <h1
                className="text-5xl lg:text-7xl font-bold text-white"
                ref={(el) => {
                  if (el) headingRefs.current[0] = el;
                }}
              >
                Creative
              </h1>
              <h1
                className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                ref={(el) => {
                  if (el) headingRefs.current[1] = el;
                }}
              >
                Development
              </h1>
              <h1
                className="text-5xl lg:text-7xl font-bold text-white"
                ref={(el) => {
                  if (el) headingRefs.current[2] = el;
                }} 
              >
                Journey
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-lg">
              Transitioning from pre-med <span className="text-purple-400 font-bold">Student 
                </span> to programming, I explore design and technology, sharing insights and tutorials on creating impactful digital experiences. Join me in blending my medical background with tech.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium inline-flex items-center group transition-all duration-300"
                ref={(el) => {
                  if (el) buttonRefs.current[0] = el;
                }}
              >
                Latest Articles
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-300"
                ref={(el) => {
                  if (el) buttonRefs.current[1] = el;
                }}
              >
                About Me
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="relative" ref={imageRef}>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={author.image}
                alt={author.name}
                width={300}
                height={300}
                quality={100}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {author.name}
                  </h3>
                  <p className="text-gray-400">{author.role}</p>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Technologies", value: "6" },
            { label: "Line of codes", value: "10000" },
            { label: "Projects", value: "18" },
            { label: "Certifications", value: "5" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
              ref={(el) => {
                if (el) statsRefs.current[index] = el;
              }}
              data-count={stat.value}
            >
              <div className="flex items-center justify-center gap-1">
                <h4 className="text-3xl font-bold text-white mb-2 count">0</h4>
                {(index === 2 || index === 3) && (
                  <Plus className="w-6 h-5 text-blue-400 mb-2" />
                )}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;