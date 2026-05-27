"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavProps {
  onJump: (e: React.MouseEvent, id: string) => void;
}

export default function Nav({ onJump }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <a className="vw" href="#top">
            <Image src="/assets/vw-logo.png" alt="Vibrant Wellness" width={120} height={32} style={{ height: 32, width: "auto" }} />
          </a>
          <div className="divider" />
          <a className="bb" href="#top" aria-label="Beyond Biohacking">
            <Image src="/assets/beyond-biohacking-white.webp" alt="Beyond Biohacking" width={140} height={38} style={{ height: 38, width: "auto" }} />
          </a>
        </div>
        <button className="nav-cta" onClick={(e) => onJump(e, "form")}>
          Find a Provider
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
