import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Testimonials from "./components/Testimonials"
import Portfolio from "./components/Portfolio"
import Partners from "./components/Partners"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import PortfolioDetail from "./components/PortfolioDetail"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Experience />
              <Testimonials />
              <Portfolio />
              <Partners />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
