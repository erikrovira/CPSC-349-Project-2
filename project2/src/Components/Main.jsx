import NavigationBar from "./NavBar.jsx"
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Projects from "./Projects.jsx"
import PreviousWork from "./PrevWork.jsx"
import Contact from "./ContactInfo.jsx"
import Footer from "./Footer.jsx"

export default function Main() {
    return (
        <div className="bg-teal-500">
            <NavigationBar />
            <Hero />
            <About />
            <PreviousWork />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}