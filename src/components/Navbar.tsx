"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 lg:px-12 glass-nav border-b border-white/5"
    >
      <div className="flex items-center">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white/90">
          AirPods Max
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm text-white/60">
        <Link href="#overview" className="hover:text-white transition-colors">Overview</Link>
        <Link href="#acoustic" className="hover:text-white transition-colors">Acoustic Design</Link>
        <Link href="#cancellation" className="hover:text-white transition-colors">Noise Cancellation</Link>
        <Link href="#spatial" className="hover:text-white transition-colors">Spatial Audio</Link>
      </div>

      <div className="flex items-center">
        <Link 
          href="#buy" 
          className="text-xs font-medium px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white shadow-sm"
        >
          Order AirPods Max 2
        </Link>
      </div>
    </motion.nav>
  );
}
