import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({ tag, title, subtitle }: { tag: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--neon-purple)", boxShadow: "0 0 8px var(--neon-purple)" }} />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{tag}</span>
      </div>
      <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
