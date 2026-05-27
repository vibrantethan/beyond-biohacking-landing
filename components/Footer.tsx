import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="https://vibrant-wellness.com" target="_blank" rel="noreferrer">
            <Image src="/assets/vw-logo.png" alt="Vibrant Wellness" width={120} height={38} style={{ height: 38, width: "auto" }} />
          </a>
          <p>Advanced specialty lab testing for providers and the patients they treat. CLIA-certified, CAP-accredited, run in Santa Clara, California.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Vibrant Wellness · <a href="https://vibrant-wellness.com/privacy-policy" target="_blank" rel="noreferrer">Privacy</a></span>
        <span>Beyond Biohacking · Austin, TX</span>
      </div>
    </footer>
  );
}
