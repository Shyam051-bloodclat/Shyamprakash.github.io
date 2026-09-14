import React, { useEffect, useState } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  EDUCATION_LIST
} from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const generatePlainTextResume = () => {
    return `SHYAMPRAKASH K
AI AND ML DEVELOPER
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL OBJECTIVE:
"${PERSONAL_INFO.objective}"

EDUCATION:
${EDUCATION_LIST.map(e => `* ${e.degree} — ${e.institution} (${e.year}) | ${e.gradeType}: ${e.grade}`).join('\n')}

PRACTICAL EXPERIENCE:
${EXPERIENCES.map(exp => `* ${exp.role} — ${exp.company} (${exp.period}${exp.location ? `, ${exp.location}` : ''})\n  ${exp.points.join('\n  ')}`).join('\n\n')}

PROJECTS:
${PROJECTS.map(p => `* ${p.name}\n  Category: ${p.category}\n  Technologies: ${p.technologies.join(', ')}\n  Description: ${p.description}\n  Key Features:\n  - ${p.keyFeatures.join('\n  - ')}`).join('\n\n')}

TECHNICAL SKILLS:
${SKILL_CATEGORIES.map(c => `* ${c.name}: ${c.skills.join(', ')}`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `* ${c.title}${c.issuer ? ` (${c.issuer})` : ''}`).join('\n')}
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatePlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextResume();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shyamprakash_K_AI_ML_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-white">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span id="resume-title" className="text-sm font-bold tracking-tight">
              Shyamprakash K — Resume View &amp; Download
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-download-txt-btn"
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              id="resume-copy-btn"
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0d1322] text-slate-200 font-sans space-y-8">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-semibold mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs text-slate-400 mt-4 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.linkedin}
              </span>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 pb-1 border-b border-slate-800">
              Professional Objective
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{PERSONAL_INFO.objective}&rdquo;
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 pb-1 border-b border-slate-800">
              Practical Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} <span className="font-normal text-slate-400">— {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-cyan-300">
                      {exp.period} {exp.location && `| ${exp.location}`}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 pb-1 border-b border-slate-800">
              Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {proj.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-300">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    <strong className="text-slate-300">Technologies:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 pb-1 border-b border-slate-800">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="font-bold text-white block mb-1">{cat.name}:</span>
                  <span className="text-slate-300 font-mono">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="text-right font-mono text-slate-300">
                    <span>{edu.year}</span> | <span className="text-cyan-300 font-semibold">{edu.gradeType}: {edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.id}>
                  <span className="font-medium text-white">{cert.title}</span>
                  {cert.issuer && <span className="text-slate-400 font-mono"> — {cert.issuer}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
