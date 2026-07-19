import { useMemo } from 'react';
import { motion } from 'framer-motion';

function Orb({ size, color, x, y, driftX, driftY, dur }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(60px)',
      }}
      animate={{ x: [0, driftX, 0], y: [0, driftY, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function AnimatedBg() {
  const orbs = useMemo(() => [
    { size: 600, color: 'rgba(99,102,241,0.08)', x: -10, y: -8, driftX: 50, driftY: 30, dur: 24 },
    { size: 450, color: 'rgba(139,92,246,0.06)', x: 70, y: 30, driftX: -40, driftY: -30, dur: 30 },
    { size: 350, color: 'rgba(6,182,212,0.04)', x: 20, y: 75, driftX: 30, driftY: -35, dur: 22 },
    { size: 280, color: 'rgba(99,102,241,0.03)', x: 85, y: 70, driftX: -25, driftY: 20, dur: 26 },
  ], []);

  const gridDots = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i % 10) * 10 + 5,
      y: Math.floor(i / 10) * 33 + 16,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Gradient orbs */}
      {orbs.map((o, i) => (
        <Orb key={i} {...o} />
      ))}

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        {gridDots.map((d) => (
          <div
            key={d.id}
            className="absolute w-[2px] h-[2px] rounded-full bg-indigo-400"
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
          />
        ))}
      </div>

      {/* Horizontal glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />
    </div>
  );
}
