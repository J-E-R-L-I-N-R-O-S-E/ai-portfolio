import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FiBriefcase, FiAward } from "react-icons/fi";

const timeline = [
  {
    role: "Full Stack Development Intern",
    org: "Industry Internship",
    period: "2024",
    points: [
      "Developed responsive, production-grade web applications",
      "Built modern frontend interfaces with React + Tailwind",
      "Shipped real-world features against tight deadlines",
      "Improved UI responsiveness and accessibility",
      "Owned end-to-end deployment workflows",
    ],
  },
];

const achievements = [
  { title: "Web Wizard Relay", event: "Resonance'25", role: "Participant" },
  { title: "Hack Hive", event: "IEEE Breadths 2024", role: "Participant" },
  { title: "Cancer Awareness Drive", event: "Community", role: "Contributor" },
  { title: "Enactus REC", event: "Student Org", role: "Recruited Member" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="// 04 — Experience"
          title={<>Journey &amp; <span className="gradient-text">Achievements</span></>}
        />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <div className="relative">
            <div className="absolute left-6 top-2 bottom-2 w-px gradient-bg opacity-50" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 pb-8"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center neon-glow-purple">
                  <FiBriefcase className="text-primary-foreground" size={20} />
                </div>
                <div className="glass-strong rounded-2xl p-6 neon-border">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl">{t.role}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full glass" style={{ color: "var(--neon-cyan)" }}>{t.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-4">{t.org}</p>
                  <ul className="space-y-2">
                    {t.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-neon-cyan mt-1" style={{ color: "var(--neon-cyan)" }}>▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 neon-border hover:neon-glow-blue transition-all"
              >
                <FiAward className="text-neon-cyan mb-3" size={22} style={{ color: "var(--neon-cyan)" }} />
                <h4 className="font-display font-bold">{a.title}</h4>
                <p className="text-xs text-muted-foreground font-mono mt-1">{a.event}</p>
                <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-md gradient-bg text-primary-foreground font-mono">{a.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
