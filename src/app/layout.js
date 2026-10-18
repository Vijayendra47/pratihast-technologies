import { Inter } from 'next/font/google';
import './globals.css'; // Imports global Tailwind layers

// Injecting the clean, high-end corporate sans-serif font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// High-tier corporate SEO Metadata for Google & Social Media cards
export const metadata = {
  title: 'Pratihast Technologies | Enterprise InfoSec, Cloud & Full-Stack Solutions',
  description: 'Next-Gen Enterprise Engineering led by Er. Vijayendra Pratihast & Er. Raj Kushwaha. Specializing in VAPT, SOC, VLSI Security, Full-Stack Development, and DevOps automation.',
  keywords: [
    'Pratihast Technologies', 'VAPT Auditing', 'SOC Operations', 
    'VLSI Security', 'Cloud Infrastructure', 'DevOps Automation', 
    'Full-Stack Developer India', 'Cybersecurity Agency'
  ],
  authors: [{ name: 'Pratihast Technologies' }],
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
  },
  // Social Media Previews (OpenGraph)
  openGraph: {
    title: 'Pratihast Technologies | Enterprise Engineering',
    description: 'Securing & Scaling Mission-Critical Digital Infrastructures.',
    url: 'https://pratihast.tech',
    siteName: 'Pratihast Technologies',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[#070A13] font-sans text-slate-200 antialiased selection:bg-[#00F0FF] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
