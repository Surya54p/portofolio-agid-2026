"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import ButtonTertiary from "./ButtonTertiary";
import Modal from "./Modal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkGallery = () => {
    const sectionRef = useRef(null);

    const projects = Array(8).fill({
        title: "Website 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        image: "/images/project_1.webp"
    });

    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
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

        tl.fromTo(".gallery-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".gallery-card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "power1.out" },
                "-=0.35"
            )
            .fromTo(".gallery-footer",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
                "-=0.35"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });


    return (
        <section id="work-gallery" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="gallery-title text-3xl md:text-4xl font-normal mb-12">My Work Galery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(project)}
                            className="gallery-card bg-[#161616] rounded-[10px] overflow-hidden border border-gray-800 shadow-lg cursor-pointer transition-colors duration-300 hover:border-blue-500/50"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#161616] to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-normal mb-2 transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-footer mt-16 text-center">
                    <ButtonTertiary className="text-base">Show more</ButtonTertiary>
                </div>
            </div>

            {selectedProject && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={selectedProject.title}
                    description={selectedProject.description}
                    image={selectedProject.image}
                    category={selectedProject.category}
                    organization={selectedProject.organization}
                />
            )}
        </section>
    );
};

export default WorkGallery;
