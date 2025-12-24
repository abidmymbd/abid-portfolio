import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <Link to={'/'}><span className="text-2xl font-bold text-primary">Abid Hasan</span></Link>
            <p className="text-gray-400 mb-4">
              I build reliable, responsive web solutions using modern tools, with a strong focus on improvement and quality.
            </p>
          </div>

          {/* Explore Link */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore Link</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Me */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/abid.mym.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-white hover:text-primary border border-primary p-3 rounded transition-colors duration-500">
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/AbidHasan630510"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-white hover:text-primary border border-primary p-3 rounded transition-colors duration-500">
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/abidmymbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-white hover:text-primary border border-primary p-3 rounded transition-colors duration-500">
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/abidmymbd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-white hover:text-primary border border-primary p-3 rounded transition-colors duration-500">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} All Rights Reserved by <span className="text-primary">Abid Hasan</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
