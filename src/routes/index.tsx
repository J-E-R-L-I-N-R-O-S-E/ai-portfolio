import { createFileRoute } from "@tanstack/react-router";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AILab from "@/components/AILab";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jerlin Rose V — AI Engineer & Full Stack Developer" },
      { name: "description", content: "Portfolio of Jerlin Rose V — AI Enthusiast, Full Stack Developer, and AI & Data Science student. Turning data and ideas into intelligent applications." },
      { property: "og:title", content: "Jerlin Rose V — AI Engineer Portfolio" },
      { property: "og:description", content: "Cyberpunk AI engineer portfolio showcasing projects in NLP, vector search, deep learning, and full-stack systems." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AILab />
      <Contact />
    </main>
  );
}
