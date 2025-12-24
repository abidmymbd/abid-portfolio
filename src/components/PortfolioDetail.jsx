"use client"

import { useParams, useNavigate } from "react-router-dom"
import { FaArrowLeft, FaCalendar, FaTag } from "react-icons/fa"

const PortfolioDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const portfolioItems = [
        {
            id: 1,
            category: "A centralized online platform to access, explore, and purchase technology courses.",
            image: "/project1.png?w=800&h=600&fit=crop",
            title: "Firesheild Point",
            fullDescription:
                "The purpose of FireSheild Point is to provide a centralized online platform where learners can easily access, explore, and purchase high-quality technology courses. It aims to empower individuals to enhance their technical skills, stay updated with the latest industry trends, and achieve personal or professional growth.",
            date: "October 2025",
            technologies: ["HTML", "React.js", "Tailwind CSS", "Vite", "Netlify", "JavaScript"],
            projectUrl: "https://firesheild-point.netlify.app/",
            gallery: [
                "/firesheild1.png?w=400&h=400&fit=crop",
                "/firesheild2.png?w=400&h=400&fit=crop",
                "/firesheild3.png?w=400&h=400&fit=crop",
            ],
        },
        {
            id: 2,
            category: "A photographycal website to browse, showcase, and buy or sell photographs.",
            image: "/project2.png?w=800&h=600&fit=crop",
            title: "ARTIFY",
            fullDescription:
                "> Responsive Website, Featured Artworks Section, Community Highlights Section, React Simple Typewriter, CRUD Operations. Artify is a photography-focused website where users can browse, showcase, and buy or sell high-quality photographs.",
            date: "November 2025",
            technologies: ["HTML", "React.js", "Tailwind CSS", "Vite", "Netlify", "JavaScript"],
            projectUrl: "https://artify-ab.netlify.app/",
            gallery: [
                "/artify1.png?w=400&h=400&fit=crop",
                "/artify2.png?w=400&h=400&fit=crop",
                "/artify3.png?w=400&h=400&fit=crop",
            ],
        },
        {
            id: 3,
            category: "A delivery management system to request book pickup & delivery from nearby libraries.",
            image: "/project3.png?w=800&h=600&fit=crop",
            title: "Book Courier",
            fullDescription:
                "BookCourier is a library delivery management system where users can request book pickup or delivery from nearby libraries. The platform is designed to help students, researchers, and regular readers access books without physically visiting a library. By combining technology with library services, BookCourier reduces time, travel effort, and improves overall reading accessibility.",
            date: "December 2025",
            technologies: ["HTML", "React.js", "Tailwind CSS", "Vite", "Netlify", "JavaScript"],
            projectUrl: "https://book-courier-bd.web.app/",
            gallery: [
                "/bq1.png?w=400&h=400&fit=crop",
                "/bq2.png?w=400&h=400&fit=crop",
                "/bq3.png?w=400&h=400&fit=crop",
            ],
        },
    ]

    const project = portfolioItems.find((item) => item.id === Number.parseInt(id))

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gray-900">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-5">{project.title}</h1>
                        <p className="text-sm uppercase tracking-wide">{project.category}</p>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="container-custom py-8">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                    <FaArrowLeft />
                    Back to Portfolio
                </button>
            </div>

            {/* Project Details */}
            <div className="container-custom pb-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.fullDescription}</p>

                        {/* Gallery */}
                        <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-1 gap-4 mb-8">
                            {project.gallery.map((img, index) => (
                                <img
                                    key={index}
                                    src={img || "/placeholder.svg"}
                                    alt={`${project.title} gallery ${index + 1}`}
                                    className="w-full h-70 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
                            <h3 className="text-xl font-bold mb-6">Project Info</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaTag className="text-primary mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <p className="font-semibold">{project.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FaCalendar className="text-primary mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-semibold">{project.date}</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t">
                                    <p className="text-sm text-gray-500 mb-2">Technologies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    View Live Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail
