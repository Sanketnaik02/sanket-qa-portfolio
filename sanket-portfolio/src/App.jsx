import { useState, useEffect } from 'react';
import AnimatedBg from './components/AnimatedBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QAJourney from './components/QAJourney';
import WhyQA from './components/WhyQA';
import CoreExpertise from './components/CoreExpertise';
import RMSDeepDive from './components/RMSDeepDive';
import AutomationLab from './components/AutomationLab';
import Artifacts from './components/Artifacts';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import LearningRoadmap from './components/LearningRoadmap';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light', !dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-dark-bg text-slate-300 noise' : 'bg-light-bg text-slate-700'}`}>
      <AnimatedBg />
      <Navbar dark={dark} setDark={setDark} />
      <main className="relative z-10">
        <Hero />
        <div className="glow-line" />
        <QAJourney />
        <div className="glow-line" />
        <WhyQA />
        <div className="glow-line" />
        <CoreExpertise />
        <div className="glow-line" />
        <RMSDeepDive />
        <div className="glow-line" />
        <AutomationLab />
        <div className="glow-line" />
        <Artifacts />
        <div className="glow-line" />
        <Projects />
        <div className="glow-line" />
        <Certifications />
        <div className="glow-line" />
        <LearningRoadmap />
        <div className="glow-line" />
        <GitHubActivity />
        <div className="glow-line" />
        <Contact />
      </main>
    </div>
  );
}
