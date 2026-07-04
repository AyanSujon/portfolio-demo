

import Hero from "./_components/Hero";
import AboutMe from "./_components/AboutMe";
import Container from "@/components/Layout/Container";
import Skills from "./_components/skills";
import Experience from "./_components/experience";
import Projects from "./_components/Projects";
import Services from "./_components/services";

export default function Home() {
  return (
    <div className="bg-[#101010] dark:bg-black">
      <Container>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills/>
        <Projects />
        <Services />





        
      </Container>
    </div>
  );
}


