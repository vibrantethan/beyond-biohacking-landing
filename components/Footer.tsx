import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/assets/vw-logo.png" alt="Vibrant Wellness" width={120} height={38} style={{ height: 38, width: "auto" }} />
          <p>Advanced specialty lab testing for providers and the patients they treat. CLIA-certified, CAP-accredited, run in Santa Clara, California.</p>
        </div>
        <div>
          <h6>Vibrant</h6>
          <ul>
            <li><a href="#products">Test Menu</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#trust">Lab credentials</a></li>
          </ul>
        </div>
        <div>
          <h6>At Beyond Biohacking</h6>
          <ul>
            <li><a href="#booth">Booth 317</a></li>
            <li><a href="#booth">Live demos</a></li>
            <li><a href="#form">Sign-up form</a></li>
            <li><a href="https://beyondconference.com" target="_blank" rel="noreferrer">Event site →</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Vibrant Wellness · Privacy · Terms · HIPAA Notice</span>
        <span>Beyond Biohacking · Austin, TX</span>
      </div>
    </footer>
  );
}
