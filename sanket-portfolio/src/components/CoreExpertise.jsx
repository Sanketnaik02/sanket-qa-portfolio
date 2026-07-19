import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { coreExpertise } from '../data/portfolio';

function SkillBar({ name, level, delay, inView }) {
  return (
    <div className="mb-3.5 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[0.78rem] font-medium text-slate-300">{name}</span>
        <span className="text-[0.65rem] font-bold text-dark-muted tabular-nums">{level}%</span>
      </div>
      <div className="h-[5px] rounded-full bg-white/[0.04] overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}

export default function CoreExpertise() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="expertise" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="Core QA Expertise"
          subtitle="A disciplined toolkit built through real-world testing in financial systems."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {coreExpertise.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className="glass p-6"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-[0.92rem] font-bold text-white tracking-tight">{cat.category}</h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  delay={ci * 0.1 + si * 0.06 + 0.3}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
