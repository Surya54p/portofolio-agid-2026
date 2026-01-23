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
        category: "Professional Training",
        title: "Associate Data Scientist",
        organization: "Digital Talent Scholarship (Kominfo) - BPPTIK",
        date: "29 Agustus - 5 September 2024",
        description: "Menyelesaikan pelatihan 67 JP yang mencakup konsep dasar Data Science, pengumpulan dan penelaahan data, pembersihan data (cleaning), serta pembangunan dan evaluasi model data.",
        skills: ["Data Cleansing", "Data Modeling", "Data Validation", "Data Science Tools"],
        image: "/images/cert/data_science/Sertifikat_SURYA ARIO PRATAMA_Associate Data Scientist_page-0001.jpg", // Pastikan file ada di public/images
    },
    {
        id: 2,
        category: "Professional Training",
        title: "Junior Web Developer",
        organization: "Digital Talent Scholarship (Kominfo) - BPPTIK",
        date: "21 Juni - 3 Juli 2024",
        description: "Pelatihan intensif 67 JP yang berfokus pada implementasi User Interface, pemrograman terstruktur, penggunaan library/komponen pre-existing, serta penulisan kode sesuai best practices.",
        skills: ["Web Development", "User Interface", "Structured Programming", "Code Best Practices"],
        image: "/images/cert/jwd_21_juni/Sertifikat_SURYA ARIO PRATAMA_Junior Web Developer_page-0001.jpg",
    },
    {
        id: 3,
        category: "Professional Training",
        title: "Database Design Course",
        organization: "Oracle Academy",
        date: "27 April 2024",
        description: "Menyelesaikan kursus perancangan basis data (Database Design) dengan hasil memuaskan, mempelajari struktur dan pemodelan data yang efektif.",
        skills: ["Database Design", "Data Modeling", "Oracle"],
        image: "/images/cert/database_design.jpg",
    },
    {
        id: 13,
        category: "Professional Training",
        title: "Java Fundamentals",
        organization: "Oracle Academy",
        date: "11 Mei 2023",
        description: "Menyelesaikan ujian akhir kursus Java Fundamentals dengan hasil memuaskan, mencakup penguasaan logika dasar dan pemrograman berorientasi objek menggunakan Java.",
        skills: ["Java", "Object-Oriented Programming", "Logic", "Algorithms"],
        image: "/images/cert/java_fundamental.jpg",
    },
    {
        id: 4,
        category: "Experience",
        title: "Intern - Penyusun Dokumentasi Akreditasi",
        organization: "Program Studi Teknik Informatika - UIGM",
        date: "25 Agustus - 25 September 2024",
        description: "Bertanggung jawab menyusun dokumentasi akreditasi Prodi TI, memastikan kelengkapan data administratif dan akademik selama periode magang.",
        skills: ["Documentation", "Academic Administration", "Team Coordination"],
        image: "/images/cert/setif-magang/setif magang_page-0001.jpg",
    },
    {
        id: 5,
        category: "Organization",
        title: "Ketua Pelaksana - Workshop UI/UX Design",
        organization: "HMIF Universitas Indo Global Mandiri",
        date: "26 Februari 2025",
        description: "Memimpin penyelenggaraan workshop 'UI yang Interaktif dan UX yang User Friendly' yang diselenggarakan oleh Divisi Teknova HMIF.",
        skills: ["Leadership", "Event Management", "UI/UX Awareness"],
        image: "/images/cert/ketua_pelaksana.jpg", // Sesuai nama file yang diupload
    },
    {
        id: 6,
        category: "Organization",
        title: "Anggota Divisi IT - Lumina Tech Expo 2025",
        organization: "Aliansi Organisasi Mahasiswa UIGM",
        date: "24 - 26 Juli 2025",
        description: "Bertugas sebagai tim teknis IT untuk mendukung kelancaran acara    Tech Expo 2025.",
        skills: ["IT Support", "Teamwork", "Technical Troubleshooting"],
        image: "/images/cert/it_lumina.jpg", // Sesuai nama file yang diupload
    },
    {
        id: 7,
        category: "Workshop & Seminar",
        title: "Masterclass: Optimizing UX Research Methods",
        organization: "Fasilkom UIGM",
        date: "26 Oktober 2024",
        description: "Peserta webinar masterclass mengenai metode riset UX untuk desain sistem interaktif.",
        skills: ["UX Research", "Interactive System Design"],
        image: "/images/cert/webinar_ux/Surya Ario Pratama Certificate of Attendance_page-0001.jpg",
    },
    {
        id: 8,
        category: "Workshop & Seminar",
        title: "Game Development Workshop",
        organization: "Game Developer Palembang & UIGM",
        date: "17 - 18 Januari 2024",
        description: "Mengikuti workshop pengembangan game menggunakan Unity Game Engine dalam rangka Global Game Jam Palembang 2024.",
        skills: ["Unity Game Engine", "Game Development"],
        image: "/images/cert/workshop_gdp/Surya Aiyo Pratama_202402070927_24103_page-0001.jpg",
    },
    {
        id: 9,
        category: "Workshop & Seminar",
        title: "Intl. Webinar: Digital Dignity in Nusantara Context",
        organization: "UIN Syarif Hidayatullah Jakarta & Partners",
        date: "31 Oktober 2025",
        description: "Peserta webinar internasional mengenai keterlibatan lansia dan kesenjangan digital.",
        skills: ["Digital Literacy Awareness"],
        image: "/images/cert/webinar_internatioanl_UIN_jakarta/surya.jpg",
    },
    {
        id: 10,
        category: "Workshop & Seminar",
        title: "Seminar Reboan: Penerapan AI di Pendidikan Tinggi",
        organization: "Klub System Apps UIGM",
        date: "9 Juli 2025",
        description: "Peserta seminar mengenai peluang dan penerapan Artificial Intelligence di lingkungan perguruan tinggi.",
        skills: ["Artificial Intelligence Awareness", "EdTech"],
        image: "/images/cert/seminar_reboan.png", // Sesuai nama file yang diupload
    },
    {
        id: 11,
        category: "Professional Training",
        title: "Belajar Dasar Visualisasi Data",
        organization: "Dicoding Indonesia",
        date: "26 September 2024",
        description: "Menyelesaikan kelas dasar visualisasi data (16 jam) mencakup pengolahan data dengan Google Sheets, transformasi data visual, serta penerapan prinsip desain dan storytelling data.",
        skills: ["Data Visualization", "Google Sheets", "Data Storytelling", "Design Principles"],
        image: "/images/cert/sertifikat_course_177_2557740_260924185435_visualisasi_data/sertifikat_course_177_2557740_260924185435_visualisasi_data-page-00001.jpg",
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
                <h2 className="cert-title text-3xl md:text-4xl font-normal mb-12">My Certificate</h2>

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
