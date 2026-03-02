"use client"

import LightRays from "@/components/LightRays";
import ProfileCard from "@/components/ProfileCard";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative flex items-start min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-200 to-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#9ebeff"
          raysSpeed={3.5}
          lightSpread={0.6}
          rayLength={4.2}
          pulsating={false}
          fadeDistance={1.7}
          saturation={1}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      <div className="relative z-10 w-full mt-10">
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full"
            data-aos="fade-down"
          >
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <ProfileCard />
            </div>
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="font-semibold text-gray-900">
                <span className="inline-flex mb-1 text-lg text-gray-700">
                  Hello, I'm
                </span>
                <br />
                <span className="block text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  MUHAMMAD RIVALDHI
                </span>
              </h1>
              <div className="">
                <TextType
                  text={[
                    "Fullstack Web Developer",
                    "Web Designer",
                    "IT Programmer",
                    "Tech Enthusiast"
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="|"
                  deletingSpeed={50}
                  className="font-bold text-lg lg:text-xl italic"
                />
              </div>
              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I'm a Fullstack Developer, passionate about building scalable and
                reliable web applications with a strong foundation in both backend
                and frontend development, focused on creating clean, efficient,
                and user-friendly digital solutions while continuously learning
                and adapting to modern technologies.
              </p>
              <div className="mt-8">
                <Button asChild variant="default">
                  <a
                    href="/cv/Muhammad_Rivaldhi_Developer.pdf"
                    download
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <FiDownload />
                    DOWNLOAD CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;