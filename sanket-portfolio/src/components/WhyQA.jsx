import { motion } from 'framer-motion';
import { Search, ShieldCheck, LayoutList, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { whyQA } from '../data/portfolio';

const iconMap = {
  magnifier: Search,
  shield: ShieldCheck,
  chart: LayoutList,
  rocket: Rocket,
};

const gradients = [
  'from-indigo-500/15 to-blue-500/10',
  'from-purple-500/15 to-pink-500/10',
  'from-cyan-500/15 to-teal-500/10',
  'from-amber-500/15 to-orange-500/10',
];

export default function WhyQA() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="why-qa" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="Why QA"
          subtitle="Quality assurance is not just testing — it is a discipline of thinking critically about software."
        />

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {whyQA.map((item, i) => {
            const Icon = iconMap[item.icon] || Search;
            return (
              <motion.div
                key={item.title}
                className="glass p-6 md:p-7 group relative"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                {/* Number accent */}
                <span className="absolute top-5 right-6 text-[3.5rem] font-black text-white/[0.02] leading-none select-none">
                  0{i + 1}
                </span>

                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[0.82rem] text-dark-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
