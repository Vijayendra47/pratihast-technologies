export default function Hero() {
  return (
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
      {/* Abstract Cyber Grid Background Effect */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyberCyan/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyberBlue/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="max-w-4xl text-center relative z-10 space-y-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyberCyan/30 bg-cyberCyan/5 text-cyberCyan text-xs font-semibold tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-cyberCyan animate-pulse"></span> Next-Gen Enterprise Engineering
        </div>
        
        <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Securing & Scaling <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyberCyan to-cyberBlue">
            Mission-Critical Infrastructure
          </span>
        </h1>
        
        <p class="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We engineer scalable full-stack applications, harden firmware via silicon-level insights, conduct high-tier VAPT/SOC operations, and deploy elite cloud environments.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#services" class="bg-gradient-to-r from-cyberCyan to-cyberBlue text-black font-bold px-8 py-4 rounded shadow-lg hover:opacity-90 transition-all text-sm tracking-wide text-center">
            OUR CAPABILITIES
          </a>
          <a href="#contact" class="bg-slate-800/80 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded border border-slate-700 transition-all text-sm tracking-wide text-center">
            CONNECT WITH OUR ENGINEERS
          </a>
        </div>
      </div>
    </section>
  );
}
