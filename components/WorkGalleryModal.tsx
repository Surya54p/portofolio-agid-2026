"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import DomeGallery from "./DomeGallery";

interface WorkGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WorkGalleryModal: React.FC<WorkGalleryModalProps> = ({ isOpen, onClose }) => {
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

    const images = [
        { image: '/images/work_galery/DSC05249.webp', text: 'DSC05249' },
        { image: '/images/work_galery/Instagram post - 1.webp', text: 'Desain UI UX' },
        { image: '/images/work_galery/Instagram post - 2.webp', text: 'Desain UI UX' },
        { image: '/images/work_galery/Instagram post - 3.webp', text: 'Desain UI UX' },
        { image: '/images/work_galery/Instagram post - 4.webp', text: 'Desain UI UX' },
        { image: '/images/work_galery/Instagram post - 5.webp', text: 'Desain UI UX' },
        { image: '/images/work_galery/Instagram post - 6.webp', text: 'Desain UI UX' },
        { image: '/images/work_galery/hero-2.webp', text: 'Hero 2' },
        { image: '/images/work_galery/lumina.webp', text: 'Lumina' },
        { image: '/images/work_galery/operrator-obs.webp', text: 'Operator OBS' },
        { image: '/images/work_galery/seminar-kp.webp', text: 'Seminar KP' },
        { image: '/images/work_galery/seminar-ui-ux-1.webp', text: 'Seminar UI UX 1' },
        { image: '/images/work_galery/seminar-ui-ux-2.webp', text: 'Seminar UI UX 2' },
        { image: '/images/work_galery/seminar-ui-ux-3.webp', text: 'Seminar UI UX 3' },
        { image: '/images/work_galery/terbit-buku-game-roblox.webp', text: 'Terbit Buku Game Roblox' },
    ];

    // DomeGallery expects ImageItem[] which is string | { src: string; alt?: string }
    // The images above need to be mapped to the format DomeGallery expects
    const galleryImages = images.map(img => ({ src: img.image, alt: img.text }));

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full h-full max-w-7xl bg-[#0a0a0a]/50 border border-[#1B7481]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(27,116,129,0.3)] animate-in fade-in zoom-in duration-300 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 z-10 bg-linear-to-b from-black/80 to-transparent">
                    <h2 className="text-3xl font-normal text-white tracking-tight italic">Work Gallery</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 cursor-pointer backdrop-blur-md"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content - DomeGallery */}
                <div className="flex-1 relative">
                    <DomeGallery
                        images={galleryImages}
                        fit={0.8}
                        minRadius={600}
                        maxVerticalRotationDeg={0}
                        segments={34}
                        dragDampening={2}
                        grayscale={false}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default WorkGalleryModal;
