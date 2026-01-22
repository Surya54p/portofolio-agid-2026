import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] border-t border-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left Side */}
                    <div className="space-y-6 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight">Surya Ario Pratama</h2>
                        <p className="text-gray-400 italic text-sm md:text-base leading-relaxed">
                            "despite everything, I love being alive."
                        </p>
                    </div>

                    {/* Right Side: Social Media */}
                    <div className="space-y-6 min-w-[150px]">
                        <h3 className="text-lg font-normal tracking-wide">Social media</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">WhatsApp</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-500">
                        © 2026 Surya. Built with purpose and passion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
