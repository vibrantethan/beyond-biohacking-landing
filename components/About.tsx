export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">About Vibrant Wellness</span>
            <h2 className="section-title">Advanced specialty testing, run by a CLIA-certified lab in Santa Clara.</h2>
            <p>For over a decade Vibrant Wellness has built the precision testing infrastructure that providers reach for when standard panels stop short. Multiplex protein arrays, mass spectrometry, and next-generation sequencing — all in one accredited workflow.</p>
            <p>The result for patients: a single panel can read 100+ markers across systems, surface root-cause patterns most general labs miss, and give your provider a concrete starting point — not another inconclusive &quot;within normal range.&quot;</p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="num">3M<sup>+</sup></div>
              <div className="lab">Tests Run</div>
              <div className="desc">Across patients in all 50 U.S. states.</div>
            </div>
            <div className="stat">
              <div className="num">10</div>
              <div className="lab">Zoomer Panels</div>
              <div className="desc">Heart, gut, hormone, brain, cell, toxin &amp; more.</div>
            </div>
            <div className="stat">
              <div className="num">100<sup>+</sup></div>
              <div className="lab">Markers / Panel</div>
              <div className="desc">Read in a single, integrated report.</div>
            </div>
            <div className="stat">
              <div className="num">24h</div>
              <div className="lab">Provider Match</div>
              <div className="desc">Get paired after sign-up at Beyond.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
