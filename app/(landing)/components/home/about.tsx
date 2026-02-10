"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type aboutSkill = {
    name: string;
    percentage: number;
}

const skills: aboutSkill[] = [
    {
        name: "HTML & CSS",
        percentage: 90
    },
    {
        name: "Javascript",
        percentage: 75
    },
    {
        name: "PHP",
        percentage: 85
    },
    {
        name: "Golang",
        percentage: 80
    },
]

const AboutSection = () => {
    const [width, setWidth] = useState<number[]>([]);
    useEffect(() => {
        setWidth(skills.map(() => 0))

        const timeout = setTimeout(() => {
            setWidth(skills.map(skill => skill.percentage))
        }, 100)
        return () => clearTimeout(timeout)
    }, []);

    return (
        <section id="about-section" className="bg-gradient-to-t from-blue-100 to-blue-50 h-full py-20">
            <div className="relative mx-40 xxl:mx-0.5 z-10 rounded-2xl drop-shadow-2xl p-10 bg-white">
                <div className="flex justify-between px-10 items-center rounded-2xl">    
                    <div className="h-auto">
                        <div className="max-w-200 h-auto object-fill overflow-hidden rounded-xl">
                            <Image 
                                src="/images/profile-about.png"
                                alt="Profile About Image"
                                width={400}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="w-[33rem] py-10">
                        <h2 className="text-3xl max-md:text-center font-semibold mb-5 text-primary/100">
                            WHO IAM I ?
                        </h2>
                        <p className="text-base text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aperiam porro eos ab animi distinctio tempore aliquam magni deserunt veniam dicta blanditiis, sit accusamus tenetur dolor aliquid obcaecati, nihil voluptas!
                        </p>
                        <div className="max-w-3xl space-y-8 py-6">
                         { skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-primary/100">{ skill.name }</span>
                                    <span className="font-bold text-primary/100">{ skill.percentage }%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full overflow-hidden h-3">
                                <div
                                    className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${width[index]}%` }}
                                />
                                </div>
                            </div>
                         ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection;