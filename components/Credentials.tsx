function CredIcon({ kind }: { kind: string }) {
  const c = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "clia": return <svg {...c}><path d="M4 9l8-5 8 5v6c0 3-3.5 5-8 6-4.5-1-8-3-8-6V9z" /><path d="M9 12l2 2 4-4" /></svg>;
    case "cap": return <svg {...c}><circle cx="12" cy="9" r="4" /><path d="M5 21c1-4 4-6 7-6s6 2 7 6" /></svg>;
    case "hipaa": return <svg {...c}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
    case "iso": return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>;
    default: return null;
  }
}

const CREDS = [
  { id: "clia", title: "CLIA Certified", desc: "Highest standard for clinical laboratory testing in the United States." },
  { id: "cap", title: "CAP Accredited", desc: "College of American Pathologists — independent quality audit." },
  { id: "hipaa", title: "HIPAA Compliant", desc: "Your personal health information stays private and protected." },
  { id: "iso", title: "ISO 15189", desc: "International standard for medical laboratory quality and competence." },
];

export default function Credentials() {
  return (
    <section className="section" id="trust">
      <div className="section-inner">
        <span className="eyebrow">Why Vibrant</span>
        <h2 className="section-title">Lab-grade rigor. Patient-friendly experience.</h2>
        <p className="section-lede">Every Vibrant panel is run in a single accredited facility in Santa Clara, California — not split across third-party vendors. Same lab, same methods, same provider-grade quality every time.</p>
        <div className="cred-grid">
          {CREDS.map((c) => (
            <div className="cred" key={c.id}>
              <div className="cred-badge"><CredIcon kind={c.id} /></div>
              <h5>{c.title}</h5>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
