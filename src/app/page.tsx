

import Hero from "./_components/Hero";
import AboutMe from "./_components/AboutMe";
import Container from "@/components/Layout/Container";
import Skills from "./_components/skills";
import Experience from "./_components/experience";

export default function Home() {
  return (
    <div className="bg-[#101010] dark:bg-black">
      <Container>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills/>





        
      </Container>
    </div>
  );
}


