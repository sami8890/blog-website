import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

// Extended blog posts array
const ALL_POSTS: Post[] = [
  // Include all your featured posts first
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
  // Add more blog posts
  {
    id: 6,
    title: "Sustainable Web Development Practices",
    description:
      "Learn how to build eco-friendly websites and reduce your carbon footprint through efficient coding practices and green hosting solutions.",
    thumbnail: "/blog/sustainable-web.jpg",
    category: "Web Development",
    readTime: "8 min read",
    date: "Nov 15, 2024",
    author: {
      name: "Alex Rivera",
      avatar: "/author-pictures/alex.jpg",
    },
  },
  {
    id: 7,
    title: "The Future of Quantum Computing",
    description:
      "Discover how quantum computing is set to revolutionize computational power and what this means for the future of technology.",
    thumbnail: "/blog/quantum-computing.jpg",
    category: "Technology",
    readTime: "11 min read",
    date: "Nov 14, 2024",
    author: {
      name: "David Chen",
      avatar: "/author-pictures/david.jpg",
    },
  },
  // Add more posts as needed...
];

const AllBlogPosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 9;
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const categories = [
    "All",
    ...Array.from(new Set(ALL_POSTS.map((post) => post.category))),
  ];

  // Filter posts based on search and category
  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Animation setup
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

    gsap.set(cards, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      },
    });

    // Card hover animations
    cards.forEach((card) => {
      if (!card) return;

      const thumbnail = card.querySelector(".thumbnail-image");
      const content = card.querySelector(".card-content");
      const category = card.querySelector(".category-tag");
      const readMore = card.querySelector(".read-more");

      const tl = gsap.timeline({ paused: true });
      tl.to(card, {
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out",
      })
        .to(thumbnail, { scale: 1.1, duration: 0.3, ease: "power2.out" }, 0)
        .to(content, { y: -5, duration: 0.3, ease: "power2.out" }, 0)
        .to(category, { scale: 1.05, duration: 0.3, ease: "power2.out" }, 0)
        .to(readMore, { x: 5, duration: 0.3, ease: "power2.out" }, 0);

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentPosts]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0F172A]"
      aria-label="All blog posts"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-400">All Articles</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore All Posts
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Dive into our complete collection of articles covering web
            development, technology, and more.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => assignRef(el, index)}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 transform-gpu hover:border-gray-600/50 transition-colors duration-300"
            >
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBlogPosts;
