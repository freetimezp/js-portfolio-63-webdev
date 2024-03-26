import Hero from "./sections/Hero";
import About from "./sections/About";
import Facts from "./sections/Facts";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Facts />

        <div style={{ height: '200vh' }}></div>
      </main>
    </>
  );
}
