import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ["var(--neon-blue)", "var(--neon-purple)", "var(--neon-cyan)"];
    const arr = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]" style={{ background: "var(--neon-purple)" }} />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[140px]" style={{ background: "var(--neon-blue)" }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: "var(--neon-cyan)" }} />
    </div>
  );
}
