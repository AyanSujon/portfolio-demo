

import Hero from "./_components/Hero";
import AboutMe from "./_components/AboutMe";
import Container from "@/components/Layout/Container";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <div className="bg-[#101010] dark:bg-black">
      <Container>
        <Hero />
        <AboutMe />
        <Skills/>





        
      </Container>
    </div>
  );
}


