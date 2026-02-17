"use client"

import Silk from "@/components/Silk"
import Image from "next/image"

const certificates = [
  { id: 1, src: "/images/certifications/fullstack-developer.png", title: "Web Programming - Fullstack Developer" },
  { id: 2, src: "/images/certifications/backend-golang.png", title: "Enigma IT Bootcamp - Backend Golang" },
  { id: 3, src: "/images/certifications/laravel-developer.png", title: "Laravel Developer Intern" },
  { id: 4, src: "/images/certifications/it_manger_intern.png", title: "IT Manager Intern" },
  { id: 5, src: "/images/certifications/it-internship.png", title: "IT Internship Program" },
  { id: 6, src: "/images/certifications/certificate-competency.png", title: "Certification of Competency Test" },
  { id: 7, src: "/images/certifications/certificate-ui-ux.png", title: "UI/UX Design Fundamentals" },
  { id: 8, src: "/images/certifications/devhandal-program.png", title: "Revolusi Deployment dengan AI Assist" },
  { id: 9, src: "/images/certifications/berinovasi-ai.png", title: "Berinovasi dengan AI" },
]

export default function GallerySection() {
  return (
    <section id="certifications-section" className="relative w-full px-6 lg:px-20 py-20 overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={10}
          scale={1}
          color="#6C8CFF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="absolute inset-0 -z-10 backdrop-blur-[80px]" />
      <h2 className="text-3xl font-bold text-center mb-16 text-white italic">
        MY CERTIFICATIONS
      </h2>

      <div className="
        grid
        grid-cols-2
        lg:grid-cols-4
        auto-rows-[180px]
        lg:auto-rows-[240px]
        gap-6
      ">
        {certificates.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative
              group
              overflow-hidden
              rounded-2xl
              bg-white/40
              backdrop-blur-xl
              border border-white/30
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-2
              ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            `}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/40
              via-black/10
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            " />
            <div className="
              absolute bottom-4 left-4
              text-white
              text-sm lg:text-lg
              font-semibold
              translate-y-6
              group-hover:translate-y-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            ">
              {item.title}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
