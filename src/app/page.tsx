import { Contact } from "@/components/contact";
import { DotBackground } from "@/components/dot-background";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <DotBackground />
      <Navbar />

      <main className="relative">
        <Hero />

        <About />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
