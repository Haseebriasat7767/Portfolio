import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 160, paddingBottom: 80, minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div
        className="container hero-grid"
        style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}
      >
        <div>
          <span className="eyebrow">3D web design & development studio</span>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: "20px 0 24px",
            }}
          >
            We build <span className="gradient-text">immersive 3D websites</span> that make brands unforgettable.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 520, lineHeight: 1.7, marginBottom: 36 }}>
            NOVA3D is a boutique digital agency crafting interactive WebGL experiences, product configurators, and
            motion-driven sites for brands that refuse to look ordinary.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-primary">
              Get a free quote →
            </a>
            <a href="#work" className="btn btn-ghost">
              View our work
            </a>
          </div>

          <div style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
            {[
              ["60+", "3D projects shipped"],
              ["98%", "client satisfaction"],
              ["12", "countries served"],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>{n}</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", height: 480 }} className="hero-canvas">
          <HeroScene />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-canvas { height: 340px !important; order: -1; }
        }
      `}</style>
    </section>
  );
}
