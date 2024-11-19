"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Post {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}
const FEATURED_POSTS: Post[] = [
  {
    id: 1,
    title: "The Rise of AI: Shaping the Future of Technology",
    description:
      "Explore how artificial intelligence is revolutionizing various industries, from healthcare to transportation, and what the future holds for AI development.",
    thumbnail: "/featured/rise-of-ai.png",
    category: "AI & Technology",
    readTime: "7 min read",
    date: "Nov 18, 2024",
    author: {
      name: "Sarah Johnson",
      avatar: "/author-pictures/sarah.jpeg",
    },
  },
  {
    id: 2,
    title: "Politics in the Digital Age: Social Media's Impact",
    description:
      "In the age of information, social media has become a powerful tool for shaping political opinions and campaigns. This blog explores the growing influence of digital platforms on modern politics.",
    thumbnail: "/featured/impact.jpg",
    category: "Politics",
    readTime: "10 min read",
    date: "Nov 17, 2024",
    author: {
      name: "Ethan Hunt",
      avatar: "/author-pictures/ethan.jpeg",
    },
  },
  {
    id: 3,
    title: "Web 3.0: The Next Internet Revolution",
    description:
      "What is Web 3.0, and how will it change the way we interact with the internet? This article dives into the future of the decentralized web and blockchain technology. (Only Pubg Players Known This Man )",
    thumbnail: "/featured/web3.jpg",
    category: "Blockchain & Web",
    readTime: "8 min read",
    date: "Nov 16, 2024",
    author: {
      name: "Vector",
      avatar: "/author-pictures/victor.jpg",
    },
  },
  {
    id: 4,
    title: "The Impact of AI on Modern Web Development",
    description:
      "Artificial Intelligence is revolutionizing web development. From automating tasks to creating personalized user experiences, this blog explores how AI tools are enhancing developer productivity and shaping the future of the web.",
    thumbnail: "/featured/web-development.webp",
    category: "Technology",
    readTime: "12 min read",
    date: "Nov 18, 2024",
    author: {
      name: "Michael Green",
      avatar: "/author-pictures/micheal.jpg",
    },
  },
  {
    id: 5,
    title: "The Role of AI in Modern Healthcare",
    description:
      "AI is making great strides in healthcare, improving diagnostics, treatments, and patient care. This article explores how AI is transforming the healthcare industry.",
    thumbnail: "/featured/health.jpg",
    category: "Healthcare & AI",
    readTime: "9 min read",
    date: "Nov 13, 2024",
    author: {
      name: "Emily Davis",
      avatar: "/author-pictures/ethily.jpg",
    },
  },
];

const FeaturedPosts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Create a memoized ref callback function
  const assignRef = useCallback(
    (element: HTMLDivElement | null, index: number) => {
      if (element) {
        cardsRef.current[index] = element;
      }
    },
    []
  );

  useEffect(() => {
    const cards = cardsRef.current;
    const viewAllButton = buttonRef.current;

    gsap.set([cards, viewAllButton], { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        // Animate cards first
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Then animate the button
        gsap.to(viewAllButton, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
        });
      },
    });

    // Enhanced hover animations for each card
    cards.forEach((card) => {
      if (!card) return;

      const thumbnail = card.querySelector(".thumbnail-image");
      const content = card.querySelector(".card-content");
      const category = card.querySelector(".category-tag");
      const readMore = card.querySelector(".read-more");

      // Create hover animation timeline
      const tl = gsap.timeline({ paused: true });
      tl.to(card, {
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          thumbnail,
          {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          content,
          {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          category,
          {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          readMore,
          {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );

      // Add hover listeners
      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0F172A]"
      aria-label="Featured blog posts"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-400">Featured Articles</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Posts</h2>
          <p className="text-gray-400 max-w-2xl">
            Discover our most popular articles on web development, design, and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => assignRef(el, index)}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 transform-gpu hover:border-gray-600/50 transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <div className="thumbnail-image w-full h-full transform-gpu">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="card-content p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="category-tag px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full transform-gpu">
                    {post.category}
                  </span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 line-clamp-2">{post.description}</p>

                {/* Author and date */}
                <div className="flex items-center gap-3 pt-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {post.author.name}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-4">
                  <button
                    className="read-more inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 transform-gpu"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="mt-12 text-center">
          <Link href="/blog" passHref>
            <button
              ref={buttonRef}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium inline-flex items-center group transition-all duration-300"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedPosts;
