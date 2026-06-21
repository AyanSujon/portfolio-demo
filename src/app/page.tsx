

import Hero from "./_components/Hero";
import AboutMe from "./_components/AboutMe";
import Container from "@/components/Layout/Container";

export default function Home() {
  return (
    <div className="bg-yellow-100 dark:bg-black">
      <Container>
        <Hero />
        <AboutMe />
      </Container>
    </div>
  );
}


