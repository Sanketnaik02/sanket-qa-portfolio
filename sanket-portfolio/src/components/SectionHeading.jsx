import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight mb-4 leading-[1.1]">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-dark-muted text-[0.92rem] md:text-lg max-w-[540px] leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        className={`h-0.5 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-5 ${align === 'center' ? 'mx-auto' : ''}`}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}
