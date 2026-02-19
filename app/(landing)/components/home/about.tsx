"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type AboutSkill = {
  name: string;
  percentage: number;
};

const skills: AboutSkill[] = [
  { name: "PHP", percentage: 88 },
  { name: "Golang", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
  { name: "Node JS", percentage: 70 },
];

const AboutSection = () => {
  const [width, setWidth] = useState<number[]>([]);

  useEffect(() => {
    setWidth(skills.map(() => 0));

    const timeout = setTimeout(() => {
      setWidth(skills.map((skill) => skill.percentage));
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about-section"
      className="bg-gradient-to-t from-blue-100 to-blue-50 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center bg-gray-200 rounded-full" data-aos="fade-right">
            <Image
              src="/images/profile-about.png"
              alt="Profile About Image"
              width={420}
              height={320}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-primary italic mb-6">
              WHO IAM I?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              I am a <b className="text-primary">Fullstack Web Developer</b> with a strong passion for building systems and designing applications. I focus on creating applications that are functional, clean, and user friendly with strong attention to detail and long-term system quality.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-primary">
                      {skill.name}
                    </span>
                    <span className="font-semibold text-primary">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-300 to-primary rounded-full transition-all duration-700 ease-out"
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
  );
};

export default AboutSection;
