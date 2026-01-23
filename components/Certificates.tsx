"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import ButtonTertiary from "./ButtonTertiary";
import Modal from "./Modal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
    const sectionRef = useRef(null);

    const certs = Array(8).fill({
        title: "Website 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        image: "/images/certificate_1.png"
    });

    const [selectedCert, setSelectedCert] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (cert: any) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                once: true,
            }
        });

        tl.fromTo(".cert-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(".cert-card",
                { opacity: 0, y: 40, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(".cert-footer",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            );

        // Refresh ScrollTrigger to ensure correct positions after rendering
        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="certificates" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="cert-title text-3xl md:text-4xl font-normal mb-12">My Certificate</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(cert)}
                            className="cert-card bg-[#161616] rounded-[10px] overflow-hidden border border-gray-800 transition-all duration-300 shadow-lg cursor-pointer hover:border-blue-500/50"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#161616] to-transparent opacity-40"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-normal mb-2 transition-colors duration-300">{cert.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cert-footer mt-16 text-center">
                    <ButtonTertiary className="text-base">Show more</ButtonTertiary>
                </div>
            </div>

            {selectedCert && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={selectedCert.title}
                    description={selectedCert.description}
                    image={selectedCert.image}
                />
            )}
        </section>
    );
};

export default Certificates;
