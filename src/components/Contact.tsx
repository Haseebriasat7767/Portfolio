import { useState, type CSSProperties } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact">
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, rgba(124,92,255,0.12), rgba(53,224,201,0.08))",
            border: "1px solid var(--border)",
            borderRadius: 28,
            padding: "64px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
          className="contact-grid"
        >
          <div>
            <span className="eyebrow">Let's build something</span>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 20px" }}>
              Ready for a website people remember?
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 28, maxWidth: 420 }}>
              Tell us about your project and we'll get back within one business day with next steps and a free
              scoping call.
            </p>
            <div style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 2 }}>
              <div>hello@nova3d.studio</div>
              <div>+1 (415) 555-0148</div>
              <div>Remote-first · Worldwide</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: 32,
                  textAlign: "center",
                  background: "var(--panel)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>✦</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Thanks — message sent!</h3>
                <p style={{ color: "var(--muted)", fontSize: 14 }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <input required placeholder="Your name" style={inputStyle} />
                <input required type="email" placeholder="Email address" style={inputStyle} />
                <input placeholder="Company (optional)" style={inputStyle} />
                <textarea required placeholder="Tell us about your project" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                <button type="submit" className="btn btn-primary" style={{ marginTop: 6 }}>
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle: CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "14px 16px",
  color: "var(--text)",
  fontSize: 14.5,
  outline: "none",
  fontFamily: "inherit",
};
