const STEPS = [
  { n: "01", title: "Discover", desc: "We learn your brand, audience, and goals to define what your 3D experience needs to achieve." },
  { n: "02", title: "Design", desc: "Art direction, wireframes, and interactive prototypes so you can feel the experience before we build it." },
  { n: "03", title: "Build", desc: "Our engineers bring the design to life with optimized 3D scenes, animation, and clean, scalable code." },
  { n: "04", title: "Launch & Grow", desc: "We ship, monitor performance, and keep iterating so your site keeps converting long after launch." },
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <span className="eyebrow">How we work</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 56px", maxWidth: 640 }}>
          A proven process, tuned for immersive web.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="process-grid">
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ position: "relative", paddingLeft: 4 }}>
              <div
                style={{
                  fontSize: 46,
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                  marginBottom: 16,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
              {i < STEPS.length - 1 && (
                <div
                  className="process-line"
                  style={{
                    position: "absolute",
                    top: 24,
                    right: -12,
                    width: 24,
                    height: 1,
                    background: "var(--border)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
