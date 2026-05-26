"use client";

import Image from "next/image";
import SignupForm from "./SignupForm";

interface HeroProps {
  onJump: (e: React.MouseEvent, id: string) => void;
}

export default function Hero({ onJump }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-cobrand">
            <div className="bb-logo">
              <Image src="/assets/beyond-biohacking-white.webp" alt="Beyond Biohacking" width={140} height={44} style={{ height: 44, width: "auto" }} />
            </div>
            <div className="label">
              Official lab testing partner<br />
              <strong>Beyond Biohacking · Austin 2026</strong>
            </div>
          </div>
          <span className="hero-eyebrow"><span className="pulse" />Limited to Beyond attendees</span>
          <h1 className="hero-title">
            Your biology, <span className="accent">in focus.</span><br />
            Built for what&apos;s next.
          </h1>
          <p className="hero-sub">
            Vibrant Wellness brings 10 advanced specialty test panels — heart, gut, hormones, brain, toxins, cellular health — interpreted by a provider trained to act on what the data shows. Sign up at Beyond Biohacking and get matched.
          </p>
          <button className="nav-cta" style={{ background: "var(--vw-navy)", marginBottom: 36 }} onClick={(e) => onJump(e, "form")}>
            Start your sign-up
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="k">When</div>
              <div className="v">May 27 – 29, 2026<small>Wed → Fri</small></div>
            </div>
            <div className="hero-meta-item">
              <div className="k">Where</div>
              <div className="v">Austin, TX<small>Booth 317 · Expo Hall</small></div>
            </div>
            <div className="hero-meta-item">
              <div className="k">Offer</div>
              <div className="v">Provider matching<small>+ Beyond-exclusive intro</small></div>
            </div>
          </div>
        </div>
        <div className="hero-form-wrap" id="form">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
