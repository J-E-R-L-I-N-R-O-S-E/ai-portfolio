import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "ai", label: "AI Lab" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between ${scrolled ? "glass-strong rounded-2xl mx-4 md:mx-auto" : ""} transition-all`}>
        <a href="#home" className="font-display font-black text-lg tracking-widest gradient-text">
          JR<span className="text-foreground">.</span>V
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative px-4 py-2 text-sm font-mono uppercase tracking-wider transition-colors ${
                active === s.id ? "text-neon-cyan text-glow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-2 right-2 -bottom-0.5 h-px gradient-bg"
                />
              )}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden glass rounded-lg p-2"
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mx-4 mt-3 glass-strong rounded-2xl p-4 flex flex-col"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 font-mono uppercase text-sm tracking-wider ${
                  active === s.id ? "text-neon-cyan" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
