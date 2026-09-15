import Navbar from "@/components/Navbar";
import TopSection from "@/components/TopSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <TopSection />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
