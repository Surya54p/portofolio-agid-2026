"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    const education = {
        title: "Pendidikan",
        degree: "S-1 Ekonomi Syariah",
        institution: "Institut Agama Islam Negeri Curup",
        year: "Tahun Lulus : 2025",
        gpa: "IPK 3.78"
    };

    const internship = {
        title: "Pengalaman Magang",
        company: "Bank Syariah Indonesia Kcp. Sekayu",
        role: "Magang",
        period: "September 2024 - Oktober 2024",
        highlights: [
            "Menganalisis dan memproses dokumen pembiayaan mikro syariah untuk nasabah, dengan fokus pada kelengkapan dokumen dan kelayakan profil nasabah",
            "Berkolaborasi dengan tim operasional dalam monitoring pembiayaan dan administrasi akad, mendukung kelancaran proses bisnis cabang",
            "Terlibat dalam penyusunan laporan harian transaksi pembiayaan dan membantu proses rekonsiliasi data nasabah"
        ]
    };

    const organization = [
        {
            title: "Sekretaris Umum HMPS Ekonomi Syariah",
            year: "2024",
            institution: "IAIN Curup, Bengkulu",
            highlights: [
                "Mengkoordinasikan seluruh administrasi organisasi termasuk penyusunan agenda rapat, notulensi, dan surat-menyurat untuk mendukung 10+ kegiatan himpunan.",
                "Mengelola sistem dokumentasi dan database anggota yang terstruktur, meningkatkan efisiensi pengarsipan dan akses informasi bagi anggota.",
                "Bertanggung jawab dalam pengelolaan administrasi keuangan organisasi dan penyusunan laporan pertanggungjawaban untuk transparansi penggunaan dana."
            ]
        },
        {
            title: "Anggota HMPS Ekonomi Syariah",
            year: "2023",
            institution: "IAIN Curup, Bengkulu",
            highlights: [
                "Merancang dan menyelenggarakan forum diskusi serta seminar mengenai isu ekonomi syariah kontemporer untuk meningkatkan pemahaman anggota.",
                "Melakukan kajian literatur dan penelitian terkait perkembangan industri keuangan syariah untuk menghasilkan materi ilmiah.",
                "Mengkoordinasikan pelaksanaan acara keilmuan mulai dari perencanaan topik, narasumber, hingga publikasi"
            ]
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

        tl.fromTo(".exp-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".exp-card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" },
                "-=0.2"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="experience" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="exp-title text-3xl md:text-4xl font-normal mb-16 underline underline-offset-8 decoration-blue-500/50">Experience & Education</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Education & Internship */}
                    <div className="space-y-12">
                        {/* Education */}
                        <div className="exp-card bg-[#161616] p-8 rounded-[10px] border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
                            <h3 className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-4">{education.title}</h3>
                            <div className="mb-2">
                                <h4 className="text-2xl font-normal">{education.degree}</h4>
                                <p className="text-gray-300">{education.institution}</p>
                            </div>
                            <div className="flex gap-4 mt-4 text-sm text-gray-400">
                                <span>{education.year}</span>
                                <span className="text-blue-500">|</span>
                                <span>{education.gpa}</span>
                            </div>
                        </div>

                        {/* Internship */}
                        <div className="exp-card bg-[#161616] p-8 rounded-[10px] border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
                            <h3 className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-4">{internship.title}</h3>
                            <div className="mb-6">
                                <h4 className="text-2xl font-normal">{internship.company}</h4>
                                <div className="flex items-center gap-2 text-gray-400 mt-1">
                                    <span>{internship.role}</span>
                                    <span>•</span>
                                    <span>{internship.period}</span>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {internship.highlights.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                        <span className="text-blue-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Organization */}
                    <div className="space-y-12">
                        <div className="exp-card bg-[#161616] p-8 rounded-[10px] border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 h-full">
                            <h3 className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-8">Pengalaman Organisasi</h3>
                            <div className="space-y-10">
                                {organization.map((org, idx) => (
                                    <div key={idx} className="relative pl-8 border-l border-gray-800">
                                        <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500"></div>
                                        <div className="mb-4">
                                            <h4 className="text-xl font-normal">{org.title}</h4>
                                            <div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
                                                <span>{org.institution}</span>
                                                <span>•</span>
                                                <span>{org.year}</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {org.highlights.map((item, i) => (
                                                <li key={i} className="text-gray-400 text-xs leading-relaxed">
                                                    - {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
