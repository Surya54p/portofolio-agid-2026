import React from "react";
import Image from "next/image";

const ProfileSection = () => {
    return (
        <section className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative w-full max-w-lg aspect-16/10 rounded-[10px] overflow-hidden mb-12 shadow-2xl border border-white/10">
                    <Image
                        src="/images/profile___1.png"
                        alt="Surya Profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <h2 className="text-3xl md:text-4xl font-normal mb-8 tracking-tight">
                    Hi there!
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl">
                    <p>
                        Namaku <span className="font-semibold text-white">Surya Ario Pratama</span>, aku adalah seorang Tech Enthusiast dan mahasiswa <span className="font-semibold text-white">Teknik Informatika</span> yang hobi mengubah ide menjadi aplikasi nyata. Buatku, coding bukan cuma soal yang penting jadi, tapi tentang menciptakan pengalaman pengguna yang mulus dan menjawab kebutuhan pengguna.
                    </p>
                    <p>
                        Sehari-hari, aku sering menuangkan ide desain <span className="font-semibold text-white">UI/UX</span> di <span className="font-semibold text-white">Figma</span> sebelum menghidupkannya dengan kode. Aku biasa bereksperimen menggunakan <span className="font-semibold text-white">React</span> dan Next.js untuk tampilan antarmuka, serta memperkuat sistem di belakang layar menggunakan <span className="font-semibold text-white">Laravel</span>, atau <span className="font-semibold text-white">FastAPI</span>. Aku sangat menyukai tantangan baru, terutama yang berhubungan dengan pengembangan web dan eksplorasi dunia <span className="font-semibold text-white">AI & Machine Learning</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
