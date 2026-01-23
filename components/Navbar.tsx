"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Rocket, Briefcase, GraduationCap, Code } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugin
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // GSAP smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: targetElement,
                    offsetY: 80 // Offset untuk navbar
                },
                ease: "power2.inOut"
            });
            setIsMenuOpen(false);
            setIsDropdownOpen(false);
        }
    };

    const dropdownItems = [
        { name: "My Journey", icon: <Rocket className="w-4 h-4" />, href: "#my-journey" },
        { name: "Work Gallery", icon: <Briefcase className="w-4 h-4" />, href: "#work-gallery" },
        { name: "Certificates", icon: <GraduationCap className="w-4 h-4" />, href: "#certificates" },
        { name: "Skills", icon: <Code className="w-4 h-4" />, href: "#skills" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                            <div className="w-5 h-5 border-2 border-white rotate-45"></div>
                        </div>
                        <span className="text-xl font-medium text-white tracking-tight italic">
                            Surya<span className="text-blue-500 font-bold not-italic">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link
                            href="#about-me"
                            onClick={(e) => handleNavClick(e, "#about-me")}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            About me
                        </Link>

                        {/* Dropdown Container */}
                        <div className="relative group">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                Work <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                onMouseLeave={() => setIsDropdownOpen(false)}
                                className={`absolute top-full left-0 mt-4 w-52 bg-[#1a1a1a] border border-white/10 rounded-xl p-2 shadow-2xl transition-all duration-300 origin-top-left ${isDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                    }`}
                            >
                                <div className="grid gap-1">
                                    {dropdownItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                                        >
                                            <span className="text-blue-500">{item.icon}</span>
                                            <span className="text-sm">{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 z-60 flex items-center justify-center p-6 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-lg transition-all duration-300 ease-out ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={toggleMenu}
                ></div>

                {/* Modal Container */}
                <div
                    className={`relative w-full max-w-sm bg-[#111111] border border-white/10 rounded-[32px] p-8 shadow-2xl transition-all duration-500 ease-out delay-75 ${isMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"}`}
                >
                    {/* Close Button Inside Modal */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="flex flex-col gap-8 text-center">
                        <Link
                            href="#about-me"
                            onClick={(e) => handleNavClick(e, "#about-me")}
                            className="text-2xl font-medium text-white pb-2 hover:text-blue-500 transition-colors"
                        >
                            About me
                        </Link>

                        <div className="space-y-6">
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Work Selection</span>
                            <div className="grid grid-cols-1 gap-4">
                                {dropdownItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="flex items-center justify-center gap-4 text-xl text-gray-400 hover:text-white transition-colors"
                                    >
                                        <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-500">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="mt-2 px-8 py-4 bg-blue-600 text-white text-center rounded-2xl font-medium active:scale-95 transition-transform shadow-lg shadow-blue-600/20"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
