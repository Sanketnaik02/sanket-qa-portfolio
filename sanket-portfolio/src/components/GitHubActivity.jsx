import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Star, GitFork, Clock, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { githubRepos } from '../data/portfolio';

const langColors = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-amber-400',
  SQL: 'bg-purple-400',
};

export default function GitHubActivity() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const contributionData = useMemo(() =>
    Array.from({ length: 52 }, () =>
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    ), []);

  return (
    <section id="github" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open-source contributions, QA frameworks, and learning projects."
        />

        {/* Contribution graph */}
        <motion.div
          className="glass p-6 md:p-8 mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold text-white tracking-tight">Contribution Graph</h3>
            <span className="text-[0.68rem] text-dark-muted font-medium">Last 12 months</span>
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px] min-w-max">
              {contributionData.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((count, di) => (
                    <motion.div
                      key={`${wi}-${di}`}
                      className="w-[11px] h-[11px] rounded-[3px]"
                      style={{
                        background: count === 0 ? 'rgba(255,255,255,0.025)' :
                          count === 1 ? 'rgba(99,102,241,0.18)' :
                          count === 2 ? 'rgba(99,102,241,0.32)' :
                          count === 3 ? 'rgba(99,102,241,0.52)' :
                          'rgba(99,102,241,0.78)',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (wi * 7 + di) * 0.0008 + 0.3, duration: 0.12 }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 text-[0.62rem] text-dark-muted">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                className="w-[11px] h-[11px] rounded-[3px]"
                style={{
                  background: l === 0 ? 'rgba(255,255,255,0.025)' :
                    `rgba(99,102,241,${0.18 + l * 0.18})`,
                }}
              />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Repos */}
        <div className="grid sm:grid-cols-2 gap-4">
          {githubRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href="#"
              className="glass p-5 group block"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <Code2 size={15} className="text-indigo-400" />
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">{repo.name}</h4>
                </div>
                <ExternalLink size={13} className="text-dark-muted group-hover:text-indigo-400 transition-colors shrink-0" />
              </div>
              <p className="text-[0.78rem] text-dark-muted mb-3 leading-relaxed">{repo.description}</p>
              <div className="flex items-center gap-4 text-[0.68rem]">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${langColors[repo.language] || 'bg-slate-400'}`} />
                  <span className="text-dark-muted">{repo.language}</span>
                </span>
                <span className="flex items-center gap-1 text-dark-muted">
                  <Star size={10} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1 text-dark-muted">
                  <GitFork size={10} /> {repo.forks}
                </span>
                <span className="flex items-center gap-1 text-dark-muted ml-auto">
                  <Clock size={10} /> {repo.updated}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
