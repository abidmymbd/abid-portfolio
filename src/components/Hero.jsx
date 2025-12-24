import mainPic from '../../public/AbidHasan1.jpg'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold mb-2">Hi, I'm Abid Hasan</h1>
            <h1 className="text-primary text-4xl font-bold mb-8">Front-End Developer</h1>
            <p className="text-gray-600 text-xl text-justify mb-8 leading-relaxed">
              I build modern, responsive web applications using the latest technologies. I love learning new things and creating meaningful, high-quality projects.
            </p>
            <a
              href="https://drive.google.com/file/d/1RAwGfNV3cIatN9rX5tduWK0WjuOh6Ce2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View My CV
            </a>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={mainPic}
              alt="Designer"
              className="rounded-2xl shadow-lg w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
