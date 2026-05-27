"use client";

import Image from "next/image";

interface BoothCTAProps {
  onJump: (e: React.MouseEvent, id: string) => void;
}

export default function BoothCTA({ onJump }: BoothCTAProps) {
  return (
    <section className="section slate" id="booth">
      <div className="section-inner">
        <div className="booth-wrap">
          <div className="booth-card">
            <span className="eyebrow" style={{ color: "var(--vw-navy)" }}>Visit us in person</span>
            <h3>Come find the Vibrant team at Beyond Biohacking.</h3>
            <p style={{ color: "var(--vw-text-muted)", fontSize: "1rem", lineHeight: 1.6, margin: "0 0 8px" }}>
              Stop by booth 13 to meet our team, ask questions, and get a Beyond-exclusive starter rate on your first panel.
            </p>
            <div className="booth-meta">
              <div className="booth-row">
                <div className="k">Booth</div>
                <div className="v">13<small>5th Floor</small></div>
              </div>
              <div className="booth-row">
                <div className="k">Dates</div>
                <div className="v">May 27 – 29, 2026<small>Daily 9 AM – 6 PM CT</small></div>
              </div>
            </div>
          </div>

          <div className="booth-visual" aria-hidden="true">
            <Image
              src="/assets/kit-opening.jpg"
              alt="Opening a Vibrant Wellness Specimen Collection Kit"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto", borderRadius: 12, objectFit: "cover", maxHeight: 480 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
