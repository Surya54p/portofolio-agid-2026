import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] border-t border-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left Side */}
                    <div className="space-y-6 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight italic">Agid Nurhaliza</h2>
                        <p className="text-gray-400 italic text-sm md:text-base leading-relaxed">
                            "Ekonomi Syariah | Financial Analysis | Administrative Professional"
                        </p>
                    </div>

                    {/* Right Side: Social Media */}
                    <div className="space-y-6 min-w-[150px]">
                        <h3 className="text-lg font-normal tracking-wide">Social media</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://wa.me/6281324662603" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">WhatsApp</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/agidnh?igsh=MTVlem5xdWtpeWxxdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</a>
                            </li>
                            <li>
                                <a href="mailto:agidnurhaliza03@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-500">
                        © 2026 Agid Nurhaliza. developed by <a href="https://bw-build-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Bikin Web</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
