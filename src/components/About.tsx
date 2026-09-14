import React from 'react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData.ts';
import { MapPin, CheckCircle2, ShieldCheck, Sparkles, Code2, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 id="about-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            An engineering student focused on turning modern AI models and data frameworks into functional software.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main narrative card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Practical AI Solutions for Real-World Problems
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
                I am an Artificial Intelligence &amp; Machine Learning engineering student dedicated to building practical AI systems. My work focuses on creating tangible, working applications using modern foundational models, clean backend architecture, and robust APIs.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Through hands-on projects, I have developed solutions including an <strong>agentic AI travel planning assistant</strong> that leverages multi-agent coordination with RAG and real-time APIs, as well as an <strong>interactive AI tutoring platform for R programming</strong> combining local LLM reasoning with live code execution.
              </p>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Core Experience &amp; Specialization Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_HIGHLIGHTS.coreInterests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/70 text-slate-200 text-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side card: Internship exposure & profile attributes */}
          <div className="lg:col-span-5 space-y-5">
            {/* Internship Exposure Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Internship Exposure
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Beyond AI and machine learning development, I have gained valuable foundational exposure to complementary computing domains through technical internships:
              </p>
              <div className="space-y-2.5">
                {ABOUT_HIGHLIGHTS.internshipExposure.map((exposure) => (
                  <div
                    key={exposure}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-sm font-medium text-slate-200">{exposure}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Highlights Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-blue-950/20 border border-cyan-500/20">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Technical Approach
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Focused on combining Python-driven intelligence, structured databases (SQL/SQLite/MySQL), and RESTful APIs to deliver reliable, interactive AI tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
