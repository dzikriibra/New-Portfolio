"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactInfo } from "./partials/ContactInfo";
import { CONTACT_DATA } from "./ContactData";
import { ActionCard } from "./partials/ActionCard";
import { ContactSocials } from "./partials/ContactSocials";
import { Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-primary-bg pt-24 overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1">
            <ContactInfo data={CONTACT_DATA.info} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 space-y-6">
            {CONTACT_DATA.actions.map((action, index) => (
              <ActionCard key={index} {...action} />
            ))}

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/5"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold bg-primary-bg px-4 italic">or find me on</div>
            </div>

            <ContactSocials socials={CONTACT_DATA.socials} />

            <motion.a
              href={CONTACT_DATA.info.cvUrl}
              download="CV Dzikri Ibrahim Wahhab.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="group block w-full p-2 rounded-full bg-card-bg/10 border border-white/5 text-center transition-all hover:border-accent/30 active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-2.5">
                <Download size={18} className="text-white/30 group-hover:text-accent transition-colors flex-shrink-0" />
                <div className="text-left flex items-baseline gap-2">
                  <p className="text-white/40 group-hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] leading-none">Download My Curriculum Vitae</p>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <footer className="w-full mt-15 py-3 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">© 2026 • Dzikri Ibrahim Wahhab • Built with passion & precision</p>
      </footer>
    </section>
  );
}
