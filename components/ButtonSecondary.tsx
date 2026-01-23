"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const ButtonSecondary: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`min-w-[140px] rounded-lg border border-gray-600 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/5 active:scale-95 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonSecondary;
