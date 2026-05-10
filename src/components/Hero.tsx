import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

const phrases = [
  "Building Intelligent Applications.",
  "Training Neural Networks.",
  "Architecting AI Systems.",
  "Turning Data into Decisions.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [pIdx, setPIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[pIdx];
    const speed = del ? 40 : 70;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setPIdx((i) => (i + 1) % phrases.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, pIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 10px var(--neon-cyan)" }} />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            <span className="block text-foreground/90">JERLIN</span>
            <span className="block gradient-text">ROSE V</span>
          </h1>

          <p className="mt-5 max-w-xl text-xl sm:text-2xl font-display font-semibold leading-snug">
            "Turning Data and Ideas into <span className="gradient-text">Intelligent Applications</span>"
          </p>

          <div className="mt-4 font-mono text-base sm:text-lg h-7" style={{ color: "var(--neon-cyan)" }}>
            <span>&gt; </span>
            <span>{text}</span>
            <span className="inline-block w-2 h-5 bg-current ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
          </div>

          <p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">AI Enthusiast</span> · Full Stack Developer · AI &amp; Data Science Student at Rajalakshmi Engineering College.
            Passionate about AI, Deep Learning, NLP, and crafting intelligent real-world applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold neon-glow-purple hover:scale-105 transition-transform">
              View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong neon-border font-semibold hover:scale-105 transition-transform">
              Contact Me
            </a>
            <a href="/resume/Jerlin_Rose_V_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold hover:scale-105 transition-transform">
              <FiDownload /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: FiGithub, href: "https://github.com/J-E-R-L-I-N-R-O-S-E" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/jerlinrosev/" },
              { icon: FiMail, href: "mailto:jerlin.rose.v@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:scale-110 hover:neon-glow-blue transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute -inset-6 rounded-full opacity-70 blur-3xl gradient-bg animate-glow-pulse" />
            <div className="relative w-full h-full rounded-full glass-strong p-2">
              <div className="w-full h-full rounded-full overflow-hidden relative grid-bg flex items-center justify-center">
                <div className="absolute inset-0 gradient-bg opacity-30" />
                <span className="font-display font-black text-8xl gradient-text relative z-10">JR</span>
                <div className="absolute inset-0 rounded-full border border-neon-cyan/40" style={{ boxShadow: "inset 0 0 60px var(--neon-purple), 0 0 60px var(--neon-blue)" }} />
              </div>
            </div>
            {["AI", "ML", "{ }", "<>", "01"].map((label, i) => {
              const angle = (i / 5) * Math.PI * 2;
              const r = 180;
              return (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute glass rounded-xl px-3 py-2 font-mono text-xs text-neon-cyan"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * r}px - 24px)`,
                    top: `calc(50% + ${Math.sin(angle) * r}px - 16px)`,
                    color: "var(--neon-cyan)",
                  }}
                >
                  {label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
