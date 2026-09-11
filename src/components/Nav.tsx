import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(6,6,10,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}
      >
        <a href="#top" style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
          NOVA<span style={{ color: "var(--accent-2)" }}>3D</span>
        </a>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 14, color: "var(--muted)", fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
          Start a project
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: 8,
            width: 40,
            height: 40,
            color: "var(--text)",
            fontSize: 18,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          style={{
            background: "rgba(6,6,10,0.97)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 16 }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 8 }}>
            Start a project
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
          .nav-links { display: none !important; }
          header .btn-primary { display: none !important; }
          .menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
