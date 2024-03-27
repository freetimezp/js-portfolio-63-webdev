import Hero from "./sections/Hero";
import About from "./sections/About";
import Facts from "./sections/Facts";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />

        <div style={{ height: '200vh' }}></div>
      </main>
    </>
  );
}
