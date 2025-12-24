import {
  FaPaintBrush,
  FaPalette,
  FaCode,
  FaSearch,
  FaMobile,
} from "react-icons/fa"

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-5xl text-primary" />,
      title: "Web Developer",
      description: "Building fast, responsive, and scalable web applications with modern technologies and clean code.",
    },
    {
      icon: <FaPaintBrush className="text-5xl text-primary" />,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces focused on great user experience and accessibility.",
    },
    {
      icon: <FaPalette className="text-5xl text-primary" />,
      title: "Graphic Design",
      description: "Creating visually appealing designs that communicate ideas clearly and strengthen brand identity.",
    },
    {
      icon: <FaSearch className="text-5xl text-primary" />,
      title: "SEO Optimisation",
      description: "Improving website visibility and performance through smart SEO strategies and best practices.",
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <p className="text-center text-primary mb-10 uppercase tracking-wide">My Service</p>
        <h2 className="section-title">Services I Offer</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
