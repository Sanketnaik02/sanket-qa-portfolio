import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, ChevronRight } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Nav pill */}
      <div className="mx-auto max-w-5xl px-4 pt-3 md:pt-4">
        <nav
          className={`flex items-center justify-between h-14 px-4 md:px-5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-dark-card/80 backdrop-blur-2xl border border-white/[0.05] shadow-lg shadow-black/20'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group relative z-10">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[0.65rem] font-extrabold shadow-md shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
              SN
            </div>
            <span className="font-bold text-white text-sm hidden sm:block tracking-tight">Sanket Naik</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[0.78rem] text-dark-muted hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04] font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-dark-muted hover:text-white transition-all duration-200"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="#contact" className="btn-fill text-[0.78rem] py-[0.55rem] px-4 rounded-xl">
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button onClick={() => setDark(!dark)} className="p-2 rounded-xl bg-white/[0.04] text-dark-muted">
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-xl bg-white/[0.04] text-dark-muted">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-[4.25rem] bg-dark-bg/[0.96] backdrop-blur-3xl z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-main flex flex-col pt-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="flex items-center justify-between py-4 text-lg text-slate-300 hover:text-white border-b border-white/[0.04] font-semibold tracking-tight"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                  <ChevronRight size={16} className="text-dark-muted" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn-fill mt-8 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setOpen(false)}
              >
                <Download size={15} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
