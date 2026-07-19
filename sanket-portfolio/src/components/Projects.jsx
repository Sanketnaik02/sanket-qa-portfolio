import { motion } from 'framer-motion';
import { ExternalLink, Code2, Shield, Users, DollarSign, Zap } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

const featureIcons = [Shield, Users, DollarSign, Zap];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="Projects"
          subtitle="Personal projects built with a QA-first engineering mindset."
        />

        {projects.map((proj) => (
          <motion.div
            key={proj.name}
            className="glass overflow-hidden"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
              <div className="p-6 md:p-8 lg:p-10">
                <span className="tag bg-indigo-500/[0.06] text-indigo-300 border-indigo-500/12 mb-4 inline-block">SaaS Product</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">{proj.name}</h3>
                <p className="text-sm text-indigo-400 font-semibold mb-4">{proj.tagline}</p>
                <p className="text-[0.85rem] text-dark-muted leading-relaxed mb-5">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag bg-purple-500/[0.06] text-purple-300 border-purple-500/12">{t}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-7">
                  {proj.features.map((f, fi) => {
                    const Icon = featureIcons[fi] || Shield;
                    return (
                      <div key={f} className="flex items-center gap-2 text-xs text-dark-muted">
                        <Icon size={13} className="text-indigo-400 shrink-0" />
                        {f}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <a href={proj.liveUrl} className="btn-fill text-xs py-2.5 px-5">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={proj.githubUrl} className="btn-ghost text-xs py-2.5 px-5">
                    <Code2 size={14} /> Source Code
                  </a>
                </div>
              </div>

              {/* Mock UI */}
              <div className="relative bg-gradient-to-br from-indigo-500/[0.04] to-purple-500/[0.04] p-6 md:p-8 flex items-center justify-center min-h-[280px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.04),transparent_70%)]" />
                <motion.div
                  className="relative z-10 glass p-5 w-full max-w-[280px]"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[0.6rem] font-bold">S</div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">SplitMate</div>
                      <div className="text-[0.6rem] text-dark-muted">Dashboard</div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {['Recent Expenses', 'Group Settlements', 'Pending Dues'].map((item, j) => (
                      <div key={item} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] text-[0.68rem]">
                        <span className="text-dark-muted">{item}</span>
                        <span className={`font-semibold ${j === 2 ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {j === 2 ? '₹2,450' : '✓ Settled'}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
