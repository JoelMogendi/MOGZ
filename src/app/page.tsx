import React from "react";
import ExploreBtn from "./components/ExploreBtn";
import About from "./components/about";
import Skill from "./components/skill";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";
const Home = () => {
  return (
    <main>
      <section data-aos="fade-down">
        <h1 className="text-center text-3xl md:text-5xl mt-15" data-aos="fade-down"><span className="text-sky-500">JOEL MOGENDI</span> | FULL-STACK SOFTWARE ENGINEER</h1>
        <p className="text-center mt-5 text-base md:text-xl max-w-3xl mx-auto px-4">Full-Stack Software Engineer building high-performance web applications and scalable digital marketplaces with Next.js, TypeScript, and the MERN stack.</p>
        <div className="mt-20 space-y-7 mx-w-5xl mx-auto px-64">
          <ExploreBtn />
        </div>
      </section>
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;