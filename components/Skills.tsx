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
            name: "Microsoft Office Suite",
            description: "Ahli dalam penggunaan Excel (pengolahan data & rumus), Word (laporan & surat), dan PowerPoint (presentasi profesional).",
            icon: (
                <svg className="w-12 h-12 text-[#2B579A]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 13h8M8 17h8M8 9h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "Market Research & Analysis",
            description: "Melakukan riset pasar dan analisis konsumen untuk mendukung pengambilan keputusan bisnis yang tepat.",
            icon: (
                <svg className="w-12 h-12 text-[#00A4EF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.21 15.89A10 10 0 118 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 12A10 10 0 0012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "Admin & Archive Management",
            description: "Manajemen pengarsipan dokumen dan penyusunan laporan administrasi yang terstruktur dan efisien.",
            icon: (
                <svg className="w-12 h-12 text-[#F25022]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "Canva & Creative Tools",
            description: "Desain visual kreatif menggunakan Canva, editing foto di Lightroom, dan video editing mobile dengan Capcut.",
            icon: (
                <svg className="w-12 h-12 text-[#00C4CC]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 2l7.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "Bahasa Indonesia",
            description: "Kemampuan komunikasi aktif, baik lisan maupun tulisan, dalam lingkup profesional dan formal.",
            icon: (
                <svg className="w-12 h-12 text-[#FF0000]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            name: "Bahasa Inggris",
            description: "Kemampuan berbahasa Inggris tingkat menengah (Intermediate) untuk kebutuhan profesional.",
            icon: (
                <svg className="w-12 h-12 text-[#7FBA00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <h2 className="skills-title text-3xl md:text-4xl font-normal mb-12 underline underline-offset-8 decoration-blue-500/50">What is my skill set?</h2>

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
