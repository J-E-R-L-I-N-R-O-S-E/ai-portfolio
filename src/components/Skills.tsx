import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const categories = [
  { name: "Programming", color: "var(--neon-purple)", skills: [
    { name: "Python", level: 92 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 80 },
    { name: "C", level: 75 },
    { name: "R", level: 65 },
  ]},
  { name: "Frontend", color: "var(--neon-cyan)", skills: [
    { name: "React", level: 88 },
    { name: "HTML / CSS", level: 92 },
    { name: "Streamlit", level: 85 },
    { name: "Tailwind", level: 80 },
  ]},
  { name: "Backend", color: "var(--neon-blue)", skills: [
    { name: "FastAPI", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 80 },
    { name: "REST APIs", level: 85 },
  ]},
  { name: "AI / ML", color: "var(--neon-pink)", skills: [
    { name: "Deep Learning", level: 80 },
    { name: "NLP", level: 82 },
    { name: "FAISS / Vector DB", level: 85 },
    { name: "TF-IDF", level: 88 },
    { name: "Sentence Transformers", level: 80 },
  ]},
];

const tools = ["Git", "VS Code", "Jupyter", "Google Colab", "Selenium", "MySQL", "Railway", "Figma", "Canva"];
const concepts = ["Data Structures & Algorithms", "System Design", "Information Retrieval", "Data Preprocessing"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="// 02 — Skills"
          title={<>Tech <span className="gradient-text">Arsenal</span></>}
          subtitle="A growing toolkit spanning AI research, full-stack engineering, and production deployment."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-strong rounded-2xl p-6 neon-border hover:neon-glow-purple transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3 h-3 rounded-full" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                <h3 className="font-display font-bold text-xl">{cat.name}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((sk, i) => (
                  <div key={sk.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-mono">{sk.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{sk.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, var(--neon-cyan))`, boxShadow: `0 0 10px ${cat.color}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
            <h4 className="font-mono uppercase tracking-widest text-xs text-muted-foreground mb-4">// Tools</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg glass-strong text-sm font-mono hover:text-neon-cyan hover:scale-105 transition-all cursor-default">{t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
            <h4 className="font-mono uppercase tracking-widest text-xs text-muted-foreground mb-4">// Concepts</h4>
            <div className="flex flex-wrap gap-2">
              {concepts.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg glass-strong text-sm font-mono hover:text-neon-purple hover:scale-105 transition-all cursor-default">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
