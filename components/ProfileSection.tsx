"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProfileSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        tl.from(".profile-img", { opacity: 0, x: -50, duration: 1, ease: "power3.out" })
            .from(".profile-title", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6")
            .from(".profile-text p", { opacity: 0, y: 20, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="profile-img relative w-full max-w-lg aspect-16/16 rounded-[10px] overflow-hidden mb-12 shadow-2xl border border-white/10 ">
                    <Image
                        src="/images/profile-1.webp"
                        alt="Agid Nurhaliza Profile"
                        fill
                        className="object-cover object-[center_10%]"
                        priority
                    />
                </div>

                {/* Content */}
                <h2 className="profile-title text-3xl md:text-4xl font-normal mb-8 tracking-tight">
                    Hi there!
                </h2>

                <div className="profile-text space-y-6 text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl">
                    <p>
                        Aku Agid Nurhaliza Lulusan Ekonomi syariah yang telah menyelesaikan magang di salah satu lembaga keuangan
                        perbankan. Memiliki dasar keilmuan ekonomi yang kuat, dilengkapi pengalaman praktis dalam
                        analisis data, manajemen klien, dan operasional keuangan. Memiliki kemampuan kepemimpinan,
                        komunikasi, dan kolaborasi tim yang solid. Cepat beradaptasi dengan lingkungan baru, mudah
                        berbaur dengan berbagai karakter, dan didorong oleh rasa ingin tahu yang besar untuk terus belajar
                        dan berkembang secara profesional.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
