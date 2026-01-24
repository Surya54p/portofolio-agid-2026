"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyJourney = () => {
    const sectionRef = useRef(null);

    const events = [
        {
            year: "2022",
            title: "Starting Point",
            description: "Memulai belajar basic website dan titik di mana aku mengenal koding. Ini terjadi ketika aku ingin masuk ke teknik informatika dan dorongan atas ketidakmengertian tentang komputer."
        },
        {
            year: "2023",
            title: "Early College",
            description: "Awal kuliah di mana aku aktif dalam membuat proyek basic websites dan kuliah."
        },
        {
            year: "2024",
            title: "Diving into Tools & Frameworks",
            description: "Fokus ke pendalaman tools seperti Git dan bahasa pemrograman serta framework. Framework pertamaku adalah Laravel kemudian disusul Next.js. Di titik ini juga aku mengenal Figma dan UI/UX."
        },
        {
            year: "2025",
            title: "Proficiency & Organizations",
            description: "Mulai terbiasa dengan penggunaan tools dan menerapkannya dalam semua proyek. Belajar mengenai struktur kode, best practice, clean architecture, dan type-specific dalam ngoding. Di bidang UI/UX, sering mengikuti organisasi dan bekerja dalam event tersebut baik secara desain maupun kodingan website."
        },
        {
            year: "2026",
            title: "Logic & Algorithm Focus",
            description: "Mencoba menerapkan semua materi yang sudah dipelajari dalam tahun-tahun sebelumnya dan berfokus pada pendalaman logika dan algoritma."
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=100",
                once: true,
            }
        });

        tl.fromTo(".journey-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".journey-event",
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" },
                "-=0.3"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="my-journey" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="journey-title text-3xl md:text-4xl font-normal mb-16">My Journey</h2>

                <div className="space-y-12">
                    {events.map((event, index) => (
                        <div key={index} className="journey-event group relative pl-8 md:pl-0">
                            {/* Horizontal timeline for desktop, vertical for mobile */}
                            <div className="md:grid md:grid-cols-[150px_1fr] md:gap-12 items-start">
                                <div className="text-xl md:text-2xl font-normal text-gray-500 group-hover:text-white transition-colors duration-300">
                                    {event.year} —
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <h3 className="text-xl md:text-2xl font-normal mb-4">{event.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-4xl">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle separator */}
                            {index !== events.length - 1 && (
                                <div className="absolute left-0 top-10 bottom-0 w-px bg-gray-800 md:hidden"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyJourney;
