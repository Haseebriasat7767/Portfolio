const PROJECTS = [
  {
    title: "Aurelia Jewelry",
    tag: "3D Product Configurator",
    gradient: "linear-gradient(135deg,#7c5cff,#35e0c9)",
  },
  {
    title: "Vertex Labs",
    tag: "Interactive Landing Experience",
    gradient: "linear-gradient(135deg,#ff5ca8,#7c5cff)",
  },
  {
    title: "Nimbus Audio",
    tag: "WebGL Product Showcase",
    gradient: "linear-gradient(135deg,#35e0c9,#3d7bff)",
  },
  {
    title: "Halo Goods",
    tag: "Shopify 3D Storefront",
    gradient: "linear-gradient(135deg,#ffb648,#ff5ca8)",
  },
  {
    title: "Kinetic Studio",
    tag: "Portfolio & Case Study Site",
    gradient: "linear-gradient(135deg,#3d7bff,#7c5cff)",
  },
  {
    title: "Pixelforge Games",
    tag: "WebXR Brand Experience",
    gradient: "linear-gradient(135deg,#35e0c9,#ffb648)",
  },
];

export default function Work() {
  return (
    <section id="work" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: 16, maxWidth: 560 }}>
              Projects that turned visitors into customers.
            </h2>
          </div>
          <a href="#contact" className="btn btn-ghost">
            Start your project →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="work-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="work-card" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <div
                style={{
                  height: 220,
                  background: p.gradient,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)",
                  }}
                />
                <span style={{ fontSize: 42, fontWeight: 900, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.03em" }}>
                  {p.title.split(" ")[0][0]}
                  {p.title.split(" ")[1]?.[0] ?? ""}
                </span>
              </div>
              <div style={{ padding: "20px 22px", background: "var(--panel)" }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{p.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .work-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .work-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 60px rgba(0,0,0,0.4); }
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
