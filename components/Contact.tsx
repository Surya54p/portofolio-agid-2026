"use client";

import { useRef } from "react";
import ButtonPrimary from "./ButtonPrimary";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Mail, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=100",
                once: true,
            }
        });

        tl.fromTo(".contact-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
        )
            .fromTo(".contact-form",
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" },
                "-=0.2"
            )
            .fromTo(".contact-options",
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" },
                "-=0.3"
            );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section id="contact" ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="contact-title text-3xl md:text-4xl  mb-12">Interested in working together?</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side: Contact Form */}
                    <div className="contact-form space-y-6">
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
                    <div className="contact-options space-y-10">
                        <h3 className="text-sm font-medium text-gray-400">Other option</h3>

                        <div className="space-y-8">
                            {/* WhatsApp */}
                            <a href="#" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-16 h-16 flex items-center justify-center bg-[#161616] border border-gray-800 rounded-[18px] transition-all duration-300 group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/50">
                                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">WhatsApp</p>
                                    <p className="text-lg ">+622-8618-5976</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:surya.work.dev@gmail.com" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-16 h-16 flex items-center justify-center bg-[#161616] border border-gray-800 rounded-[18px] transition-all duration-300 group-hover:bg-blue-600/10 group-hover:border-blue-600/50">
                                    <Mail className="w-8 h-8 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-lg ">surya.work.dev@gmail.com</p>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a href="#" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-16 h-16 flex items-center justify-center bg-[#161616] border border-gray-800 rounded-[18px] transition-all duration-300 group-hover:bg-[#EE2A7B]/10 group-hover:border-[#EE2A7B]/50">
                                    <Instagram className="w-8 h-8 text-[#EE2A7B]" />
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
