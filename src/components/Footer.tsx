export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 0" }}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}
      >
        <span style={{ fontWeight: 800 }}>
          NOVA<span style={{ color: "var(--accent-2)" }}>3D</span>
        </span>
        <p style={{ fontSize: 13, color: "var(--muted)" }}>© {new Date().getFullYear()} NOVA3D Studio. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20, fontSize: 13, color: "var(--muted)" }}>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
