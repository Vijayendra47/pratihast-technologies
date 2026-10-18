export default function Team() {
  return (
    <section id="team" class="py-24 px-6 bg-cyberDark border-t border-slate-900">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-cyberCyan mb-2">Expert Council</p>
          <h2 class="text-3xl font-bold text-white tracking-tight sm:text-4xl">Engineering Leadership</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Executive Profile 01 */}
          <div class="bg-cyberCard border border-slate-800 p-8 rounded-xl relative overflow-hidden group hover:border-cyberCyan/30 transition-all">
            <div class="absolute top-0 right-0 bg-cyberCyan/10 text-cyberCyan text-[10px] font-mono uppercase px-3 py-1 rounded-bl">Director</div>
            <div class="flex items-start space-x-4">
              <div class="w-14 h-14 rounded-lg bg-gradient-to-br from-cyberCyan to-cyberBlue flex items-center justify-center text-black font-bold text-xl shrink-0">
                VP
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Er. Vijayendra Pratihast</h3>
                <p class="text-cyberCyan text-xs font-medium tracking-wide uppercase mt-1">VLSI, VAPT & SOC Specialist</p>
                <p class="text-slate-400 text-sm mt-4 leading-relaxed">
                  Supervises systemic infrastructure hardening. Focuses on hardware-level logic gates (VLSI), multi-layer offensive penetration testing (VAPT), and managing defensive SIEM environments within the Security Operations Center (SOC).
                </p>
              </div>
            </div>
          </div>

          {/* Executive Profile 02 */}
          <div class="bg-cyberCard border border-slate-800 p-8 rounded-xl relative overflow-hidden group hover:border-cyberBlue/30 transition-all">
            <div class="absolute top-0 right-0 bg-cyberBlue/20 text-cyberBlue text-[10px] font-mono uppercase px-3 py-1 rounded-bl">Principal</div>
            <div class="flex items-start space-x-4">
              <div class="w-14 h-14 rounded-lg bg-gradient-to-br from-cyberBlue to-indigo-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                RK
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Er. Raj Kushwaha</h3>
                <p class="text-cyberBlue text-xs font-medium tracking-wide uppercase mt-1">Cloud Infrastructure Specialist</p>
                <p class="text-slate-400 text-sm mt-4 leading-relaxed">
                  Leads multi-cloud clustering frameworks. Specializes in designing robust data distributions, microservice mesh automation, elastic network provisioning, and programmatic infrastructure blueprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
