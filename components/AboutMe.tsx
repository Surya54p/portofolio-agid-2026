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
                <h2 className="about-title text-3xl md:text-4xl font-normal mb-12 underline underline-offset-8 decoration-blue-500/50">About me</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Content */}
                    <div className="space-y-10">
                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">What I Do</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                Berfokus pada analisis data ekonomi, manajemen administrasi, dan pengembangan strategi keuangan syariah yang inovatif dan terstruktur.
                            </p>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Current Focus</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Analisis data keuangan & perbankan syariah
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Manajemen operasional & administrasi akad
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Eksplorasi E-Government untuk Good Governance
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Highlights</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Lulusan S-1 Ekonomi Syariah (IPK 3.78)
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Skripsi Terbaik Fakultas Syariah & Ekonomi Islam 2025
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Juara Olimpiade Ekonomi Islam Tingkat Nasional
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">How I Work</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Teliti & terstruktur dalam administrasi
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Komunikasi & kolaborasi tim yang solid
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Berorientasi pada detail dan akurasi data
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Cepat beradaptasi dengan lingkungan baru
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Services</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Analisis dokumen pembiayaan & kelayakan nasabah
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Manajemen pengarsipan & administrasi laporan
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Riset pasar & analisis konsumen bisnis
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Pendampingan UMKM (Implementasi QRIS & Akad)
                                </li>
                            </ul>
                        </div>

                        <div className="about-item">
                            <h3 className="text-lg font-normal mb-3">Availability</h3>
                            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Terbuka untuk peluang karir profesional perbankan
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Siap berkontribusi dalam proyek riset ekonomi
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-6 hidden md:block">
                        <div className="about-image relative aspect-4/3 rounded-[10px] overflow-hidden bg-gray-800 shadow-2xl transition-transform duration-500">
                            <Image
                                src="/images/profile-2.webp"
                                alt="Profile 2"
                                fill
                                className="object-cover object-[center_20%]"
                            />
                        </div>
                        <div className="about-image relative aspect-4/3 rounded-[10px] overflow-hidden bg-gray-800 shadow-2xl transition-transform duration-500">
                            <Image
                                src="/images/profile-3.webp"
                                alt="Profile 3"
                                fill
                                className="object-cover object-[center_70%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
