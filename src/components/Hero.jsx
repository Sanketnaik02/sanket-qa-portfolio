import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, FlaskConical, Sparkles } from 'lucide-react';
import { useInView, useCountUp } from '../hooks/useAnimations';
import { personal } from '../data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [tcRef, tc] = useCountUp(500, 2200);
  const [bugRef, bug] = useCountUp(200, 2200);
  const [apiRef, api] = useCountUp(80, 2200);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center pt-24 pb-12">
      <div className="container-main w-full">
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 lg:gap-16 items-center">

          {/* ── Left — Intro Content ── */}
          {/* order-last on mobile (photo first), order-first on lg (text left) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="order-last lg:order-first"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/[0.06] border border-indigo-500/10 text-indigo-400 text-[0.7rem] font-semibold tracking-widest uppercase mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to QA Opportunities
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-black leading-[1.06] tracking-tight mb-7"
            >
              <span className="text-white">QA Analyst </span>
              <span className="gradient-text">Building Reliable</span>
              <br />
              <span className="text-white">Software Experiences</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-dark-muted text-[0.95rem] md:text-lg max-w-xl leading-relaxed mb-9"
            >
              {personal.summary}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-9">
              <a href="#contact" className="btn-fill">
                <Sparkles size={15} />
                Get In Touch
              </a>
              <a href="#automation" className="btn-ghost">
                View Automation Lab
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-5">
              {[
                { icon: Briefcase, text: '3+ Years IT Experience', color: 'text-indigo-400' },
                { icon: FlaskConical, text: '80+ APIs Tested', color: 'text-purple-400' },
                { icon: MapPin, text: 'Mumbai, India', color: 'text-cyan-400' },
              ].map((p) => (
                <span key={p.text} className="flex items-center gap-1.5 text-xs text-dark-muted font-medium">
                  <p.icon size={14} className={p.color} />
                  {p.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Profile Photo Section ── */}
          {/* order-first on mobile (photo above), order-last on lg (photo right) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-last flex flex-col items-center"
          >
            {/* Profile Photo Card */}
            <div className="glass p-7 md:p-8 relative w-full max-w-sm">
              {/* Ambient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-[40px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Photo Container with soft glow ring */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative mb-6"
                >
                  {/* Animated glow ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-cyan-500/40 blur-md opacity-60" />
                  {/* Photo circle */}
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-[3px] border-white/10 shadow-xl shadow-indigo-500/10">
                    {!imgError ? (
                      <img
                        src="/profile.jpg"
                        alt="Sanket Naik — QA Analyst"
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-black">
                        SN
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Professional Info Card */}
                <div className="w-full text-center">
                  <h3 className="text-xl font-bold text-white tracking-tight mb-0.5">{personal.name}</h3>
                  <p className="text-sm text-indigo-400 font-semibold mb-5">{personal.role}</p>

                  {/* Info rows */}
                  <div className="space-y-2.5 mb-5 text-left">
                    {[
                      { label: 'Experience', value: '3+ Years IT Experience' },
                      { label: 'Company', value: 'Greeksoft Technologies' },
                      { label: 'Specialization', value: 'API Testing & Quality Engineering' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[0.7rem] text-dark-muted font-medium uppercase tracking-wider">{row.label}</span>
                        <span className="text-[0.8rem] text-white font-semibold">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {[
                      { ref: tcRef, val: tc, label: 'Test Cases' },
                      { ref: bugRef, val: bug, label: 'Bugs Found' },
                      { ref: apiRef, val: api, label: 'APIs Tested' },
                    ].map((s) => (
                      <div key={s.label} ref={s.ref} className="text-center p-3 rounded-2xl bg-white/[0.03] border border-white/[0.03]">
                        <div className="text-lg font-extrabold gradient-text">{s.val}+</div>
                        <div className="text-[0.6rem] text-dark-muted mt-1 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Availability badge */}
                  <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[0.72rem] text-emerald-400 font-semibold">Available for QA & Automation Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-indigo-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
