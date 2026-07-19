import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Bug, Zap, Database, CheckCircle2, AlertCircle, ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { testArtifacts } from '../data/portfolio';

const tabs = [
  { id: 'tc', label: 'Test Cases', icon: FileText },
  { id: 'bugs', label: 'Bug Reports', icon: Bug },
  { id: 'api', label: 'API Testing', icon: Zap },
  { id: 'sql', label: 'SQL Validation', icon: Database },
];

const methodColors = {
  GET: 'text-emerald-400 bg-emerald-400/10',
  POST: 'text-blue-400 bg-blue-400/10',
  PUT: 'text-amber-400 bg-amber-400/10',
  DELETE: 'text-red-400 bg-red-400/10',
};

const severityColors = {
  Critical: 'bg-red-400/10 text-red-400 border-red-400/20',
  Major: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
};

const statusIcon = {
  Fixed: <CheckCircle2 size={12} className="text-emerald-400" />,
  Open: <AlertCircle size={12} className="text-amber-400" />,
};

function TestCases() {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-dark-muted border-b border-white/[0.04]">
            <th className="pb-3 font-semibold pr-4 text-[0.68rem] uppercase tracking-wider">ID</th>
            <th className="pb-3 font-semibold pr-4 text-[0.68rem] uppercase tracking-wider">Module</th>
            <th className="pb-3 font-semibold pr-4 text-[0.68rem] uppercase tracking-wider">Test Case</th>
            <th className="pb-3 font-semibold pr-4 text-[0.68rem] uppercase tracking-wider">Priority</th>
            <th className="pb-3 font-semibold text-[0.68rem] uppercase tracking-wider">Type</th>
          </tr>
        </thead>
        <tbody>
          {testArtifacts.testCases.map((tc) => (
            <tr key={tc.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
              <td className="py-3 pr-4 text-indigo-400 font-mono whitespace-nowrap text-[0.72rem]">{tc.id}</td>
              <td className="py-3 pr-4 text-dark-muted whitespace-nowrap">{tc.module}</td>
              <td className="py-3 pr-4 text-slate-300">{tc.title}</td>
              <td className="py-3 pr-4">
                <span className={`tag border ${
                  tc.priority === 'Critical' ? 'bg-red-400/8 text-red-400 border-red-400/15' :
                  tc.priority === 'High' ? 'bg-amber-400/8 text-amber-400 border-amber-400/15' :
                  'bg-blue-400/8 text-blue-400 border-blue-400/15'
                }`}>{tc.priority}</span>
              </td>
              <td className="py-3 text-dark-muted">{tc.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BugReports() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {testArtifacts.bugs.map((b) => (
        <div key={b.id} className="rounded-2xl border border-white/[0.04] overflow-hidden">
          <button
            className="w-full flex items-center gap-3 p-4 hover:bg-white/[0.02] transition-colors text-left"
            onClick={() => setOpen(open === b.id ? null : b.id)}
          >
            <span className="text-[0.68rem] font-mono text-indigo-400 shrink-0">{b.id}</span>
            <span className={`tag border shrink-0 ${severityColors[b.severity]}`}>{b.severity}</span>
            <span className="text-[0.68rem] text-dark-muted shrink-0">{b.priority}</span>
            <span className="text-xs text-slate-300 flex-1 min-w-0 truncate">{b.title}</span>
            <div className="flex items-center gap-1.5 shrink-0">
              {statusIcon[b.status]}
              <span className="text-[0.68rem] text-dark-muted">{b.status}</span>
              {open === b.id ? <ChevronDown size={14} className="text-dark-muted" /> : <ChevronRight size={14} className="text-dark-muted" />}
            </div>
          </button>
          <AnimatePresence>
            {open === b.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 border-t border-white/[0.04]">
                  <p className="text-xs text-dark-muted mt-3 mb-3 leading-relaxed">{b.description}</p>
                  <div className="text-[0.68rem] text-dark-muted mb-1.5 font-semibold uppercase tracking-wider">Steps to Reproduce</div>
                  <ol className="list-decimal list-inside space-y-0.5">
                    {b.steps.map((s, i) => <li key={i} className="text-xs text-slate-400 leading-relaxed">{s}</li>)}
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function APITests() {
  return (
    <div className="space-y-2">
      {testArtifacts.apiTests.map((api, i) => (
        <motion.div
          key={i}
          className="flex flex-wrap items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04 }}
        >
          <span className={`text-[0.65rem] font-bold px-2.5 py-0.5 rounded-lg ${methodColors[api.method]}`}>
            {api.method}
          </span>
          <code className="text-xs text-slate-300 font-mono flex-1 min-w-0 truncate">{api.endpoint}</code>
          <span className={`text-[0.68rem] font-bold ${api.status < 300 ? 'text-emerald-400' : 'text-red-400'}`}>
            {api.status}
          </span>
          <span className="text-[0.68rem] text-dark-muted hidden sm:block">{api.time}</span>
          <span className="text-[0.68rem] text-dark-muted hidden md:block">{api.description}</span>
        </motion.div>
      ))}
    </div>
  );
}

function SQLQueries() {
  const [copied, setCopied] = useState(null);
  const handleCopy = (q, i) => {
    navigator.clipboard?.writeText(q);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <div className="space-y-3">
      {testArtifacts.sqlQueries.map((sql, i) => (
        <motion.div
          key={i}
          className="p-4 rounded-2xl bg-white/[0.02] group relative"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <code className="text-xs text-indigo-300 font-mono leading-relaxed break-all">{sql.query}</code>
            <button
              onClick={() => handleCopy(sql.query, i)}
              className="text-dark-muted hover:text-indigo-400 transition-colors shrink-0 mt-0.5 p-1 rounded-lg hover:bg-white/[0.05]"
            >
              {copied === i ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            </button>
          </div>
          <div className="flex items-center gap-3 text-[0.68rem] text-dark-muted">
            <span>{sql.purpose}</span>
            <span className="text-emerald-400 font-semibold">{sql.rows} rows affected</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const panels = { tc: TestCases, bugs: BugReports, api: APITests, sql: SQLQueries };

export default function Artifacts() {
  const [tab, setTab] = useState('tc');
  const [ref, inView] = useInView({ threshold: 0.05 });
  const Panel = panels[tab];

  return (
    <section id="artifacts" className="section-py relative" ref={ref}>
      <div className="container-main">
        <SectionHeading
          title="Testing Artifacts"
          subtitle="Real examples of test cases, bug reports, API validations, and SQL checks from production work."
        />

        <motion.div
          className="glass overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* Tab bar */}
          <div className="flex overflow-x-auto border-b border-white/[0.04] scrollbar-none">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 px-5 md:px-6 py-4 text-xs font-semibold whitespace-nowrap transition-all duration-200 border-b-2 shrink-0 ${
                  tab === t.id
                    ? 'text-indigo-400 border-indigo-400 bg-indigo-500/[0.03]'
                    : 'text-dark-muted border-transparent hover:text-slate-300 hover:bg-white/[0.02]'
                }`}
              >
                <t.icon size={14} />
                {t.label}
              </button>
            ))}
          </div>
          <div className="p-5 md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Panel />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
