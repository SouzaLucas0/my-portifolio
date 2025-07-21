
import About from "../ui/sections/about/about";
import { Contact } from "../ui/sections/contact/contact";
import { Footer } from "../ui/sections/footer/footer";
import { Header } from "../ui/sections/header/header";
import { Hero } from "../ui/sections/hero/hero";
import { Projects } from "../ui/sections/projects/projects";

export function HomeTemplate() {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />       
            <Footer />     
        </>
    )
}