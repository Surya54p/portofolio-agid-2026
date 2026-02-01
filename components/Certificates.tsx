"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import ButtonTertiary from "./ButtonTertiary";
import Modal from "./Modal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// 1. Definisi Tipe Data (Interface)
interface Certificate {
    id: number;
    category: string;
    title: string;
    organization: string;
    date: string;
    description: string;
    skills: string[];
    image: string;
}

// 2. Data Sertifikat
const certsData: Certificate[] = [
    {
        id: 1,
        category: "Achievement",
        title: "Medali Emas Bidang Ekonomi",
        organization: "Olimpiade Sains Pemuda",
        date: "2023",
        description: "Meraih Medali Emas Bidang Ekonomi pada Olimpiade Sains Pemusa Tahun 2023.",
        skills: ["Ekonomi", "Problem Solving", "Analisis"],
        image: "/images/cert/medali-emas-ekonomi.webp",
    },
    {
        id: 2,
        category: "Internship",
        title: "Magang di Bank Syariah Indonesia",
        organization: "BSI Kcp. Sekayu",
        date: "",
        description: "Melaksanakan Magang di Bank Syariah Indonesia Kcp. Sekayu dengan spesifikasi pekerjaan pembuatan Akad transaksi, Pembuatan QRIS bayar UMKM, Penyusunan Outstanding Balance.",
        skills: ["Akad Transaksi", "QRIS UMKM", "Outstanding Balance", "Banking"],
        image: "/images/cert/magang-bsi.webp",
    },
    {
        id: 3,
        category: "Achievement",
        title: "Medali Emas Bidang Bahasa Inggris",
        organization: "Olimpiade Sains Pemuda",
        date: "2023",
        description: "Meraih Medali Emas Bidang Bahasa Inggris pada Olimpiade Sains Pemuda tahun 2023.",
        skills: ["English Language", "Writing", "Public Speaking"],
        image: "/images/cert/medali-emas-bahasa-inggris.webp",
    },
    {
        id: 4,
        category: "Achievement",
        title: "Medali Perak Bidang Bahasa Inggris",
        organization: "Language Olympiad Festival #2",
        date: "2023",
        description: "Meraih Medali Perak bidang Bahasa Inggris pada Langugae Olympiad Festival #2 tahun 2023.",
        skills: ["English Proficiency", "Vocabulary"],
        image: "/images/cert/medali-perak-bahasa-inggris.webp",
    },
    {
        id: 5,
        category: "Organization",
        title: "Sekretaris Umum HMPS Ekonomi Syariah",
        organization: "HMPS Ekonomi Syariah",
        date: "2023/2024",
        description: "Menjadi Sekretaris Umum dengan keahlian meliputi manajemen administrasi yang baik.",
        skills: ["Administrative Management", "Leadership", "Coordination"],
        image: "/images/cert/sekretaris-umum.webp",
    },
    {
        id: 6,
        category: "Professional",
        title: "Keynote Speaker International Seminar",
        organization: "IAIN Curup",
        date: "2023",
        description: "Menjadi pembicara dalam seminar skala internasional yang dilaksanakan di IAIN Curup 2023.",
        skills: ["Public Speaking", "Communication", "Academic"],
        image: "/images/cert/keynote-speaker.webp",
    },
    {
        id: 7,
        category: "Certification",
        title: "Sertifikasi Keahlian Komputer Bidang Microsoft Office",
        organization: "Microsoft Office",
        date: "",
        description: "Telah menyelesaikan sertifikasi keahlian Microsoft Office 2016 dan dapat mengoperasikan keseluruhan tools microsoft dengan baik.",
        skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
        image: "/images/cert/keahlian-komputer.webp",
    },
    {
        id: 8,
        category: "Academic",
        title: "Skripsi Terbaik Fakultas Syariah & Ekonomi Islam",
        organization: "IAIN Curup",
        date: "2025",
        description: "Telah menyelesaikan pendidikan S-1 Program Studi Ekonomi Syariah dan mendapatkan skripsi terbaik dengan judul skripsi 'Pengelolaan Dana Desa Berbasis E-Government Untuk Mencapat Good Governance'.",
        skills: ["Research", "E-Government", "Good Governance", "Ekonomi Syariah"],
        image: "/images/cert/Skripsi Terbaik Fakultas Syariah & Ekonomi Islam 2025.webp",
    },
];

const Certificates = () => {
    const sectionRef = useRef(null);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(8);

    const openModal = (cert: Certificate) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };
    const handleShowMore = () => {
        if (visibleCount >= certsData.length) {
            setVisibleCount(8); // Kembalikan ke 8 jika sudah tampil semua
        } else {
            setVisibleCount(certsData.length); // Tampilkan semua
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=300",
                once: true,
                // markers: true,

            }
        });

        tl.fromTo(".cert-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".cert-card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "power1.out" },
                "-=0.35"
            )
            .fromTo(".cert-footer",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
                "-=0.35"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="certificates" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="cert-title text-3xl md:text-4xl font-normal mb-12 underline underline-offset-8 decoration-blue-500/50">My Certificate</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certsData.slice(0, visibleCount).map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => openModal(cert)}
                            className="cert-card bg-[#161616] rounded-[10px] overflow-hidden border border-gray-800 transition-[border-color,background-color] duration-300 shadow-lg cursor-pointer hover:border-blue-500/50"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to from-[#161616] to-transparent opacity-40"></div>
                            </div>
                            <div className="p-5">
                                <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold mb-1 block">
                                    {cert.category}
                                </span>
                                <h3 className="text-lg font-normal mb-2 transition-colors duration-300 line-clamp-1">{cert.title}</h3>
                                <span className="text-[10px] uppercase tracking-wider text-gray-100 block">
                                    {cert.organization}
                                </span>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {certsData.length > 8 && (
                    <div className="cert-footer mt-16 text-center">
                        <ButtonTertiary
                            className="text-base"
                            onClick={handleShowMore} // Pasang handler di sini
                        >
                            {/* Text tombol dinamis */}
                            {visibleCount >= certsData.length ? "Show Less" : "Show More"}
                        </ButtonTertiary>                </div>
                )}
            </div>

            {selectedCert && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={selectedCert.title}
                    description={selectedCert.description}
                    image={selectedCert.image}
                    category={selectedCert.category}
                    organization={selectedCert.organization}
                />
            )}
        </section>
    );
};

export default Certificates;
