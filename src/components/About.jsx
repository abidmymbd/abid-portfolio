import { FaPencilRuler, FaPalette } from "react-icons/fa"
import pic from '../../public/IMG_7886-0rf3.jpeg'

const About = () => {
  const features = [
    {
      icon: <FaPencilRuler className="text-3xl text-primary" />,
      title: "Complete Project",
      value: "5+",
    },
    {
      icon: <FaPalette className="text-3xl text-primary" />,
      title: "Year of experience",
      value: "1",
    },
  ]

  const services = [
    { text: "Work simple and clean design" },
    { text: "Web Design Full stack" },
    { text: "New idea and user friendly design" },
    { text: "Unlimited Revisions" },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <p className="text-center text-primary mb-10 uppercase tracking-wide">About Me</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={pic}
              alt="About Me"
              className="rounded-2xl shadow-lg w-full max-w-md h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-600 mb-6 text-xl text-justify">
              I’m a junior MERN stack developer who enjoys building responsive, modern, and interactive web applications. I work mainly with React, Tailwind CSS, and other modern web technologies to create clean and user-friendly interfaces. I’m passionate about learning, improving my skills, and delivering practical solutions for real-world web projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-center mb-2">{feature.icon}</div>
                  <h3 className="text-3xl font-bold text-primary mb-1">{feature.value}</h3>
                  <p className="text-gray-600 text-sm">{feature.title}</p>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="space-y-3 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">{service.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/01748717236"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary">Contact Me</a>
              
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
