'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const NotFoundPage = () => {
    const numberRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Set initial states
        gsap.set([numberRef.current, textRef.current, buttonRef.current], {
            opacity: 0,
            y: 20
        });

        // Create animation timeline
        const timeline = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: 'power3.out'
            }
        });

        // Add animations
        timeline
            .to(numberRef.current, { opacity: 1, y: 0 })
            .to(textRef.current, { opacity: 1, y: 0 }, '-=0.5')
            .to(buttonRef.current, { opacity: 1, y: 0 }, '-=0.5');

    }, []);

    return (
        <main className="fixed inset-0 flex items-center justify-center bg-[#0F172A] text-white">
            {/* Gradient glow background */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, rgba(56,189,248,0.6) 0%, rgba(0,0,0,0) 70%)'
                }}
            />

            <div className="relative z-10 text-center px-4">
                <h1
                    ref={numberRef}
                    className="text-8xl md:text-[12rem] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-sky-400"
                    style={{ opacity: 0 }}
                >
                    404
                </h1>

                <div
                    ref={textRef}
                    style={{ opacity: 0 }}
                >
                    <h2 className="mt-6 text-2xl md:text-3xl font-medium text-gray-200">
                        Page not found
                    </h2>
                    <p className="mt-2 text-gray-400 text-lg max-w-md mx-auto">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                </div>

                <Link
                    href="/"
                    ref={buttonRef}
                    className="inline-flex mt-8 px-6 py-3 rounded-lg text-sm font-medium
                     bg-sky-500 hover:bg-sky-400 
                     shadow-lg shadow-sky-500/20 hover:shadow-sky-400/20
                     transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-[#0F172A]"
                    style={{ opacity: 0 }}
                >
                    Return home
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;