const QUOTES = [
  {
    quote:
      "NOVA3D turned our listings page into an experience people actually screen-record and share. Inquiries are up 40% since launch.",
    name: "Sara Whitfield",
    role: "Marketing Director, Aurelia Ridge",
  },
  {
    quote:
      "They understood immediately that our 3D configurator needed to feel like a toy, not a tool. The team nailed both design and performance.",
    name: "Daniel Osei",
    role: "Founder, Halo Goods",
  },
  {
    quote:
      "Fast, communicative, and genuinely obsessed with craft. Our landing page now feels like a AAA game intro.",
    name: "Mei Lin Cho",
    role: "Head of Brand, Vertex Labs",
  },
];

export default function Testimonials() {
  return (
    <section id="about" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <span className="eyebrow">Client love</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 56px", maxWidth: 640 }}>
          Don't just take our word for it.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonial-grid">
          {QUOTES.map((q) => (
            <div
              key={q.name}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text)", marginBottom: 28 }}>“{q.quote}”</p>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{q.name}</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
