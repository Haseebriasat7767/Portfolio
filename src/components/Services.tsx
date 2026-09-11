import Eyebrow from "./Eyebrow";

const SERVICES = [
  {
    icon: "◆",
    title: "3D Website Design",
    desc: "Custom WebGL scenes, interactive heroes, and scroll-driven storytelling built with Three.js and React Three Fiber.",
  },
  {
    icon: "⬡",
    title: "Product Configurators",
    desc: "Real-time 3D product viewers and configurators that let customers explore and customize before they buy.",
  },
  {
    icon: "◈",
    title: "Motion & Interaction",
    desc: "Micro-interactions, physics-based animation, and cursor-reactive elements that make interfaces feel alive.",
  },
  {
    icon: "▲",
    title: "Brand & UI Design",
    desc: "Full visual identity and interface design systems tailored to how your 3D experience should feel and flow.",
  },
  {
    icon: "◐",
    title: "Performance Engineering",
    desc: "Optimized asset pipelines, LOD, and rendering budgets so immersive scenes stay fast on every device.",
  },
  {
    icon: "✦",
    title: "AR / Web XR",
    desc: "Browser-based augmented reality and immersive experiences that work without an app download.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ position: "relative" }}>
      <div className="blueprint-grid"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Eyebrow>What we do</Eyebrow>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 56px", maxWidth: 640 }}>
          Full-service 3D web design, from concept to launch.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="services-grid"
        >
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`service-card card stagger-${(i % 5) + 1} animate-slide-up`}
              style={{
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(124,92,255,0.2), rgba(53,224,201,0.15))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  color: "var(--accent-2)",
                  marginBottom: 20,
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover { transform: translateY(-6px); border-color: rgba(124,92,255,0.4); }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
