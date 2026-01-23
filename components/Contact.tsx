"use client";

import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const Contact = () => {
    return (
        <section id="contact" className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl  mb-12">Interested in working together?</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side: Contact Form */}
                    <div className="space-y-6">
                        <p className="text-gray-400 text-sm">Feel free to reach out.</p>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-[#161616] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={8}
                                    className="w-full bg-[#161616] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-500 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <ButtonPrimary type="submit" className="px-10">
                                    Send Message
                                </ButtonPrimary>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Other Options */}
                    <div className="space-y-10">
                        <h3 className="text-sm font-medium text-gray-400">Other option</h3>

                        <div className="space-y-8">
                            {/* WhatsApp */}
                            <a href="#" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-full h-full text-[#25D366]" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">WhatsApp</p>
                                    <p className="text-lg ">+622-8618-5976</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:surya.work.dev@gmail.com" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-full h-full px-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="4" fill="#161616" />
                                        <path d="M4 8L12 13L20 8M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 7L12 12.5L4 7" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 17V7L12 12.5L4 7V17" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 17V7L12 12.5M20 17V7L12 12.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 12.5L4 17H20L12 12.5Z" fill="#FBBC05" stroke="#FBBC05" strokeWidth="1" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-lg ">surya.work.dev@gmail.com</p>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a href="#" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
                                        <path d="M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15ZM16.65 6.645C16.2358 6.645 15.9 6.98079 15.9 7.395C15.9 7.80921 16.2358 8.145 16.65 8.145C17.0642 8.145 17.4 7.80921 17.4 7.395C17.4 6.98079 17.0642 6.645 16.65 6.645Z" fill="white" />
                                        <defs>
                                            <linearGradient id="ig-grad" x1="2.5" y1="21.5" x2="21.5" y2="2.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F9ED32" />
                                                <stop offset="0.25" stopColor="#EE2A7B" />
                                                <stop offset="0.5" stopColor="#D22A8A" />
                                                <stop offset="0.75" stopColor="#812A8B" />
                                                <stop offset="1" stopColor="#452A8B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Instagram</p>
                                    <p className="text-lg ">@surya54p_</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
