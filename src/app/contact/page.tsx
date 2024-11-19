"use client"
import React, { useEffect, useRef } from "react";
import { Mail, MessageSquare, Send, Phone } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (!elements) return;

    // Initial setup - hide elements
      gsap.set(Array.from(elements), { opacity: 0, y: 50 });
      
    // Scroll trigger animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(Array.from(elements), {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      },
    });

    // Input field hover animations
    const inputs = document.querySelectorAll("input, textarea");
    inputs?.forEach((input) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(input, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });

      input.addEventListener("mouseenter", () => tl.play());
      input.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0F172A]"
      aria-label="Contact"
    >
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <MessageSquare className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-400">Get in Touch</span>
          </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Let &apos;s Connect</h2>
          <p className="text-gray-400 max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach
            out using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <a
                href="mailto:sami.gabol13@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
               sami.gabol13@gmail.com
              </a>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <a
                href="tel:+92 3302855702"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                +92 (330) 2855702
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                  placeholder="Sami..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                  placeholder="Xyz@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
