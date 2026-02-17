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
      className="relative flex flex-col justify-center items-center min-h-[550px] w-full overflow-hidden bg-gradient-to-b from-blue-200 to-white"
    >
      {/* Background */}
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

      {/* Content */}
      <div className="relative z-10 flex px-10 h-full flex-col items-center justify-center mt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 lg:py-0 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">
            <div className="
              order-1 lg:order-2
              flex justify-center lg:justify-end
              w-full z-10">
              <ProfileCard />
            </div>
            {/* ✅ Left Content */}
            <div className="
              order-2 lg:order-1
              text-center lg:text-left
            mb-10">
              <h1 className="font-semibold text-gray-900">
                <span className="inline-flex mb-1">Hello, I'm</span>
                <br/>
                <span className="block text-primary text-xl lg:text-4xl">
                  MUHAMMAD RIVALDHI
                </span>
              </h1>

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
                className="font-bold lg:text-xl italic"
              />

              <p className="mt-2 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I'm a Fullstack Developer, passionate about building scalable and reliable web applications with a strong foundation in both backend and frontend development, focused on creating clean, efficient, and user-friendly digital solutions while continuously learning and adapting to modern technologies.
              </p>

              <div className="mt-6">
                <Button>
                  <FiDownload />
                  DOWNLOAD CV
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
