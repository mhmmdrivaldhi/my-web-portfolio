'use client'

import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className="relative w-full flex justify-center items-center">

      {/* Background Shape */}
      <div className="absolute 
        w-[260px] h-[200px]
        md:w-[420px] md:h-[250px]
        bg-gradient-to-br from-blue-100 to-blue-300 
        rounded-[40px] 
        -z-10">
      </div>

      {/* Main Image */}
      <div className="relative z-10">
        <Image
          src="/images/profile-thumbnail.png" // ganti sesuai path image kamu
          alt="Student"
          width={200}
          height={200}
          className="object-contain
          w-[360px]
          sm:w-[220px]
          md:w-[380px]"
          priority
        />
      </div>
    </div>
  )
}

export default ProfileCard
