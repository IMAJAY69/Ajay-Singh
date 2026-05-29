"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number;
}

export default function Marquee({ text, speed = 20 }: MarqueeProps) {
  return (
    <div className="overflow-hidden flex whitespace-nowrap border-y border-white/5 py-6 bg-black">
      <motion.div 
        className="flex text-4xl md:text-6xl font-display font-black uppercase tracking-tighter gap-16 pr-16"
        animate={{ x: [0, -1000] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
