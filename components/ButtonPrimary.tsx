"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`min-w-[140px] rounded-lg bg-[#0D6EFD] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#0b5ed7] active:scale-95 shadow-lg border border-white/5 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
