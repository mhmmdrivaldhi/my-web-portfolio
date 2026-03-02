"use client"

import Image from "next/image";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", id: "hero-section" },
  { name: "About", id: "about-section" },
  { name: "Services", id: "services-section" },
  { name: "Portfolio", id: "portfolio-section" },
  { name: "Certifications", id: "certifications-section" },
]

const Header = () => {
  const [active, setActive] = useState("hero-section")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Blur saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll Spy
  useEffect(() => {
  const handleScroll = () => {
    const sections = navItems.map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    }))

    const viewportMiddle = window.innerHeight / 2

    for (let section of sections) {
      if (!section.element) continue

      const rect = section.element.getBoundingClientRect()

      if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
        setActive(section.id)
        break
      }
    }
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
    setMobileOpen(false)
  }

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${isScrolled
          ? "backdrop-blur-xl bg-white/60 shadow-md"
          : "bg-white"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-10 font-semibold gap-10">

        {/* Logo */}
        <Image
          src="/images/logo-reontech-v2.png"
          alt="Logo"
          width={120}
          height={120}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-primary">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                px-3 py-2 rounded-full transition-all duration-300
                ${active === item.id
                  ? "bg-primary text-white scale-100"
                  : "hover:bg-primary hover:text-white"}
              `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social */}
        <div className="hidden md:flex gap-8">
          <Link href="https://github.com/mhmmdrivaldhi" target="_blank" rel="noopener noreferrer">
            <FiGithub size={22} className="text-purple-800 cursor-pointer hover:scale-110 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-rivaldhi/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={22} className="text-blue-800 cursor-pointer hover:scale-110 transition" />
          </Link>
          <Link href="https://www.instagram.com/mhmmdrivaldhi10_/" target="_blank" rel="noopener noreferrer">
            <FiInstagram size={22} className="text-pink-400 cursor-pointer hover:scale-110 transition" />
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          {mobileOpen ? (
            <FiX size={24} onClick={() => setMobileOpen(false)} />
          ) : (
            <FiMenu size={24} onClick={() => setMobileOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/80 px-10 pb-6">
          {navItems.map(item => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                py-3 border-b cursor-pointer transition
                ${active === item.id
                  ? "text-primary font-bold"
                  : "text-gray-700"}
              `}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header