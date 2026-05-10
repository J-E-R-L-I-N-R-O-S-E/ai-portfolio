import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { SectionHeader } from "./SectionHeader";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUp,
} from "react-icons/fi";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ozrpmea",
        "template_y9mteff",
        form.current,
        "YtWGI7oGCgNaXsOZm"
      )
      .then(() => {
        setSent(true);

        setTimeout(() => {
          setSent(false);
        }, 3000);

        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <>
      <section id="contact" className="relative py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            tag="// 06 — Contact"
            title={
              <>
                Let's <span className="gradient-text">Build</span> Something
              </>
            }
            subtitle="Open to internships, collaborations, and ambitious AI projects."
          />

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
            <div className="space-y-4">
              {[
                {
                  icon: FiMail,
                  label: "Email",
                  value: "jerlin.rose.v@gmail.com",
                  href: "mailto:jerlin.rose.v@gmail.com",
                },
                {
                  icon: FiLinkedin,
                  label: "LinkedIn",
                  value: "/in/jerlinrosev",
                  href: "https://www.linkedin.com/in/jerlinrosev/",
                },
                {
                  icon: FiGithub,
                  label: "GitHub",
                  value: "@J-E-R-L-I-N-R-O-S-E",
                  href: "https://github.com/J-E-R-L-I-N-R-O-S-E",
                },
              ].map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass-strong rounded-2xl p-5 neon-border hover:neon-glow-purple transition-all"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <c.icon
                      className="text-primary-foreground"
                      size={20}
                    />
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>

                    <div className="font-display font-semibold">
                      {c.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 neon-border space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Name"
                  name="from_name"
                  placeholder="Your name"
                />

                <Input
                  label="Email"
                  name="from_email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>

              <Input
                label="Subject"
                name="subject"
                placeholder="Project / Opportunity"
              />

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>

                <textarea
                  name="from_message"
                  rows={5}
                  required
                  placeholder="Tell me about your idea..."
                  className="w-full glass rounded-xl px-4 py-3 font-sans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold neon-glow-purple hover:scale-[1.02] transition-transform"
              >
                {sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="relative px-6 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="h-px w-full gradient-bg opacity-60 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-display font-black tracking-widest gradient-text">
              JERLIN ROSE V
            </div>

            <div className="flex items-center gap-3">
              {[
                {
                  Icon: FiGithub,
                  href: "https://github.com/J-E-R-L-I-N-R-O-S-E",
                },
                {
                  Icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/jerlinrosev/",
                },
                {
                  Icon: FiMail,
                  href: "mailto:jerlin.rose.v@gmail.com",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-neon-cyan hover:neon-glow-blue transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground font-mono">
              © 2026 — Crafted with neural precision
            </p>
          </div>
        </div>

        <a
          href="#home"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full gradient-bg flex items-center justify-center neon-glow-purple z-40 hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <FiArrowUp className="text-primary-foreground" />
        </a>
      </footer>
    </>
  );
}

function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>

      <input
        required
        {...props}
        className="w-full glass rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
    </div>
  );
}