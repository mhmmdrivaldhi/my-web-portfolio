'use client'

import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="absolute 
        md:w-[400px] md:h-[420px]
        w-[320px] h-[380px]
        rounded-[20px]
        bg-white/20 backdrop-blur-xl  
        -z-10 md:rounded-2xl">
      </div>
      <div className="relative z-10">
        <Image
          src="/images/profile-thumbnail.png" 
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
