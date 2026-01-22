"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const ButtonTertiary: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`text-sm font-medium text-gray-400 underline-offset-4 transition-all duration-300 hover:text-white hover:underline active:scale-95 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonTertiary;
