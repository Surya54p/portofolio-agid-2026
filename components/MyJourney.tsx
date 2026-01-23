import React from "react";

const MyJourney = () => {
    const events = [
        {
            year: "2021",
            title: "Starting Point",
            description: "Mulai perjalanan di Teknik Informatika. Fokus membangun fondasi logika pemrograman, algoritma dasar, dan memahami cara berpikir sebagai problem solver."
        },
        {
            year: "2022",
            title: "Exploring & Building",
            description: "Mulai serius di pengembangan web. Membangun beberapa project menggunakan React dan Next.js, belajar version control dengan Git, dan terbiasa bekerja dengan API serta struktur frontend yang rapi."
        },
        {
            year: "2023",
            title: "Diving into Deep Tech",
            description: "Masuk ke ranah Machine Learning dan pengolahan citra. Mengerjakan penelitian skripsi tentang pengenalan sidik jari menggunakan algoritma SVM, serta membangun backend menggunakan FastAPI untuk kebutuhan sistem akademik dan riset."
        },
        {
            year: "2024",
            title: "Refining & Scaling",
            description: "Fokus pada kualitas: clean code, arsitektur yang scalable, dan UI yang usable. Menyusun portfolio, memperkuat project nyata, dan siap terjun ke dunia industri sebagai Web Developer / Machine Learning Enthusiast."
        }
    ];

    return (
        <section id="my-journey" className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-normal mb-16">My Journey</h2>

                <div className="space-y-12">
                    {events.map((event, index) => (
                        <div key={index} className="group relative pl-8 md:pl-0">
                            {/* Horizontal timeline for desktop, vertical for mobile */}
                            <div className="md:grid md:grid-cols-[150px_1fr] md:gap-12 items-start">
                                <div className="text-xl md:text-2xl font-normal text-gray-500 group-hover:text-white transition-colors duration-300">
                                    {event.year} —
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <h3 className="text-xl md:text-2xl font-normal mb-4">{event.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-4xl">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle separator */}
                            {index !== events.length - 1 && (
                                <div className="absolute left-0 top-10 bottom-0 w-px bg-gray-800 md:hidden"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyJourney;
