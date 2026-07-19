import { motion } from 'framer-motion';
import { Award, Clock, Target, Loader } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { certifications } from '../data/portfolio';

const statusConfig = {
  Preparing: { color: 'text-amber-400 bg-amber-400/10 border-amber-400/20', icon: Loader },
  Planned: { color: 'text-slate-400 bg-slate-400/10 border-slate-400/20', icon: Clock },
  'In Progress': { color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', icon: Target },
};

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="certifications" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="Certifications"
          subtitle="Investing in formal validation of my testing expertise."
        />

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const cfg = statusConfig[cert.status] || statusConfig['Planned'];
            const StatusIcon = cfg.icon;
            return (
              <motion.div
                key={cert.name}
                className="glass p-6 text-center group"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-indigo-500/12 to-purple-500/12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} className="text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 tracking-tight">{cert.name}</h3>
                <p className="text-[0.72rem] text-dark-muted mb-4">{cert.subtitle}</p>

                {cert.progress > 0 && (
                  <div className="mb-3">
                    <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${cert.progress}%` } : {}}
                        transition={{ duration: 1.3, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="text-[0.62rem] text-dark-muted mt-1.5 block font-medium">{cert.progress}% complete</span>
                  </div>
                )}

                <span className={`tag border ${cfg.color} inline-flex items-center gap-1`}>
                  <StatusIcon size={10} />
                  {cert.status}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
