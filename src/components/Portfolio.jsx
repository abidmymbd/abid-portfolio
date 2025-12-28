"use client"

import { useNavigate } from "react-router-dom"

const Portfolio = () => {
  const navigate = useNavigate()

  const portfolioItems = [
    {
      id: 1,
      category: "Firesheild Point",
      image: "/project1.png",
      title: "A centralized online platform to access, explore, and purchase technology courses.",
    },
    {
      id: 2,
      category: "ARTIFY",
      image: "/project2.png",
      title: "A photographycal website to browse, showcase, and buy or sell photographs.",
    },
    {
      id: 3,
      category: "Book Courier",
      image: "/project3.png",
      title: "A delivery management system to request book pickup & delivery from nearby libraries.",
    },
  ]

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <p className="text-center text-primary mb-4 uppercase tracking-wide">My Portfolio</p>
        <h2 className="section-title">VISIT MY PROJECTS</h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="p-6 text-white text-center">
                  <p className="font-semibold text-xl mb-2">{item.category}</p>
                  <h3 className="mb-4 text-md">{item.title}</h3>
                  <button
                    onClick={() => navigate(`/portfolio/${item.id}`)}
                    className="btn btn-primary border-none hover:border-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
