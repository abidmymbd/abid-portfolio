import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa"

const Experience = () => {
  const education = [
    {
      degree: "BBA in Accounting",
      institution: "National University of Bangladesh (2019 - 2026)",
    },
    {
      degree: "Higher Secondary Certificate (2017 - 2019)",
      institution: "Cantonment Public School & College, Momenshahi",
    },
  ]

  const skills = [
    {
      category: "Frontend Frameworks",
      items: [
        { name: "React.js", percentage: 90 },
        { name: "Next.js", percentage: 75 },
        { name: "Tailwind CSS", percentage: 89 },
      ],
    },
    {
      category: "Backend Frameworks",
      items: [
        { name: "Node.js", percentage: 90 },
        { name: "Express.js", percentage: 85 },
        { name: "JWT Authentication", percentage: 75 },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", percentage: 92 },
        { name: "VS Code", percentage: 87 },
        { name: "Figma", percentage: 82 },
      ],
    },
  ]

  const workExperience = [
    {
      position: "Front-end Developer",
      company: "Programming Hero - (2025 - 2026)",
      description: "Completed a comprehensive Web Development course from Programming Hero, covering modern frontend and backend technologies.",
    },
    {
      position: "Graphic Design",
      company: "TTC Mymensingh - (2023 - 2024)",
      description: "Completed a Graphic Design course from TTC Mymensingh, focusing on design fundamentals and creative visual solutions.",
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <p className="text-center text-primary mb-10 uppercase tracking-wide">My Resume</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-3xl text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-primary text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <div className="flex items-center mb-6">
              <FaLaptopCode className="text-3xl text-primary mr-3" />
              <h3 className="text-2xl font-bold">Software Skills</h3>
            </div>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-4">{skillGroup.category}</h4>
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-primary">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-3xl text-primary mr-3" />
              <h3 className="text-2xl font-bold">Professional Courses</h3>
            </div>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">{exp.position}</h4>
                  <p className="text-primary text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
