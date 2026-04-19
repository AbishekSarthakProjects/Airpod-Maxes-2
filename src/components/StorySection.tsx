"use client";

import { motion } from "framer-motion";

interface StorySectionProps {
  headline: string;
  subheadline?: string;
  supportingLines?: string[];
  align?: "left" | "center" | "right";
  className?: string;
}

export default function StorySection({ 
  headline, 
  subheadline, 
  supportingLines, 
  align = "left",
  className = "" 
}: StorySectionProps) {
  const alignmentClass = 
    align === "left" ? "items-start text-left" : 
    align === "right" ? "items-end text-right ml-auto" : 
    "items-center text-center mx-auto";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col justify-center max-w-2xl ${alignmentClass} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">
        {headline}
      </h2>
      
      {subheadline && (
        <p className="text-xl md:text-2xl font-medium text-white/80 mb-6 tracking-tight">
          {subheadline}
        </p>
      )}

      {supportingLines && supportingLines.length > 0 && (
        <div className="space-y-4">
          {supportingLines.map((line, idx) => (
            <p key={idx} className="text-lg md:text-xl text-white/60">
              {line}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}
