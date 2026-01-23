"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=100",
                once: true,
            }
        });

        tl.fromTo(".about-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".about-item",
                { opacity: 0, x: -25 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power1.out" },
                "-=0.3"
            )
            .fromTo(".about-image",
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power1.out" },
                "-=0.8"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="about-me" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="about-title text-3xl md:text-4xl font-normal mb-12">About me</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Content */}
                    <div className="space-y-10">
                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">What I Do</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                Build scalable web applications and data-driven solutions with a focus on clean architecture and performance.
                            </p>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Current Focus</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Fullstack web (React / Next.js + FastAPI)
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Machine learning for pattern recognition
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Improving code quality & type safety
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Highlights</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Final-year Informatics student
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Thesis: Fingerprint recognition using SVM
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Built multiple academic & personal web projects
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">How I Work</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Clean & maintainable code
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Modular and reusable components
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Performance-aware development
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Clear documentation
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Services</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Web application development
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Frontend implementation
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    API integration
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    ML prototyping
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Availability</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Open for internship
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Open for freelance / project-based work
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-6 hidden md:block">
                        <div className="about-image relative aspect-4/3 rounded-[10px] overflow-hidden bg-gray-800 shadow-2xl transition-transform duration-500">
                            <Image
                                src="/images/profile___1.png"
                                alt="Landscape 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="about-image relative aspect-4/3 rounded-[10px] overflow-hidden bg-gray-800 shadow-2xl transition-transform duration-500">
                            <Image
                                src="/images/profile___2.png"
                                alt="Landscape 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
