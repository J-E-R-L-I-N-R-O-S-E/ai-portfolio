import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { title: "Natural Language Processing", icon: "💬", desc: "Tokenization, embeddings, transformers, semantic search.", color: "var(--neon-purple)" },
  { title: "Deep Learning", icon: "🧠", desc: "CNNs, RNNs, attention mechanisms and neural architectures.", color: "var(--neon-blue)" },
  { title: "Vector Databases", icon: "🗂️", desc: "FAISS, embeddings indexing, ANN search at scale.", color: "var(--neon-cyan)" },
  { title: "RAG Systems", icon: "🔗", desc: "Retrieval-augmented generation pipelines for grounded LLMs.", color: "var(--neon-pink)" },
  { title: "Predictive Analytics", icon: "📈", desc: "Time-series forecasting and regression for real-world signals.", color: "var(--neon-purple)" },
  { title: "Information Retrieval", icon: "🔍", desc: "TF-IDF, hybrid retrieval, ranking and relevance.", color: "var(--neon-cyan)" },
];

export default function AILab() {
  return (
    <section id="ai" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="// 05 — AI Lab"
          title={<>The <span className="gradient-text">Neural</span> Stack</>}
          subtitle="Concepts and architectures I work with — and love."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass-strong rounded-2xl p-6 neon-border overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-50 transition-opacity" style={{ background: c.color }} />
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:gradient-text transition-all">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-4 h-px w-12 group-hover:w-full transition-all duration-500" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
