import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary/90 text-white px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start pt-7 md:pt-8 pb-12 md:pb-14 gap-10">
        <div className="max-w-md text-center md:text-left">
          {/* <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo-reontech-v1.png"
              alt="Logo Footer"
              width={87}
              height={44}
            />
          </div> */}
          <p className="mt-6">
            Engineered for endurance and designed for speeed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 text-center md:text-left">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Ceritfications</Link>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start">
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Github</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container mx-auto py-2 flex flex-col md:flex-row items-center md:justify-between gap-4 text-center">
          <div>
            Muhammad Rivaldhi © 2026 All Rights Reserved.
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;