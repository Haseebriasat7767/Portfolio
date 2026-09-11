import Button from "./Button";
import Eyebrow from "./Eyebrow";

type Project = { title: string; tag: string; gradient: string; url?: string };

const PROJECTS: Project[] = [
  {
    title: "Aurelia Ridge",
    tag: "Real Estate & Land Development Site",
    gradient: "linear-gradient(135deg,#7c5cff,#35e0c9)",
    url: "https://www.aureliaridge.site/",
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
    <section id="work" style={{ background: "var(--bg-soft)", position: "relative" }}>
      <div className="blueprint-grid"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: 16, maxWidth: 560 }}>
              Projects that turned visitors into customers.
            </h2>
          </div>
          <Button variant="ghost" asLink href="#contact">
            Start your project →
          </Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="work-grid">
          {PROJECTS.map((p, i) => {
            const CardTag = p.url ? "a" : "div";
            return (
              <CardTag
                key={p.title}
                {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`work-card card stagger-${(i % 5) + 1} animate-slide-up`}
                style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border-accent)", display: "block" }}
              >
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
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>
                    {p.title}
                    {p.url && <span style={{ color: "var(--accent-2)", marginLeft: 6, fontSize: 14 }}>↗</span>}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{p.tag}</p>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>

      <style>{`
        .work-card {
          transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
          background: var(--panel);
        }
        .work-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
          border-color: rgba(53, 224, 201, 0.2);
        }
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
