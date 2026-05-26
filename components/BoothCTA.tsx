"use client";

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
              We&apos;ll run a live sample of the Cardio Zoomer report on stage twice a day. Stop by booth 317 to meet our team, ask questions, and get a Beyond-exclusive starter rate on your first panel.
            </p>
            <div className="booth-meta">
              <div className="booth-row">
                <div className="k">Booth</div>
                <div className="v">317<small>Expo Hall · Main floor</small></div>
              </div>
              <div className="booth-row">
                <div className="k">Dates</div>
                <div className="v">May 27 – 29, 2026<small>Daily 9 AM – 6 PM CT</small></div>
              </div>
              <div className="booth-row">
                <div className="k">Live demo</div>
                <div className="v">11 AM &amp; 3 PM CT<small>Real Cardio Zoomer report walkthrough</small></div>
              </div>
              <div className="booth-row">
                <div className="k">Venue</div>
                <div className="v">Austin Convention Center<small>500 E Cesar Chavez St, Austin, TX</small></div>
              </div>
            </div>
            <div className="booth-actions">
              <button className="btn-primary" style={{ width: "auto", padding: "14px 22px" }} onClick={(e) => onJump(e, "form")}>
                Reserve your slot
                <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <button className="btn-secondary" onClick={() => window.open("https://beyondconference.com", "_blank")}>
                Beyond Biohacking site
              </button>
            </div>
          </div>

          <div className="booth-visual" aria-hidden="true">
            <div className="floor-tag">Expo Hall · Floor Map</div>
            <div className="booth-label">Vibrant Wellness · 317</div>
            <div className="booth-pin">
              <div className="ring"><div className="dot" /></div>
            </div>
            <div className="booth-visual-inner">
              <div />
              <div>
                <h4>Austin Convention Center</h4>
                <div className="floor">
                  <span>Main Stage ← W</span>
                  <span>E → Lounge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
