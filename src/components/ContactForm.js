'use client'; // Required for states & interactive event handling in Next.js App Router
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ clientName: '', contactInfo: '', servicePipeline: 'Full-Stack Custom Development', projectBrief: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ clientName: '', contactInfo: '', servicePipeline: 'Full-Stack Custom Development', projectBrief: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" class="py-24 px-6 border-t border-slate-900 bg-cyberDark relative">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white tracking-tight">Initiate Technical Consultation</h2>
          <p class="text-sm text-slate-400 mt-2">Submit your operational matrix to connect with our engineering leadership.</p>
        </div>

        <form onSubmit={handleSubmit} class="bg-cyberCard border border-slate-800 p-8 rounded-xl space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Corporate Entity / Name</label>
              <input type="text" required value={formData.clientName} onChange={(e) => setFormData({...formData, clientName: e.target.value})} class="w-full bg-cyberDark border border-slate-800 focus:border-cyberCyan rounded px-4 py-3 text-sm text-white outline-none transition-colors" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Contact Link (Email/Phone)</label>
              <input type="text" required placeholder="e.g. +91 / name@domain.com" value={formData.contactInfo} onChange={(e) => setFormData({...formData, contactInfo: e.target.value})} class="w-full bg-cyberDark border border-slate-800 focus:border-cyberCyan rounded px-4 py-3 text-sm text-white outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Target Requirement</label>
            <select value={formData.servicePipeline} onChange={(e) => setFormData({...formData, servicePipeline: e.target.value})} class="w-full bg-cyberDark border border-slate-800 focus:border-cyberCyan rounded px-4 py-3 text-sm text-white outline-none transition-colors">
              <option>Full-Stack Custom Development</option>
              <option>VAPT Audit & SOC Monitoring Integration</option>
              <option>VLSI Hardware Security Consultation</option>
              <option>Enterprise Cloud Infrastructure Architecture</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Scope of Operations Brief</label>
            <textarea rows="4" placeholder="Describe the deployment specs..." value={formData.projectBrief} onChange={(e) => setFormData({...formData, projectBrief: e.target.value})} class="w-full bg-cyberDark border border-slate-800 focus:border-cyberCyan rounded px-4 py-3 text-sm text-white outline-none transition-colors"></textarea>
          </div>

          <button type="submit" disabled={status === 'transmitting'} class="w-full bg-gradient-to-r from-cyberCyan to-cyberBlue text-black font-bold py-4 rounded text-xs uppercase tracking-widest shadow-md hover:opacity-95 transition-opacity disabled:opacity-50">
            {status === 'transmitting' ? 'TRANSMITTING MATRIX...' : 'TRANSMIT ARCHITECTURE REQUEST'}
          </button>

          {status === 'success' && <p class="text-xs text-cyberCyan text-center mt-2">✓ Transmission Verified. Our engineers will reach out shortly.</p>}
          {status === 'error' && <p class="text-xs text-red-400 text-center mt-2">⚠ Transmission Interrupted. Please trace connection or email direct.</p>}
        </form>
      </div>
    </section>
  );
}
