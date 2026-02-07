import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Header = () => {
    return (
        <header className="container mx-auto flex justify-between items-center py-4 px-10 font-semibold gap-10">
            <Image
                src="/images/logo-reontech-v1.png"
                alt="Logo"
                width={60}
                height={60}
            />
            <nav className="flex gap-10 text-primary">
                <Link
                    href="/"
                    className="hover:text-gray-100 hover:bg-primary rounded-full transition-colors duration-500 px-4 py-2"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="hover:text-gray-100 hover:bg-primary rounded-full transition-colors duration-500 px-4 py-2"
                >
                    About
                </Link>
                <Link
                    href="/services"
                    className="hover:text-gray-100 hover:bg-primary rounded-full transition-colors duration-500 px-4 py-2"
                >
                    Services
                </Link>
                <Link
                    href="/projects"
                    className="hover:text-gray-100 hover:bg-primary rounded-full transition-colors duration-500 px-4 py-2"
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-gray-100 hover:bg-primary rounded-full transition-colors duration-500 px-4 py-2"
                >
                    Contact
                </Link>
            </nav>
            <div className="flex gap-8">
                <FiGithub size={24}  className="text-purple-800 cursor-pointer"/>
                <FiLinkedin size={24} className="text-blue-800 cursor-pointer"/>
                <FiInstagram size={24} className="text-pink-400 cursor-pointer"/>
            </div>
        </header>
    )
}

export default Header;