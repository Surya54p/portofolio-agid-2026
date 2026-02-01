"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface LinkItem {
    label: string;
    url: string;
    downloadable?: boolean;
}

interface Section {
    title: string;
    links: LinkItem[];
}

interface LinkHubModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LinkHubModal: React.FC<LinkHubModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    const sections: Section[] = [
        {
            title: "Social Media",
            links: [
                { label: "LinkedIn", url: "https://www.linkedin.com/in/agid-nurhaliza-16a2ab24b" },
                { label: "Instagram", url: "https://www.instagram.com/agidnh?igsh=MTVlem5xdWtpeWxxdg%3D%3D&utm_source=qr" },
            ],
        },
        {
            title: "Projects & Portofolio",
            links: [
                { label: "Certificates", url: "#certificates" },
                { label: "Experience", url: "#experience" },
            ],
        },
        {
            title: "Contact",
            links: [
                { label: "Email Me", url: "mailto:agidnurhaliza03@gmail.com" },
                { label: "WhatsApp", url: "https://wa.me/6281324662603" },
                {
                    label: "Curiculum Vitae",
                    url: "/file/Resume Agid Nurhaliza.pdf",
                    downloadable: true
                }
            ],
        },
        // {
        //     title: "Resources",
        //     links: [
        //         { label: "Blog", url: "#" },
        //         { label: "Wallpapers", url: "#" },
        //         { label: "Assets", url: "#" },
        //         { label: "Bookmarks", url: "#" },
        //         { label: "Setup", url: "#" },
        //         { label: "Learning", url: "#" },
        //     ],
        // },
    ];

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-5xl bg-[#0a0a0a] border border-[#1B7481]/30 rounded-lg overflow-hidden shadow-[0_0_50px_-12px_rgba(27,116,129,0.3)] animate-in fade-in zoom-in duration-300 flex flex-col max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                    <h2 className="text-3xl font-normal text-white tracking-tight">Link Hub</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content - Scrollable grid */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="space-y-10">
                        {sections.map((section, sIndex) => (
                            <div key={sIndex} className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 border-l-2 border-[#1B7481] pl-3">
                                    {section.title}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                                    {section.links.map((link, lIndex) => (
                                        <a
                                            key={lIndex}
                                            href={link.url}
                                            {...(link.downloadable
                                                ? { download: true }
                                                : { target: "_blank", rel: "noopener noreferrer" })}
                                            className="px-4 py-3 bg-[#161616] border border-gray-800/50 rounded-lg text-sm text-gray-400 hover:text-white hover:border-[#1B7481]/50 hover:bg-[#1B7481]/5 transition-all duration-300 text-center truncate"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for custom scrollbar */}
                <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #0a0a0a;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #1B7481;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #25a0b1;
                    }
                `}</style>
            </div>
        </div>,
        document.body
    );
};

export default LinkHubModal;
