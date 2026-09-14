/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Experience } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Education } from './components/Education.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with AI canvas & CTA */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Projects Section (VoyagrBot & AI Tutor for R) */}
        <Projects />

        {/* Certifications */}
        <Certifications />

        {/* Education Timeline */}
        <Education />

        {/* Contact Section & Form */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
