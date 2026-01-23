"use client";

import React, { useRef } from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import ButtonTertiary from "./ButtonTertiary";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircularGallery from "./CircularGallery";

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.from(".hero-welcome", { opacity: 0, y: 30, delay: 0.2 })
            .from(".hero-title", { opacity: 0, y: 50 }, "-=0.7")
            .from(".hero-desc", { opacity: 0, y: 20 }, "-=0.8")
            .from(".hero-buttons", { opacity: 0, y: 20, scale: 0.95 }, "-=0.8")
            .from(".hero-gallery", { opacity: 0, y: 30 }, "-=0.6")
            .from(".hero-scroll", { opacity: 0, height: 0 }, "-=0.5");
    }, { scope: container });

    return (
        <section ref={container} className="relative flex min-h-screen flex-col items-center justify-center bg-[#0f0f0f] px-4 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                ></div>

                {/* Soft Radial Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0D6EFD]/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#0D6EFD]/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-3xl w-full">
                <h2 className="hero-welcome mb-2 text-xl font-light italic tracking-wide text-gray-300 md:text-2xl drop-shadow-sm">
                    Welcome to my personal
                </h2>

                <h1 className="hero-title mb-6 text-5xl font-normal tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-md italic">
                    Portofolio
                </h1>

                <p className="hero-desc mb-10 text-sm font-light tracking-widest text-gray-400 md:text-base">
                    In this website you will find some of my work
                </p>

                <div className="hero-buttons flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <ButtonPrimary>Link Hub</ButtonPrimary>
                    <ButtonSecondary>Work Galery</ButtonSecondary>
                </div>

                {/* Circular Gallery */}
                <div className="hero-gallery" style={{ height: '370px', position: 'relative' }}>
                    <CircularGallery
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollSpeed={2}
                        scrollEase={0.05}
                        items={[
                            { image: '/images/profile___1.png', text: 'Profile 1' },
                            { image: '/images/profile___2.png', text: 'Profile 2' },
                            { image: '/images/landscape_1.png', text: 'Landscape' },
                            { image: '/images/landscape_2.png', text: 'Nature' },
                            { image: '/images/project_1.png', text: 'Project' },
                            { image: '/images/certificate_1.png', text: 'Certificate' },
                        ]}
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <div className="w-px h-12 bg-linear-to-b from-white/40 to-transparent"></div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent"></div>
        </section>
    );
};

export default Hero;
