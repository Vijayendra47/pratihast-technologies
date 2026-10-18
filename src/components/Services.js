export default function Services() {
  return (
    <section id="services" class="py-24 px-6 border-t border-slate-900 bg-gradient-to-b from-cyberDark to-black">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 text-center md:text-left">
          <p class="text-xs font-bold uppercase tracking-widest text-cyberCyan mb-2">Capabilities Matrix</p>
          <h2 class="text-3xl font-bold text-white tracking-tight sm:text-4xl">Core Corporate Divisions</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Full Stack */}
          <div class="group bg-cyberCard border border-slate-800 p-8 rounded-xl hover:border-cyberCyan/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="text-cyberCyan text-xs font-bold tracking-widest uppercase mb-4 opacity-60">Division // 01</div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyberCyan transition-colors">Enterprise Full-Stack Architecture</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">Designing reactive web systems and robust microservices built for heavy concurrent data workflows.</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">Next.js</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">Node.js</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">PostgreSQL</span>
            </div>
          </div>

          {/* Card 2: VAPT & SOC */}
          <div class="group bg-cyberCard border border-slate-800 p-8 rounded-xl hover:border-cyberCyan/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="text-cyberCyan text-xs font-bold tracking-widest uppercase mb-4 opacity-60">Division // 02</div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyberCyan transition-colors">VAPT, SOC & VLSI Security</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">Comprehensive web app pentesting, active Security Operations Center tracking, and hardware/silicon security auditing.</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">OWASP Top 10</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">SIEM/SOC</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">Hardware VAPT</span>
            </div>
          </div>

          {/* Card 3: Cloud */}
          <div class="group bg-cyberCard border border-slate-800 p-8 rounded-xl hover:border-cyberCyan/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="text-cyberCyan text-xs font-bold tracking-widest uppercase mb-4 opacity-60">Division // 03</div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyberCyan transition-colors">Cloud & Multi-Tenant Networks</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">Architecting resilient network pathways, cloud routers, storage frameworks, and secure isolated VPC networks.</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">AWS Cloud</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">Google Cloud</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">VPC Topology</span>
            </div>
          </div>

          {/* Card 4: DevOps */}
          <div class="group bg-cyberCard border border-slate-800 p-8 rounded-xl hover:border-cyberCyan/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="text-cyberCyan text-xs font-bold tracking-widest uppercase mb-4 opacity-60">Division // 04</div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyberCyan transition-colors">DevOps Infrastructure as Code</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">Deploying zero-friction automated deployments, declarative staging architecture, and robust CI/CD tracks.</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">Docker / K8s</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">Terraform</span>
              <span class="text-xs bg-cyberDark px-3 py-1 rounded text-slate-300 font-mono">GitHub Actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
