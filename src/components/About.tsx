import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FiTarget, FiBookOpen, FiAward, FiCpu } from "react-icons/fi";

const stats = [
  { icon: FiTarget, label: "Projects Completed", value: "12+" },
  { icon: FiBookOpen, label: "Technologies Learned", value: "25+" },
  { icon: FiAward, label: "Hackathons", value: "5+" },
  { icon: FiCpu, label: "AI Projects Built", value: "8+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="// 01 — About Me"
          title={<>Decoding the future <span className="gradient-text">with AI</span></>}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8 neon-border"
          >
            <h3 className="font-display text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an aspiring <span className="text-neon-cyan" style={{ color: "var(--neon-cyan)" }}>AI Engineer</span> and full stack developer obsessed with building
              systems that think, learn, and scale. From neural networks to production-grade APIs,
              I love bridging research and real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal: ship intelligent products that solve genuine problems — combining
              deep learning, vector retrieval, and clean engineering into experiences that feel like magic.
            </p>

            <div className="mt-6 pt-6 border-t border-border/50">
              <h4 className="font-mono uppercase tracking-widest text-xs text-muted-foreground mb-4">Education</h4>
              <div className="relative pl-6 border-l-2" style={{ borderColor: "var(--neon-purple)" }}>
                <span className="absolute -left-2 top-1 w-4 h-4 rounded-full gradient-bg neon-glow-purple" />
                <p className="font-display font-bold text-lg">B.Tech — AI &amp; Data Science</p>
                <p className="text-sm font-mono mt-1" style={{ color: "var(--neon-cyan)" }}>Rajalakshmi Engineering College · Chennai</p>
                <p className="text-xs text-muted-foreground mt-1">Aug 2023 — May 2027 · CGPA 7.744 / 10</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 neon-border group hover:neon-glow-blue transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="text-primary-foreground" size={22} />
                </div>
                <div className="font-display font-black text-4xl gradient-text">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground font-mono">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
