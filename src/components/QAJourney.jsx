import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { journey } from '../data/portfolio';

export default function QAJourney() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="journey" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="My QA Journey"
          subtitle="From curiosity-driven tester to structured quality engineer — every step built my testing mindset."
        />

        <div className="relative max-w-[680px] mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-6">
            {journey.map((step, i) => (
              <motion.div
                key={i}
                className="relative pl-14 md:pl-16"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Animated dot */}
                <motion.div
                  className="absolute left-[13px] md:left-[17px] top-5"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.4, type: 'spring', stiffness: 300 }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 relative">
                    <div className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping" style={{ animationDuration: `${2 + i * 0.5}s` }} />
                  </div>
                </motion.div>

                <div className="glass p-5 md:p-6 group">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-[0.7rem] font-bold text-indigo-400 bg-indigo-500/[0.08] px-2.5 py-1 rounded-lg tracking-wide">
                      {step.year}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-[0.82rem] text-dark-muted leading-relaxed mb-3">{step.description}</p>
                  <span className="text-[0.7rem] font-semibold text-purple-400 bg-purple-500/[0.08] px-2.5 py-1 rounded-lg">
                    {step.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
