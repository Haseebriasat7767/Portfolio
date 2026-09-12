import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import type * as THREE from "three";

type IconName = "arrow" | "code" | "layers" | "spark" | "send" | "copy" | "check" | "menu" | "close" | "external";

type Project = {
  number: string;
  title: string;
  type: string;
  year: string;
  description: string;
  tags: string[];
  visual: "aurelia" | "kinetic" | "vertex";
  url?: string;
  caseStudyUrl?: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Aurelia Ridge",
    type: "Real estate / web platform",
    year: "2025",
    description:
      "A calm, cinematic property experience that turns a complex development into a place people can picture themselves in.",
    tags: ["React", "Interactive map", "CMS"],
    visual: "aurelia",
    url: "https://www.aureliaridge.site/",
    caseStudyUrl: "/work/aurelia-ridge/",
  },
  {
    number: "02",
    title: "Kinetic Commerce",
    type: "E-commerce / conversion",
    year: "2024",
    description:
      "A fast storefront system for a modern goods brand, with reusable components that let the team launch new collections in hours.",
    tags: ["Next.js", "Shopify", "Motion"],
    visual: "kinetic",
    caseStudyUrl: "/work/kinetic-commerce/",
  },
  {
    number: "03",
    title: "Vertex OS",
    type: "SaaS / product design",
    year: "2024",
    description:
      "A sharp product marketing site that makes a technical platform feel clear, useful, and ready for its next stage of growth.",
    tags: ["TypeScript", "WebGL", "Design system"],
    visual: "vertex",
    caseStudyUrl: "/work/vertex-os/",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Web development",
    copy: "Responsive, accessible websites that are as solid under the hood as they are striking on screen.",
    icon: "code" as IconName,
    url: "/services/3d-website-development/",
  },
  {
    number: "02",
    title: "3D & WebGL experiences",
    copy: "Immersive WebGL scenes, 3D interactions, and thoughtful motion used with purpose — never just for decoration.",
    icon: "spark" as IconName,
    url: "/services/webgl-development/",
  },
  {
    number: "03",
    title: "Digital systems",
    copy: "Flexible components and clean foundations that make your next launch faster than your last.",
    icon: "layers" as IconName,
    url: "/services/threejs-development/",
  },
];

const STACK = ["React", "TypeScript", "Next.js", "Three.js", "GSAP", "Node.js", "Figma", "Webflow"];

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
  }
  if (name === "external") {
    return <svg {...common}><path d="M14 5h5v5M19 5l-9 9" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
  }
  if (name === "code") {
    return <svg {...common}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>;
  }
  if (name === "layers") {
    return <svg {...common}><path d="m12 3 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></svg>;
  }
  if (name === "spark") {
    return <svg {...common}><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" /></svg>;
  }
  if (name === "send") {
    return <svg {...common}><path d="m21 3-7.4 18-3.8-8.8L1 8.4 21 3Z" /><path d="M10 12.2 21 3" /></svg>;
  }
  if (name === "copy") {
    return <svg {...common}><rect x="8" y="8" width="11" height="11" rx="1.5" /><path d="M16 8V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2" /></svg>;
  }
  if (name === "check") {
    return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
  }
  if (name === "close") {
    return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  }
  return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function WebGLDemo() {
  const mountRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup = () => {};
    import("three").then((THREE) => {
      if (disposed) return;
      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        if (fallbackRef.current) fallbackRef.current.textContent = "WebGL unavailable — static experience enabled";
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      const group = new THREE.Group();
      const shape = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.42, 2),
        new THREE.MeshBasicMaterial({ color: 0xd7ff4c, wireframe: true, transparent: true, opacity: 0.8 }),
      );
      const innerShape = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.9, 1),
        new THREE.MeshBasicMaterial({ color: 0xff674f, wireframe: true, transparent: true, opacity: 0.52 }),
      );
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.95, 0.012, 8, 96),
        new THREE.MeshBasicMaterial({ color: 0xff674f, transparent: true, opacity: 0.62 }),
      );
      const ringTwo = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.008, 8, 96),
        new THREE.MeshBasicMaterial({ color: 0xd7ff4c, transparent: true, opacity: 0.42 }),
      );
      group.add(shape, innerShape, ring, ringTwo);
      scene.add(group);
      camera.position.z = 5.4;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const pointer = { x: 0, y: 0 };
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const resize = () => {
        const width = mount.clientWidth || 420;
        const height = mount.clientHeight || 420;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      const move = (event: PointerEvent) => {
        const bounds = mount.getBoundingClientRect();
        pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.6;
        pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.6;
      };
      let frame = 0;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        if (!reducedMotion) {
          group.rotation.x += 0.0025;
          group.rotation.y += 0.004;
          ring.rotation.z -= 0.002;
          ringTwo.rotation.z += 0.0015;
        }
        group.rotation.x += (pointer.y - group.rotation.x) * 0.01;
        group.rotation.y += (pointer.x - group.rotation.y) * 0.01;
        renderer.render(scene, camera);
      };

      resize();
      animate();
      window.addEventListener("resize", resize);
      mount.addEventListener("pointermove", move);
      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        mount.removeEventListener("pointermove", move);
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
        innerShape.geometry.dispose();
        (innerShape.material as THREE.Material).dispose();
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
        ringTwo.geometry.dispose();
        (ringTwo.material as THREE.Material).dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      };
    }).catch(() => {
      if (fallbackRef.current) fallbackRef.current.textContent = "WebGL unavailable — static experience enabled";
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className="hero-webgl" aria-label="Interactive WebGL preview"><span ref={fallbackRef} className="webgl-fallback">Interactive WebGL preview</span></div>;
}

function CodeWindow() {
  return (
    <div className="code-window" aria-label="A code editor showing a component">
      <div className="window-topbar">
        <span className="window-dots"><i /><i /><i /></span>
        <span className="window-file">src / pages / home.tsx</span>
        <span className="window-index">01 — 04</span>
      </div>
      <div className="code-lines">
        <div><span className="line-number">01</span><span className="code-purple">export default function</span> <span className="code-yellow">Experience</span>() {'{'}</div>
        <div><span className="line-number">02</span>  <span className="code-purple">return</span> (</div>
        <div><span className="line-number">03</span>    &lt;<span className="code-yellow">main</span> <span className="code-coral">className</span>=<span className="code-green">"future"</span>&gt;</div>
        <div className="code-indent"><span className="line-number">04</span>      &lt;<span className="code-yellow">MakeItMatter</span> /&gt;</div>
        <div><span className="line-number">05</span>    &lt;/<span className="code-yellow">main</span>&gt;</div>
        <div><span className="line-number">06</span>  )</div>
        <div><span className="line-number">07</span>{'}'}</div>
      </div>
      <div className="code-status"><span><b className="status-dot" /> all systems go</span><span>⌘ + K</span></div>
    </div>
  );
}

function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  if (visual === "aurelia") {
    return (
      <div className="project-visual visual-aurelia">
        <div className="visual-noise" />
        <div className="aurelia-sun" />
        <div className="aurelia-horizon" />
        <div className="aurelia-copy"><span>LIVE / 25</span><strong>Find your<br /><em>north.</em></strong></div>
        <div className="visual-corner">AURELIA RIDGE<br /><small>37° 46' 30" N</small></div>
      </div>
    );
  }
  if (visual === "kinetic") {
    return (
      <div className="project-visual visual-kinetic">
        <div className="kinetic-orb orb-one" /><div className="kinetic-orb orb-two" />
        <div className="kinetic-grid" />
        <div className="kinetic-copy"><small>OBJECT / 002</small><strong>FORM<br /><span>FOLLOWS</span><br />FEELING</strong></div>
        <div className="kinetic-product" />
      </div>
    );
  }
  return (
    <div className="project-visual visual-vertex">
      <div className="vertex-glow" />
      <div className="vertex-top"><span>VERTEX / OS</span><span>STATUS: ONLINE</span></div>
      <div className="vertex-graph"><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="vertex-card"><small>ACTIVE USERS</small><strong>24,891</strong><span>+18.4% <b>↗</b></span></div>
      <div className="vertex-foot">Build better<br /><em>together.</em></div>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <ProjectVisual visual={project.visual} />
      <div className="project-card-content">
        <div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.year}</span></div>
        <div className="project-title-row"><h3>{project.title}</h3><button className="round-link" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`}><Icon name="arrow" size={17} /></button></div>
        <p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.url && <a className="project-live-link" href={project.url} target="_blank" rel="noreferrer">Live website preview <Icon name="external" size={14} /></a>}
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject, menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@aether.dev");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <aside className="side-rail" aria-hidden="true"><span>INDEPENDENT DIGITAL DEVELOPER</span><b>© 2026 AETHER / 01</b></aside>

      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Aether home"><span className="brand-mark">A/</span><span>AETHER<span className="brand-dot">.</span>DEV</span></a>
        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#work" onClick={closeMenu}><span>01</span>Work</a>
          <a href="#services" onClick={closeMenu}><span>02</span>Capabilities</a>
          <a href="#about" onClick={closeMenu}><span>03</span>About</a>
          <a href="#message" onClick={closeMenu}><span>04</span>CEO message</a>
          <a href="#contact" onClick={closeMenu}><span>05</span>Contact</a>
        </nav>
        <a className="header-availability" href="#contact"><i /> Available for work <Icon name="arrow" size={15} /></a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}><Icon name={menuOpen ? "close" : "menu"} size={21} /></button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-background" aria-hidden="true"><div className="hero-glow" /><div className="hero-grid" /><WebGLDemo /><div className="hero-cross cross-one">+</div><div className="hero-cross cross-two">+</div></div>
          <div className="hero-content">
            <div className="hero-kicker"><span className="eyebrow-line" /> <span>3D websites &amp; WebGL for product brands, real estate &amp; digital teams</span><span className="hero-year">( 2026 )</span></div>
            <div className="hero-heading-wrap">
              <h1><span>MAKE</span><span className="hero-accent">3D WEBGL</span><span>MATTER<span className="hero-period">.</span></span></h1>
              <div className="hero-side-note"><span>(scroll to explore)</span><strong>Scroll<br />down <Icon name="arrow" size={16} /></strong></div>
            </div>
            <div className="hero-bottom">
              <p>Design-minded development for brands<br />with somewhere to go.</p>
              <CodeWindow />
              <div className="hero-index"><span>01</span><i /><span>04</span></div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Services"><div className="marquee-track"><span>FRONTEND DEVELOPMENT</span><b>✳</b><span>INTERACTION DESIGN</span><b>✳</b><span>WEBGL / 3D</span><b>✳</b><span>DIGITAL SYSTEMS</span><b>✳</b><span>FRONTEND DEVELOPMENT</span><b>✳</b><span>INTERACTION DESIGN</span><b>✳</b><span>WEBGL / 3D</span><b>✳</b></div></div>

        <section className="intro section-pad" id="about">
          <div className="section-label"><span>01</span><i /> A little about me</div>
          <div className="intro-layout">
            <Reveal className="intro-statement"><h2>I build the <em>digital layer</em> between good ideas and the people they’re for.</h2></Reveal>
            <Reveal className="intro-copy"><p>I’m a developer with a designer’s eye and a healthy obsession with the details. I partner with product brands, premium real-estate teams, and digital-first companies across the United States and worldwide to turn rough ideas into clear, expressive, high-performing 3D websites and WebGL experiences.</p><p className="copy-muted">From the first line of code to the last pixel, every choice should make the product feel more like itself.</p><a className="text-link" href="#contact">Let’s work together <Icon name="arrow" size={16} /></a><a className="text-link" href="/services/usa-3d-website-development/">For US-based teams <Icon name="arrow" size={16} /></a></Reveal>
          </div>
          <div className="stat-row"><div><strong>06<span>+</span></strong><span>Years building<br />for the web</span></div><div><strong>24<span>+</span></strong><span>Projects shipped<br />with good people</span></div><div><strong>∞</strong><span>Curiosity left<br />in the tank</span></div></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-head"><div className="section-label"><span>02</span><i /> Selected work</div><p>A few things I’ve helped bring to life.<br />More stories coming soon.</p></div>
          <div className="projects-grid"><Reveal><ProjectCard project={PROJECTS[0]} onOpen={setActiveProject} /></Reveal><Reveal className="reveal-delay"><ProjectCard project={PROJECTS[1]} onOpen={setActiveProject} /></Reveal><Reveal className="reveal-delay-2"><ProjectCard project={PROJECTS[2]} onOpen={setActiveProject} /></Reveal></div>
          <div className="work-footer"><span>03 / 03 projects shown</span><a href="#contact" className="outline-link">Have a project in mind? <Icon name="arrow" size={16} /></a></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-label"><span>03</span><i /> What I do</div>
          <div className="services-heading"><Reveal><h2>Clear thinking.<br /><em>Careful craft.</em></h2></Reveal><p>Aether is a 3D website and WebGL development studio. I use React, Three.js, and TypeScript to create fast, accessible experiences that make ambitious brands easier to understand and remember.</p></div>
          <div className="service-list">{SERVICES.map((service) => <Reveal key={service.number}><div className="service-row"><span className="service-number">{service.number}</span><div className="service-icon"><Icon name={service.icon} size={21} /></div><h3><a href={service.url}>{service.title}</a></h3><p>{service.copy}</p><Icon name="arrow" size={20} /></div></Reveal>)}</div>
          <div className="stack-row"><span className="stack-label">TOOLS I LIKE</span><div>{STACK.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
          <div className="performance-panel"><div className="performance-heading"><span>PERFORMANCE / 01</span><strong>Immersion without the wait.</strong></div><div className="performance-grid"><div><span>01 / ADAPTIVE RENDERING</span><p>Real-time visuals are layered onto a useful HTML experience, with a static path when a device cannot support WebGL.</p></div><div><span>02 / ACCESSIBLE MOTION</span><p>Motion responds to reduced-motion preferences, keyboard navigation, and the content hierarchy.</p></div><div><span>03 / QA BEFORE LAUNCH</span><p>Mobile testing, Lighthouse checks, and a measured handoff keep the experience beautiful after it ships.</p></div></div></div>
        </section>

        <section className="ceo-message section-pad" id="message">
          <div className="section-label"><span>04</span><i /> A note from the CEO</div>
          <div className="ceo-layout">
            <Reveal className="ceo-portrait-wrap"><div className="ceo-portrait"><img className="ceo-photo" src="/ceo-photo.jpeg" alt="Haseeb Riasat, CEO and Lead Developer at Aether" onLoad={(event) => event.currentTarget.parentElement?.classList.add("has-photo")} onError={(event) => { event.currentTarget.style.display = "none"; }} /><div className="ceo-orbit orbit-a" /><div className="ceo-orbit orbit-b" /><span className="ceo-initials">HR<span>.</span></span><span className="ceo-portrait-label">AETHER / FOUNDER<br />CREATING WITH INTENT</span><span className="ceo-portrait-index">04 — 26</span></div></Reveal>
            <Reveal className="ceo-copy reveal-delay"><p className="ceo-kicker">From the desk of the CEO</p><h2>Build with purpose.<br /><em>Ship with care.</em></h2><p className="ceo-body">Every project starts with a question: how can this feel more human? At Aether, we believe the best digital work is not built to impress for a moment. It is built to make the right thing easier to understand, use, and remember.</p><p className="ceo-body">My role is to keep the vision clear, the process honest, and the details moving in the same direction. The result should feel unmistakably yours — and work beautifully for the people you want to reach.</p><div className="ceo-signoff"><span>— Haseeb Riasat</span><small>CEO &amp; Lead Developer</small></div></Reveal>
          </div>
        </section>

        <section className="manifesto section-pad"><div className="manifesto-glow" /><div className="section-label"><span>05</span><i /> The approach</div><Reveal><h2>Less noise.<br /><span>More signal<span className="accent-dot">.</span></span></h2></Reveal><div className="manifesto-foot"><p>Good digital work should feel obvious in hindsight. I bring structure to the messy middle and make sure the end result is as useful as it is memorable.</p><span>— Aether / studio notes</span></div></section>

        <section className="contact section-pad" id="contact">
          <div className="section-label"><span>06</span><i /> Start a conversation</div>
          <div className="contact-grid"><Reveal><h2>Have something<br /><em>worth building?</em></h2><p className="contact-lede">Tell me a little about it. I’ll get back to you within two working days.</p><div className="contact-details"><a href="mailto:hello@aether.dev">hello@aether.dev <Icon name="arrow" size={16} /></a><span>Based in London · Working worldwide</span></div></Reveal><Reveal className="reveal-delay"><div className="contact-form-wrap">{sent ? <div className="success-message"><span className="success-icon"><Icon name="check" size={22} /></span><h3>Message received.</h3><p>Thanks for reaching out — I’ll be in touch soon.</p><button className="text-link" onClick={() => setSent(false)}>Send another <Icon name="arrow" size={16} /></button></div> : <form onSubmit={handleSubmit}><label><span>Your name</span><input type="text" name="name" placeholder="Jane Smith" required /></label><label><span>Email address</span><input type="email" name="email" placeholder="jane@company.com" required /></label><label><span>Tell me about the project</span><textarea name="message" placeholder="A few words about what you’re working on..." rows={3} required /></label><button className="submit-button" type="submit">Send enquiry <Icon name="send" size={17} /></button></form>}</div></Reveal></div>
          <div className="contact-bottom"><span>Prefer email?</span><button onClick={handleCopy} className="email-copy">{copied ? <Icon name="check" size={15} /> : <Icon name="copy" size={15} />} {copied ? "Copied to clipboard" : "Copy hello@aether.dev"}</button><span className="contact-mark">A/</span></div>
        </section>
      </main>

      <footer className="site-footer"><a href="#top" className="brand"><span className="brand-mark">A/</span><span>AETHER<span className="brand-dot">.</span>DEV</span></a><span>© 2026 Aether Development</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <Icon name="external" size={13} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <Icon name="external" size={13} /></a></div></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.title} case study`} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close case study"><Icon name="close" size={20} /></button><ProjectVisual visual={activeProject.visual} /><div className="modal-content"><div className="project-meta"><span>{activeProject.number} / {activeProject.type}</span><span>{activeProject.year}</span></div><h2>{activeProject.title}</h2><p>{activeProject.description}</p><div className="tag-list">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{activeProject.caseStudyUrl && <a className="text-link" href={activeProject.caseStudyUrl}>Read full case study <Icon name="arrow" size={15} /></a>}{activeProject.url && <a className="text-link" href={activeProject.url} target="_blank" rel="noreferrer">View live project <Icon name="external" size={15} /></a>}</div></div></div>}
    </div>
  );
}
