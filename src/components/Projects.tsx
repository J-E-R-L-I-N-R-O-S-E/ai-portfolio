import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI-Powered BIS Standards Recommender",
    category: "AI/ML",
    description: "Hybrid retrieval AI using FAISS + TF-IDF to recommend BIS / CSD standards from natural language. Sub-second latency, FastAPI + Streamlit.",
    tech: ["Python", "FastAPI", "Streamlit", "FAISS", "TF-IDF"],
    color: "var(--neon-purple)",
  },
  {
    title: "PetCare Assistant — LLM Chatbot",
    category: "Full Stack",
    description: "Full-stack chatbot pairing a rule-based assistant with an LLM-powered conversational AI via Groq API. Responsive React frontend, RESTful Express backend.",
    tech: ["React", "Node.js", "Express.js", "Groq API"],
    color: "var(--neon-cyan)",
  },
  {
    title: "Scholarship Data Aggregation Platform",
    category: "Automation",
    description: "End-to-end pipeline using Selenium + RSS for scholarship data collection, automated scheduling, validation and clean structured JSON storage.",
    tech: ["Python", "Selenium", "JSON"],
    color: "var(--neon-blue)",
  },
  {
    title: "ML Stock Price Prediction System",
    category: "AI/ML",
    description: "Time-series forecasting and regression models for stock prediction using historical market data, engineered features and ensemble baselines.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    color: "var(--neon-pink)",
  },
];

const filters = ["All", "AI/ML", "Full Stack", "Automation"];

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="group relative glass-strong rounded-2xl p-6 neon-border overflow-hidden h-full"
    >
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-20 blur-3xl group-hover:opacity-50 transition-opacity" style={{ background: project.color }} />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${project.color}40, 0 0 30px ${project.color}40` }} />

      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: project.color }}>{project.category}</span>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:text-neon-cyan transition-colors"><FiGithub size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:text-neon-cyan transition-colors"><FiExternalLink size={14} /></a>
          </div>
        </div>
        <h3 className="font-display font-bold text-xl mb-3 group-hover:gradient-text transition-all">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md glass font-mono">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="// 03 — Projects"
          title={<>Featured <span className="gradient-text">Builds</span></>}
          subtitle="Selected work — from production AI systems to experimental full-stack apps."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl font-mono text-sm uppercase tracking-wider transition-all ${
                filter === f
                  ? "gradient-bg text-primary-foreground neon-glow-purple"
                  : "glass hover:text-neon-cyan"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
