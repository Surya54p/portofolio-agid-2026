"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // IMPORT INI PENTING
import Image from "next/image";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image: string;
    category: string;
    organization: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image, category, organization }) => {
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

    // Jika belum dimount (SSR) atau tidak open, jangan render apa-apa
    if (!mounted || !isOpen) return null;

    // GUNAKAN createPortal UNTUK MEMINDAHKAN MODAL KE BODY
    return createPortal(
        <div className="fixed inset-0 z-99 flex items-center justify-center p-4 md:p-6">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative bg-[#161616] border border-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white border border-gray-700 cursor-pointer"
                >
                    <X size={20} />
                </button>

                {/* Left side: Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Right side: Info */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-[#161616] overflow-y-auto">
                    <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 leading-tight">{title}</h2>

                    <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full" />

                    <div className="space-y-1 mb-4">
                        <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold block">
                            {category}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-300 block">
                            {organization}
                        </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>
            </div>
        </div>,
        document.body // Target Portal: Langsung ke elemen <body>
    );
};

export default Modal;