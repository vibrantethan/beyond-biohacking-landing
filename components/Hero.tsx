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
              Lab testing partner<br />
              <strong>Beyond Biohacking · Austin 2026</strong>
            </div>
          </div>
          <h1 className="hero-title">
            Your biology, <span className="accent">in focus.</span><br />
            Built for what&apos;s next.
          </h1>
          <p className="hero-sub">
            Vibrant Wellness brings 10 advanced specialty test panels — heart, gut, hormones, brain, toxins, cellular health — interpreted by a provider trained to act on what the data shows. Sign up at Beyond Biohacking and get matched.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="k">When</div>
              <div className="v">May 27 – 29, 2026<small>Wed → Fri</small></div>
            </div>
            <div className="hero-meta-item">
              <div className="k">Where</div>
              <div className="v">Austin, TX<small>Booth 13 · 5th Floor</small></div>
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
