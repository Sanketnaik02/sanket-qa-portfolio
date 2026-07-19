import { motion } from 'framer-motion';
import { Database, BarChart3, Shield, Zap, ArrowRight, TrendingUp } from 'lucide-react';
import { useInView, useCountUp } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { rmsProject } from '../data/portfolio';

const moduleIcons = [BarChart3, Database, Shield, Zap];

function MetricCard({ m, i, inView }) {
  const [ref, val] = useCountUp(m.value, 1800);
  return (
    <motion.div
      ref={ref}
      className="text-center p-5 rounded-2xl bg-white/[0.025] border border-white/[0.03] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="text-2xl md:text-3xl font-black gradient-text">{val}{m.suffix}</div>
        <div className="text-[0.68rem] text-dark-muted mt-1.5 font-medium">{m.label}</div>
      </div>
    </motion.div>
  );
}

export default function RMSDeepDive() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="rms" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="RMS Project Deep Dive"
          subtitle="Enterprise Risk Management System for Capital Markets — where precision meets scale."
        />

        {/* Overview card */}
        <motion.div
          className="glass p-6 md:p-8 mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3.5 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">{rmsProject.name}</h3>
              <p className="text-[0.72rem] text-dark-muted">{rmsProject.company} · {rmsProject.domain}</p>
            </div>
          </div>
          <p className="text-[0.85rem] text-dark-muted leading-relaxed">{rmsProject.description}</p>
        </motion.div>

        {/* Modules */}
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {rmsProject.modules.map((mod, i) => {
            const Icon = moduleIcons[i] || Zap;
            return (
              <motion.div
                key={mod.name}
                className="glass p-5 group"
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/15 transition-colors">
                    <Icon size={15} className="text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{mod.name}</h4>
                </div>
                <p className="text-[0.78rem] text-dark-muted leading-relaxed mb-3">{mod.description}</p>
                <div className="flex items-start gap-1.5">
                  <ArrowRight size={12} className="text-purple-400 mt-0.5 shrink-0" />
                  <span className="text-[0.72rem] text-purple-400 font-medium leading-relaxed">{mod.testFocus}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {rmsProject.metrics.map((m, i) => (
            <MetricCard key={m.label} m={m} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
