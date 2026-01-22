"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />

            {/* Modal Content */}
            <div
                className="relative bg-[#161616] border border-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-gray-700"
                >
                    <X size={20} />
                </button>

                {/* Left side: Image */}
                <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right side: Info */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-[#161616]">
                    <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">{title}</h2>
                    <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full" />
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
                            View Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
