import { motion } from 'framer-motion';
import { FlaskConical, Check, Clock, Play, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { automationLab } from '../data/portfolio';

const statusConfig = {
  'In Progress': { color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: Play },
  'Planned': { color: 'bg-slate-500/10 text-slate-400 border-slate-500/20', icon: Clock },
};

export default function AutomationLab() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="automation" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="QA Automation Lab"
          subtitle="Building production-grade test frameworks with Playwright + TypeScript."
        />

        {/* Flagship banner */}
        <motion.div
          className="glass p-6 md:p-8 mb-5 relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <FlaskConical size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{automationLab.name}</h3>
                <span className="text-[0.65rem] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">FLAGSHIP PROJECT</span>
              </div>
            </div>
            <p className="text-[0.85rem] text-dark-muted leading-relaxed mb-4 max-w-2xl">{automationLab.description}</p>
            <div className="flex flex-wrap gap-2">
              {automationLab.stack.map((t) => (
                <span key={t} className="tag bg-indigo-500/[0.06] text-indigo-300 border-indigo-500/12">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {automationLab.projects.map((proj, i) => {
            const cfg = statusConfig[proj.status] || statusConfig['Planned'];
            const StatusIcon = cfg.icon;
            return (
              <motion.div
                key={proj.name}
                className="glass p-5 flex flex-col group"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[0.82rem] font-bold text-white tracking-tight">{proj.name}</h4>
                  <span className={`tag ${cfg.color} border flex items-center gap-1`}>
                    <StatusIcon size={10} />
                    {proj.status}
                  </span>
                </div>
                <p className="text-[0.75rem] text-dark-muted leading-relaxed mb-4 flex-1">{proj.description}</p>
                <div className="space-y-2">
                  {proj.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[0.72rem] text-slate-400">
                      <Check size={12} className="text-emerald-400 shrink-0" />
                      {f}
                    </div>
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
