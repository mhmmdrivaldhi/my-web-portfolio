import LightRays from "@/components/LightRays";
import TextType from "@/components/TextType";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero-section" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-200 to-white">
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
            <div className="flex justify-center items-center h-full w-full gap-50">
                <div className="flex flex-col gap-2">
                    <span className="text-5xl md:text-2xl font-medium text-gray-800">
                       Hello, I'm
                    </span>
                    <h1 className="text-6xl md:text-5xl font-bold text-gray-800">MUHAMMAD RIVALDHI</h1>
                    <TextType 
                    text={["Fullstack Web Developer", "Web Designer", "IT Programmer", "Tech Enthusiast"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="|"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                    className="text-2xl md:text-2xl text-gray-700 font-bold italic"
                    />
                    <button className="mt-3 w-max border-2 border-primary py-3 px-6 rounded-lg bg-white font-bold text-primary text-sm hover:bg-primary hover:text-white cursor-pointer transition-colors duration-500">
                        Know About Me
                    </button>
                </div>
                <Image src="/images/hero-profile.png" alt="Hero Image" width={500} height={500}></Image>
            </div>
        </section>
    )
}

export default HeroSection;