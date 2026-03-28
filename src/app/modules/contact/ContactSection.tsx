"use client";
import { MessageSquare, Mail, MapPin, Github, Instagram, Linkedin } from "lucide-react";
import { ContactActionCard } from "./partials/ContactActionCard";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-primary-bg pt-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* SISI KIRI: Info & Status */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight font-headline">
                Let's Start a <br />
                <span className="text-accent">Conversation</span>
              </h2>
              <p className="max-w-md text-description-text text-lg leading-relaxed">
                Whether you have a project in mind, a leadership role to fill, or just want to discuss the future of digital solutions — <span className="text-accent italic">I'm ready to connect.</span>
              </p>
            </div>

            <div className="space-y-6">
              {/* Location Badge */}
              <div className="flex items-center gap-4 w-fit">
                <div className="w-11 h-11 rounded-lg bg-red-800/20 flex items-center justify-center">
                  <MapPin size={22} className="text-red-700" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Karawang, West Java</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Indonesia • Open for global opportunities</p>
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex flex-col flex-wrap gap-4 w-fit">
                <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  RESPONSE TIME: LESS THAN 24 HOURS
                </div>
                <div className="px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent">AVAILABILITY: PART-TIME & FREELANCE</div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Actions & Socials */}
          <div className="flex-1 space-y-6">
            <ContactActionCard title="Consult Your Project" subtitle="Chat via WhatsApp — fastest response" icon={MessageSquare} href="#" variant="primary" />
            <ContactActionCard title="Book a Discovery Call" subtitle="Send email — for detailed briefs" icon={Mail} href="mailto:workwithdzikri@gmail.com" />

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/5"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold bg-primary-bg px-4 italic">or find me on</div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Github, label: "Github", sub: "Code", href: "#" },
                { icon: Instagram, label: "Instagram", sub: "Visuals", href: "#" },
                { icon: Linkedin, label: "LinkedIn", sub: "Network", href: "#" },
              ].map((social) => (
                <a key={social.label} href={social.href} className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card-bg/20 border border-white/5 hover:border-accent/40 transition-all">
                  <social.icon size={24} className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all mb-2" />
                  <span className="text-[10px] font-semibold text-white uppercase tracking-tighter">{social.label}</span>
                  <span className="text-[8px] text-white/20 group-hover:text-accent transition-colors italic">{social.sub}</span>
                </a>
              ))}
            </div>

            {/* Direct Email Footer */}
            <div className="w-full p-2 rounded-xl bg-card-bg/10 border border-white/5 text-center">
              <p className="text-white/40 text-[11px] font-mono tracking-widest">workwithdzikri@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer minimalis sesuai foto lo */}
      <footer className="w-full mt-15 py-3 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">© 2026 • Dzikri Ibrahim Wahhab • Built with passion & precision</p>
      </footer>
    </section>
  );
}
