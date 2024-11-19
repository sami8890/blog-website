"use client"
import React, { useEffect, useRef, useState } from 'react';
import {
    BookOpen, ArrowRight, Twitter, Github, Linkedin,
    Mail, Heart, Star, Coffee
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

interface FooterLink {
    label: string;
    href: string;
    isNew?: boolean;
}

interface RecentPost {
    title: string;
    date: string;
    readTime: string;
    category: string;
}

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const recentPosts: RecentPost[] = [
        {
            title: "The Future of Web Development in 2024",
            date: "March 18, 2024",
            readTime: "5 min read",
            category: "Tech"
        },
        {
            title: "Mastering TypeScript: Advanced Patterns",
            date: "March 15, 2024",
            readTime: "8 min read",
            category: "Tutorial"
        },
        {
            title: "Building Scalable React Applications",
            date: "March 12, 2024",
            readTime: "6 min read",
            category: "React"
        }
    ];

    const quickLinks: FooterLink[] = [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#', isNew: true },
        { label: 'Resources', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Contact', href: '#' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setEmail('');
        // Show success message (you could add a toast here)
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const content = contentRef.current;
        const socialIcons = socialRef.current;

        // Initial setup
        gsap.set([content?.children || [], socialIcons], {
            opacity: 0,
            y: 50
        });

        // Main content animation
        ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.to(content?.children || [], {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                });

                // Social icons animation
                gsap.to(socialIcons, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.8,
                    ease: "power3.out",
                });
            },
        });

        // Hover animations for links
        const links = document.querySelectorAll('.animate-hover');
        links.forEach(link => {
            const arrow = link.querySelector('.arrow-icon');
            if (arrow) {
                gsap.set(arrow, { x: 0 });
                link.addEventListener('mouseenter', () => {
                    gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#0F172A] pt-20 pb-8 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50" />

            <div className="container mx-auto px-4">
                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-700/50">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                                <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
                                <span className="text-sm text-blue-400">DevBlog</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-white text-xl font-bold">Join Our Community</h2>
                                <Heart className="w-4 h-4 text-pink-500" />
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            A thriving community of developers sharing knowledge, experiences, and cutting-edge insights. Join us in shaping the future of web development.
                        </p>
                        <div className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="text-gray-400">Over 10k+ developers trust us</span>
                        </div>
                    </div>

                    {/* Recent Posts */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg flex items-center">
                            Recent Posts
                            <span className="ml-2 px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                                Updated
                            </span>
                        </h3>
                        <div className="space-y-4">
                            {recentPosts.map((post, index) => (
                                <div
                                    key={index}
                                    className="group cursor-pointer p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                                    </div>
                                    <h4 className="text-gray-400 group-hover:text-white transition-colors duration-200 text-sm">
                                        {post.title}
                                    </h4>
                                    <span className="text-gray-500 text-xs">{post.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="animate-hover text-gray-400 hover:text-white inline-flex items-center justify-between group w-full p-2 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                                    >
                                        <span className="flex items-center">
                                            <ArrowRight className="arrow-icon w-4 h-4 mr-2" />
                                            {link.label}
                                        </span>
                                        {link.isNew && (
                                            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                                                New
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg flex items-center">
                            Newsletter
                            <Coffee className="w-4 h-4 ml-2 text-yellow-500" />
                        </h3>
                        <p className="text-gray-400">
                            Get weekly updates on the latest tech trends and articles.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg 
                           focus:outline-none focus:border-blue-500/50 text-white 
                           placeholder:text-gray-500 transition-colors duration-200"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <Mail className="w-5 h-5 text-gray-500" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                         font-medium inline-flex items-center justify-center group 
                         transition-all duration-200 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <span className="inline-flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <>
                                        Subscribe <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-gray-500">
                                By subscribing, you agree to our Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6" ref={socialRef}>
                    <div className="flex items-center space-x-4">
                        {[
                            { Icon: Twitter, label: 'Twitter' },
                            { Icon: Github, label: 'GitHub' },
                            { Icon: Linkedin, label: 'LinkedIn' },
                            { Icon: Mail, label: 'Email' }
                        ].map(({ Icon, label }, index) => (
                            <Link
                                key={index}
                                href="#"
                                aria-label={label}
                                className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 
                         hover:bg-blue-500/10 hover:border-blue-500/20 
                         transition-all duration-200 group"
                            >
                                <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 
                               transition-colors duration-200" />
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                            Privacy Policy
                        </Link>
                        <span className="hidden md:inline text-gray-600">•</span>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                            Terms of Service
                        </Link>
                        <span className="hidden md:inline text-gray-600">•</span>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} DevBlog. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;