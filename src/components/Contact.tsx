import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitted'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }
    setSubmissionStatus('submitted');
  };

  const handleSendViaMailClient = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Shyamprakash,\n\n${formState.message}\n\nFrom: ${formState.name}\nEmail: ${formState.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 id="contact-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Interested in discussing AI engineering projects, full-time opportunities, or technical internships? Reach out directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-5">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] text-slate-400 font-mono uppercase">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/60 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-mono uppercase">Phone</p>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/60 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    id="contact-linkedin-link"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-medium">LinkedIn</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      shyam-prakashk
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>

                  <a
                    id="contact-github-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-medium">GitHub</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {PERSONAL_INFO.github}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to connect or initiate a conversation.
              </p>

              {submissionStatus === 'submitted' ? (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/40 text-left space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Message Payload Prepared
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        To maintain transparent communication without a backend email server, your message has been compiled for direct delivery.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                    <p><strong className="text-cyan-400">Sender:</strong> {formState.name} ({formState.email})</p>
                    <p><strong className="text-cyan-400">Message:</strong> {formState.message}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={handleSendViaMailClient}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email Client</span>
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `From: ${formState.name} <${formState.email}>\n\n${formState.message}`
                        );
                        alert('Message copied to clipboard! You can paste it into any messaging tool.');
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Message</span>
                    </button>

                    <button
                      onClick={() => setSubmissionStatus('idle')}
                      className="text-xs text-slate-400 hover:text-slate-200 underline ml-auto"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Share details about your project, team opportunity, or discussion topic..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 transition-colors resize-y"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                      <span>Configurable client-side transmission</span>
                    </div>

                    <button
                      id="contact-submit-button"
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-sm shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
