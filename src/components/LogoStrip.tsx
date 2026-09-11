const LOGOS = ["AURELIA", "PIXELFORGE", "NIMBUS", "VERTEX LABS", "HALO GOODS", "KINETIC"];

export default function LogoStrip() {
  return (
    <section style={{ padding: "48px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <p style={{ textAlign: "center", fontSize: 12, letterSpacing: "0.14em", color: "var(--muted)", marginBottom: 28 }}>
          TRUSTED BY FORWARD-THINKING BRANDS
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px 48px",
          }}
        >
          {LOGOS.map((l) => (
            <span key={l} style={{ fontWeight: 700, letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)", fontSize: 15 }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
