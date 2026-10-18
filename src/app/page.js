import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main class="bg-cyberDark min-h-screen text-slate-200 antialiased selection:bg-cyberCyan selection:text-black">
      {/* Header Banner */}
      <header class="border-b border-slate-800/60 bg-cyberDark/80 backdrop-blur sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span class="text-2xl font-black tracking-wider text-white">PRATIHAST<span class="text-cyberCyan">.</span></span>
          <nav class="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-slate-400">
            <a href="#services" class="hover:text-cyberCyan transition-colors">Services</a>
            <a href="#team" class="hover:text-cyberCyan transition-colors">Leadership</a>
            <a href="#contact" class="hover:text-cyberCyan transition-colors">Consultation</a>
          </nav>
          <a href="tel:+919470082157" class="border border-cyberCyan/40 text-cyberCyan hover:bg-cyberCyan hover:text-black px-5 py-2 rounded-md text-sm font-semibold tracking-wide transition-all">
            +91 94700 82157
          </a>
        </div>
      </header>

      <Hero />
      <Services />
      <Team />
      <ContactForm />

      {/* Footer Banner */}
      <footer class="border-t border-slate-900 bg-black/40 py-12 px-6 text-center text-xs text-slate-500">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Pratihast Technologies. All engineering rights reserved.</p>
          <div class="flex space-x-6">
            <span class="text-slate-400">pratihastclasses@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
