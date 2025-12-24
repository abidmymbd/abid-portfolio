import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <p className="text-center text-primary mb-10 uppercase tracking-wide">My Contact</p>
        <h2 className="section-title">I WANT TO HEAR FROM YOU</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
              ></textarea>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 mt-20">
            <div className="flex items-start">
              <div className="bg-primary/10 p-4 rounded-lg mr-4">
                <FaMapMarkerAlt className="text-2xl text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Address</h4>
                <p className="text-gray-600 hover:text-primary duration-500">Sadar, Mymensingh, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-4 rounded-lg mr-4">
                <FaPhone className="text-2xl text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Phone</h4>
                <p className="text-gray-600 hover:text-primary duration-500">+01748717236</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-4 rounded-lg mr-4">
                <FaEnvelope className="text-2xl text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <p className="text-gray-600 hover:text-primary duration-500">abid.mym.bd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
