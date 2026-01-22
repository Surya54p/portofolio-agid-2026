"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonTertiary from "./ButtonTertiary";
import Modal from "./Modal";

const WorkGallery = () => {
    const projects = Array(8).fill({
        title: "Website 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        image: "/images/project_1.png"
    });

    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-normal mb-12">My Work Galery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(project)}
                            className="bg-[#161616] rounded-[10px] overflow-hidden border border-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
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

                <div className="mt-16 text-center">
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
                />
            )}
        </section>
    );
};

export default WorkGallery;
