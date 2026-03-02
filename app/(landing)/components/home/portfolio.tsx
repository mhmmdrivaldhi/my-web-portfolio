import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FiGithub, FiGlobe } from "react-icons/fi"

type Projects = {
    imageUrl: string,
    title: string,
    description: string,
    githubUrl?: string,
    liveDemoUrl?: string
}

const projects: Projects[] = [
    {
        imageUrl: "/images/portfolio/sporton-demo.png",
        title: "SportOn E-Commerce Website",
        description: "Online sales platform for sports equipment with a secure transaction system and a modern, responsive appearance.",
        githubUrl: "https://github.com/mhmmdrivaldhi/sporton-website-fe-deploy-vercel",
        liveDemoUrl: "https://sporton-website-fe-deploy-vercel.vercel.app/"
    },
    {
        imageUrl: "/images/portfolio/personal-blog.png",
        title: "Personal Blog Website",
        description: "Website sharing articles about technology and sports with a clean design, easy navigation, and a comfortable reading experience.",
        githubUrl: "https://github.com/mhmmdrivaldhi/my-blog-website",
        liveDemoUrl: "",
    },
    {
        imageUrl: "/images/portfolio/pengaduan-masyarakt-demo.png",
        title: "Public Complaints Application Website",
        description: "Web platform to submit and monitor public complaints quickly, structured and transparently to improve the quality of public services.",
        githubUrl: "https://github.com/mhmmdrivaldhi/ukk-aplikasi-pengaduan-masyarakat",
        liveDemoUrl: ""
    },
    {
        imageUrl: "/images/portfolio/landing-page-indiecoffe.png",
        title: "Landing Page Coffe Shop",
        description: "Interactive promotional page that displays brand profiles, featured menus, and ordering information in an attractive manner.",
        githubUrl: "https://github.com/mhmmdrivaldhi/kopi-dan-senja-indiecofee",
        liveDemoUrl: "https://kopi-dan-senja-indiecofee.vercel.app"
    },
    {
        imageUrl: "/images/portfolio/employee-attendence.png",
        title: "Employee Attendance System",
        description: "Digital system for recording employee attendance with selfie and geolocation features, managing absence data, and generating automatic and structured reports.",
        githubUrl: "https://github.com/mhmmdrivaldhi/project-absensi-karyawan",
        liveDemoUrl: ""
    },
    {
        imageUrl: "/images/portfolio/landing-page-codeval.png",
        title: "Landing Page CodeValoper",
        description: "Digital profile page that introduces website development services with professional, informative, and conversion-oriented designs.",
        githubUrl: "https://github.com/mhmmdrivaldhi/codevaloper-web-apps",
        liveDemoUrl: "https://codevaloper-web-apps.vercel.app"
    },
]

const PortfolioSection = () => {
    return (
        <section id="portfolio-section" className="scroll-mt-28 min-h-screen bg-gradient-to-t from-blue-100 to-blue-50 py-10">
            <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8" data-aos="fade-up">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary/100 italic">
                        PORTFOLIO
                    </h2>
                    <p className="mt-2 text-muted-foreground leading-loose">
                        Some projects that I have worked on, Explore a collection of projects showcasing my expertise in <b className="text-primary">Web Application Development</b>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto px-10 py-5 rounded-3xl">
                { projects.map((project, index) => (
                   <div key={index} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg" data-aos="zoom-in-up">
                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-between h-[260px]">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-4 flex gap-3">
                                {project.githubUrl && (
                                    <Button asChild>
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="ml-2"
                                        >
                                            <FiGithub /> Source Code
                                        </Link>
                                    </Button>
                                )}

                                {project.liveDemoUrl && (
                                    <Button asChild variant="outline">
                                        <Link
                                            href={project.liveDemoUrl}
                                            target="_blank"
                                            className="ml-2"
                                        >
                                            <FiGlobe /> Live Demo
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                   </div>    
                ))}
            </div>
        </section>
    )
}

export default PortfolioSection; 