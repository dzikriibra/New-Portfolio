import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo = ({ data }: { data: any }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 space-y-8 text-center lg:text-left">
    <div className="space-y-6">
      <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight font-headline">
        Let's Start a <br />
        <span className="text-accent">Conversation</span>
      </h2>
      <p className="max-w-md mx-auto lg:mx-0 text-description-text text-lg leading-relaxed">{data.description}</p>
    </div>

    <div className="space-y-6">
      <div className="flex items-center gap-4 w-fit mx-auto lg:mx-0">
        <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 text-accent">
          <MapPin size={22} />
        </div>
        <div className="text-left">
          <p className="text-white font-bold text-sm mb-1">{data.location}</p>
          <p className="text-[10px] text-white/40 uppercase tracking-widest italic">Indonesia • Open Global Opportunities</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-fit mx-auto lg:mx-0">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Response Time: {data.responseTime}
        </div>
        <div className="px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase italic">Availability: {data.availability}</div>
      </div>
    </div>
  </motion.div>
);
