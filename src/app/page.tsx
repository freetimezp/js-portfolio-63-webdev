import Hero from "./sections/Hero";
import About from "./sections/About";
import Facts from "./sections/Facts";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        {/* <Portfolio />
        <Services />
        <Testimonials />
        <Contact /> */}

      </main>
    </>
  );
}
