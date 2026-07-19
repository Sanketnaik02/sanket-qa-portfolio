import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, Code2, Send, MapPin, ExternalLink, Heart, ArrowUp } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import SectionHeading from './SectionHeading';
import { personal } from '../data/portfolio';

const socials = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Link2, label: 'LinkedIn', value: personal.linkedin, href: '#' },
  { icon: Code2, label: 'GitHub', value: personal.github, href: '#' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <section id="contact" className="section-py relative" ref={ref}>
        <div className="container-main">
          <SectionHeading
            title="Get In Touch"
            subtitle="Open to QA roles, testing collaborations, and conversations about quality engineering."
          />

          <div className="grid lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {/* Social cards */}
            <motion.div
              className="lg:col-span-2 space-y-3"
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="glass p-4 flex items-center gap-3.5 group block hover:border-indigo-500/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/12 to-purple-500/12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <s.icon size={16} className="text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.62rem] text-dark-muted mb-0.5 font-medium uppercase tracking-wider">{s.label}</div>
                    <div className="text-[0.82rem] text-slate-300 truncate">{s.value}</div>
                  </div>
                  <ExternalLink size={12} className="text-dark-muted group-hover:text-indigo-400 transition-colors shrink-0" />
                </a>
              ))}

              <div className="glass p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/12 to-purple-500/12 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-[0.62rem] text-dark-muted mb-0.5 font-medium uppercase tracking-wider">Location</div>
                  <div className="text-[0.82rem] text-slate-300">{personal.location}</div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.form
              className="lg:col-span-3 glass p-6 md:p-7"
              onSubmit={submit}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="text-[0.68rem] text-dark-muted mb-1.5 block font-semibold uppercase tracking-wider">Name</label>
                  <input
                    className="input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] text-dark-muted mb-1.5 block font-semibold uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="mb-3.5">
                <label className="text-[0.68rem] text-dark-muted mb-1.5 block font-semibold uppercase tracking-wider">Subject</label>
                <input
                  className="input"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                />
              </div>
              <div className="mb-5">
                <label className="text-[0.68rem] text-dark-muted mb-1.5 block font-semibold uppercase tracking-wider">Message</label>
                <textarea
                  className="input h-28 resize-none"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn-fill w-full justify-center"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {sent ? '✓ Message Sent!' : <><Send size={15} /> Send Message</>}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-1.5 text-xs text-dark-muted">
              <span>Built with</span>
              <Heart size={12} className="text-red-400 fill-red-400" />
              <span>by</span>
              <span className="gradient-text font-bold">{personal.name}</span>
            </div>

            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-dark-muted hover:text-white transition-all duration-200"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>

            <motion.button
              onClick={scrollUp}
              className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500/12 to-purple-500/12 border border-indigo-500/12 text-indigo-400 hover:text-white transition-all duration-200"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
          <div className="text-center mt-6 text-[0.65rem] text-dark-muted/50">
            © {new Date().getFullYear()} Sanket Naik. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
