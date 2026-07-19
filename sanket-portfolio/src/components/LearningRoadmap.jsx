import { motion } from 'framer-motion';
import { Check, Circle, ArrowRight, Loader } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { roadmap } from '../data/portfolio';

const phaseConfig = {
  completed: { color: 'from-emerald-500 to-green-500', ring: 'ring-emerald-500/15', icon: Check, label: 'Completed' },
  current: { color: 'from-indigo-500 to-purple-500', ring: 'ring-indigo-500/15', icon: Loader, label: 'In Progress' },
  upcoming: { color: 'from-slate-500 to-slate-600', ring: 'ring-slate-500/15', icon: Circle, label: 'Upcoming' },
};

export default function LearningRoadmap() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="roadmap" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="Learning Roadmap"
          subtitle="A structured path from manual testing mastery to automation engineering leadership."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {roadmap.map((phase, pi) => {
            const cfg = phaseConfig[phase.status];
            const PhaseIcon = cfg.icon;
            return (
              <motion.div
                key={phase.phase}
                className="glass p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: pi * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                {phase.status === 'current' && (
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
                )}

                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cfg.color} flex items-center justify-center ring-4 ${cfg.ring} shadow-lg`}>
                    <PhaseIcon size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">{phase.phase}</h3>
                    <span className="text-[0.68rem] text-dark-muted font-medium">{cfg.label}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {phase.items.map((item, ii) => (
                    <motion.div
                      key={item}
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: pi * 0.12 + ii * 0.04 + 0.2, duration: 0.35 }}
                    >
                      {phase.status === 'completed' ? (
                        <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                      ) : phase.status === 'current' ? (
                        <ArrowRight size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                      ) : (
                        <Circle size={14} className="text-slate-600 mt-0.5 shrink-0" />
                      )}
                      <span className={`text-[0.78rem] leading-relaxed ${phase.status === 'upcoming' ? 'text-dark-muted' : 'text-slate-300'}`}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
