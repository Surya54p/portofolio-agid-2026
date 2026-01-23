import React from "react";
import ButtonTertiary from "./ButtonTertiary";

const Skills = () => {
    const skillList = [
        {
            name: "React JS",
            description: "I use it in my frontend project",
            icon: (
                <svg className="w-12 h-12 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            )
        },
        {
            name: "Next.js",
            description: "I use it in my frontend project",
            icon: (
                <svg className="w-12 h-12 text-white" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0C28.656 0 0 28.656 0 64C0 99.344 28.656 128 64 128C99.344 128 128 99.344 128 64C128 28.656 99.344 0 64 0ZM106.353 103.111L63.342 46.204V85.733H55.485V42.267H60.999L104.286 100.176C104.99 101.127 105.7 102.106 106.353 103.111ZM49.497 42.267V85.733H41.64V42.267H49.497Z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "Tailwind CSS",
            description: "I use it for styling my projects",
            icon: (
                <svg className="w-12 h-12 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 6.002c-2.75 0-4.25 1.5-4.5 4.5 1.5-1.5 2.75-2 4.5-1.5 1.125.333 1.833 1.05 2.583 1.812C15.834 12.064 17.167 13.5 19.5 13.5c2.75 0 4.25-1.5 4.5-4.5-1.5 1.5-2.75 2-4.5 1.5-1.125-.333-1.833-1.05-2.583-1.812-1.251-1.252-2.584-2.688-4.916-2.688zm-7.5 7.5c-2.75 0-4.25 1.5-4.5 4.5 1.5-1.5 2.75-2 4.5-1.5 1.125.333 1.833 1.05 2.583 1.812C8.334 19.564 9.667 21 12 21c2.75 0 4.25-1.5 4.5-4.5-1.5 1.5-2.75 2-4.5 1.5-1.125-.333-1.833-1.05-2.583-1.812-1.251-1.252-2.584-2.688-4.916-2.688z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "TypeScript",
            description: "I use it for type-safe code",
            icon: (
                <svg className="w-12 h-12 text-[#3178C6]" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.503 0H126.497C127.327 0 128 0.673 128 1.503V126.497C128 127.327 127.327 128 126.497 128H1.503C0.673 128 0 127.327 0 126.497V1.503C0 0.673 0.673 0 1.503 0Z" fill="currentColor" />
                    <path d="M106.917 101.458C106.917 110.16 99.638 116.113 89.375 116.113C81.432 116.113 75.312 112.56 72.015 106.77L80.938 101.328C82.754 104.962 85.565 107.525 89.212 107.525C92.683 107.525 95.328 105.871 95.328 102.779C95.328 99.889 93.344 98.402 89.212 96.666L84.916 94.847C76.491 91.301 72.842 86.837 72.842 78.49C72.842 69.896 79.946 63.615 89.212 63.615C96.732 63.615 102.103 66.837 105.152 71.958L96.726 77.247C95.156 74.437 92.515 72.206 88.966 72.206C86.155 72.206 83.924 73.61 83.924 76.502C83.924 78.981 85.659 80.218 89.957 82.043L94.253 83.859C102.929 87.411 106.917 92.039 106.917 101.458ZM21.464 73.197H31.791V114.792H43.193V73.197H53.522V64.933H21.464V73.197Z" fill="white" />
                </svg>
            )
        },
        {
            name: "Prisma",
            description: "I use it for database management",
            icon: (
                <svg className="w-12 h-12 text-[#2D3748]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20H5.5L12 6.5z" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "FastAPI",
            description: "I use it for backend development",
            icon: (
                <svg className="w-12 h-12 text-[#05998B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    // Duplicating some to match the grid of 9 as seen in the image
    const displaySkills = [...skillList, ...skillList.slice(0, 3)];

    return (
        <section id="skills" className="bg-[#0f0f0f] py-20 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-normal mb-12">What is my skill set?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displaySkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-6 p-1 bg-[#161616] rounded-[10px] border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:bg-[#1c1c1c] group">
                            <div className="shrink-0 w-24 h-24 bg-[#0a0a0a] rounded-[10px] flex items-center justify-center transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <div className="grow py-4 pr-6">
                                <h3 className="text-lg font-normal mb-1">{skill.name}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <ButtonTertiary className="text-base">Show more</ButtonTertiary>
                </div>
            </div>
        </section>
    );
};

export default Skills;
