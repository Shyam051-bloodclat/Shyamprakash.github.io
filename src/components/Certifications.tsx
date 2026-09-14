import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData.ts';
import { Award, CheckCircle2, BookOpen } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 id="certifications-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Professional course certifications completed in machine learning, Python programming, and data science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {cert.title}
                </h3>

                {cert.issuer ? (
                  <p className="text-xs font-mono text-cyan-300 flex items-center gap-1.5 mb-4">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.issuer}</span>
                  </p>
                ) : (
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    Technical Certification
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Curriculum</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
