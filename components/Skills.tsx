"use client";

import React, { useRef } from "react";
import ButtonTertiary from "./ButtonTertiary";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    const skillList = [
        {
            name: "Next.js",
            description: "Powerful React framework for building high-performance web applications with server-side rendering.",
            icon: (
                <svg className="w-12 h-12 text-white" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0C28.656 0 0 28.656 0 64C0 99.344 28.656 128 64 128C99.344 128 128 99.344 128 64C128 28.656 99.344 0 64 0ZM106.353 103.111L63.342 46.204V85.733H55.485V42.267H60.999L104.286 100.176C104.99 101.127 105.7 102.106 106.353 103.111ZM49.497 42.267V85.733H41.64V42.267H49.497Z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "React",
            description: "Leading JavaScript library for building dynamic and interactive user interfaces with components.",
            icon: (
                <svg className="w-12 h-12 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            )
        },
        {
            name: "FastAPI",
            description: "Modern, high-performance web framework for building APIs with Python 3.6+ based on standard Python type hints.",
            icon: (
                <svg className="w-12 h-12 text-[#05991A]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "JSON",
            description: "Standard data format used for asynchronous browser-server communication.",
            icon: (
                <svg className="w-12 h-12 text-[#f1e05a]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm2 4v2h2V7H7zm0 4v6h2v-6H7zm6-4v10h2V7h-2zm0 12v2h2v-2h-2z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "MySQL",
            description: "Popular open-source relational database management system for scalable data storage.",
            icon: (
                <svg className="w-12 h-12 text-[#4479A1]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9L17 12l-6 4.5z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "PostgreSQL",
            description: "Advanced open-source relational database known for its reliability, feature robustness, and performance.",
            icon: (
                <svg className="w-12 h-12 text-[#336791]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
                    <path d="M11 7h2v6.5l3.5-3.5 1.42 1.42L12.41 17l-5.33-5.33 1.42-1.42 2.5 2.5V7z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for rapid UI development and custom, responsive designs.",
            icon: (
                <svg className="w-12 h-12 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 6.002c-2.75 0-4.25 1.5-4.5 4.5 1.5-1.5 2.75-2 4.5-1.5 1.125.333 1.833 1.05 2.583 1.812C15.834 12.064 17.167 13.5 19.5 13.5c2.75 0 4.25-1.5 4.5-4.5-1.5 1.5-2.75 2-4.5 1.5-1.125-.333-1.833-1.05-2.583-1.812-1.251-1.252-2.584-2.688-4.916-2.688zm-7.5 7.5c-2.75 0-4.25 1.5-4.5 4.5 1.5-1.5 2.75-2 4.5-1.5 1.125.333 1.833 1.05 2.583 1.812C8.334 19.564 9.667 21 12 21c2.75 0 4.25-1.5 4.5-4.5-1.5 1.5-2.75 2-4.5 1.5-1.125-.333-1.833-1.05-2.583-1.812-1.251-1.252-2.584-2.688-4.916-2.688z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "Bootstrap",
            description: "Comprehensive front-end toolkit for building responsive, mobile-first websites with ease.",
            icon: (
                <svg className="w-12 h-12 text-[#7952B3]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.18 5.84C18.18 4.27 16.91 3 15.34 3H8.66C7.09 3 5.82 4.27 5.82 5.84V18.16C5.82 19.73 7.09 21 8.66 21H15.34C16.91 21 18.18 19.73 18.18 18.16V5.84ZM12 17.25C9.65 17.25 7.75 15.35 7.75 13H5.82C5.82 16.41 8.59 19.18 12 19.18C15.41 19.18 18.18 16.41 18.18 13H16.25C16.25 15.35 14.35 17.25 12 17.25ZM12 6.75C14.35 6.75 16.25 8.65 16.25 11H18.18C18.18 7.59 15.41 4.82 12 4.82C8.59 4.82 5.82 7.59 5.82 11H7.75C7.75 8.65 9.65 6.75 12 6.75Z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "Prisma",
            description: "Next-generation Node.js and TypeScript ORM for easy database access and type-safety.",
            icon: (
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20H5.5L12 6.5z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "TypeScript",
            description: "Strongly typed programming language that builds on JavaScript, providing better tooling and safety.",
            icon: (
                <svg className="w-12 h-12 text-[#3178C6]" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.503 0H126.497C127.327 0 128 0.673 128 1.503V126.497C128 127.327 127.327 128 126.497 128H1.503C0.673 128 0 127.327 0 126.497V1.503C0 0.673 0.673 0 1.503 0Z" fill="currentColor" />
                    <path d="M106.917 101.458C106.917 110.16 99.638 116.113 89.375 116.113C81.432 116.113 75.312 112.56 72.015 106.77L80.938 101.328C82.754 104.962 85.565 107.525 89.212 107.525C92.683 107.525 95.328 105.871 95.328 102.779C95.328 99.889 93.344 98.402 89.212 96.666L84.916 94.847C76.491 91.301 72.842 86.837 72.842 78.49C72.842 69.896 79.946 63.615 89.212 63.615C96.732 63.615 102.103 66.837 105.152 71.958L96.726 77.247C95.156 74.437 92.515 72.206 88.966 72.206C86.155 72.206 83.924 73.61 83.924 76.502C83.924 78.981 85.659 80.218 89.957 82.043L94.253 83.859C102.929 87.411 106.917 92.039 106.917 101.458ZM21.464 73.197H31.791V114.792H43.193V73.197H53.522V64.933H21.464V73.197Z" fill="white" />
                </svg>
            )
        },
        {
            name: "UI/UX Design",
            description: "Designing intuitive and aesthetically pleasing user interfaces with a focus on user experience.",
            icon: (
                <svg className="w-12 h-12 text-[#FF7262]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "Web Design",
            description: "Crafting visually stunning and functional website layouts that balance form and function.",
            icon: (
                <svg className="w-12 h-12 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <line x1="2" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="2" />
                    <circle cx="6" cy="17" r="1" fill="currentColor" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                    <circle cx="18" cy="17" r="1" fill="currentColor" />
                </svg>
            )
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=300",
                once: true,
            }
        });


        tl.fromTo(".skills-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".skill-card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "power1.out" },
                "-=0.35"
            )
            .fromTo(".skills-footer",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
                "-=0.35"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="skills" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="skills-title text-3xl md:text-4xl font-normal mb-12">What is my skill set?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillList.map((skill, index) => (
                        <div key={index} className="skill-card flex items-center gap-6 p-1 bg-[#161616] rounded-[10px] border border-gray-800 shadow-lg cursor-pointer transition-colors duration-300 hover:border-blue-500/50 hover:bg-[#1c1c1c] group">
                            <div className="shrink-0 w-24 h-24 bg-[#0a0a0a] rounded-[10px] flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <div className="grow py-4 pr-6">
                                <h3 className="text-lg font-normal mb-1">{skill.name}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-footer mt-16 text-center">
                    <ButtonTertiary className="text-base">Show more</ButtonTertiary>
                </div>
            </div>
        </section>
    );
};

export default Skills;
