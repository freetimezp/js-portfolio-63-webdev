import Hero from "./sections/Hero";
import About from "./sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
      </main>
    </>
  );
}
