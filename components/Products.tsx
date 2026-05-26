import Glyph from "./Glyph";

const PRODUCTS = [
  { id: "cardio", name: "Cardio Zoomer", blurb: "A next-generation cardiovascular test that captures inflammatory, metabolic, endothelial, lipid, and genetic drivers of disease in one report.", tags: ["Heart Health", "Lipid Panel", "Genetics"], tint: "#FFE7E1", glyph: "heart" },
  { id: "gut", name: "Gut Zoomer", blurb: "A comprehensive gut–brain test evaluating microbiome balance, pathogens, inflammation, digestion, permeability, and neurotransmitter patterns.", tags: ["Microbiome", "Gut-Brain", "Inflammation"], tint: "#FFEDD9", glyph: "gut" },
  { id: "hormone", name: "Hormone Zoomer", blurb: "Measures hormone levels and metabolism, detoxification efficiency, endocrine-disrupting exposures, and outcomes like oxidative stress.", tags: ["Endocrine", "Detox", "Bone Turnover"], tint: "#F2E2F8", glyph: "hormone" },
  { id: "neural", name: "Neural Zoomer", blurb: "A neuroimmune panel evaluating immune reactivity to brain, myelin, peripheral nerve, and blood–brain barrier antigens.", tags: ["Neurology", "Autoimmunity", "Cognition"], tint: "#DBE9FF", glyph: "neural" },
  { id: "cellular", name: "Cellular Zoomer", blurb: "Integrates mitochondrial, oxidative, detox, microbial, neurotransmitter, and nutrient insights affecting energy, mood, and resilience.", tags: ["Mitochondria", "Energy", "Detox"], tint: "#FFE0E6", glyph: "cell" },
  { id: "toxin", name: "Toxin Zoomer", blurb: "An environmental health panel assessing heavy metals, mold toxins, industrial chemicals, and PFAS together with detox capacity.", tags: ["Heavy Metals", "PFAS", "Mold"], tint: "#DEF8E6", glyph: "toxin" },
];

export default function Products() {
  return (
    <section className="section tint" id="products">
      <div className="section-inner">
        <span className="eyebrow">Top Products</span>
        <h2 className="section-title">Six panels patients ask about most.</h2>
        <p className="section-lede">Each Vibrant Zoomer combines dozens of related markers into one integrated report. Your provider uses it to find what&apos;s actually driving symptoms — not just what&apos;s flagged on a basic blood test.</p>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-card-head">
                <h4>{p.name}</h4>
                <div className="product-icon" style={{ background: p.tint, color: "var(--vw-navy-ink)" }}>
                  <Glyph kind={p.glyph} />
                </div>
              </div>
              <p>{p.blurb}</p>
              <div className="product-tags">
                {p.tags.map((t) => <span className="product-tag" key={t}>{t}</span>)}
              </div>
              <a className="more" href="#form">
                Ask about this at the booth
                <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
