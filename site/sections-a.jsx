// Top-level sections for Allison's site.

const { useState, useEffect, useMemo, useRef } = React;

// ───────────────────────────── HEADER ─────────────────────────────
function SiteHeader() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      setT(`${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}Z`);
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="site-header">
      <div className="sh-left">
        <span className="sh-mark">AT</span>
        <span className="sh-name">Allison Taub</span>
      </div>
      <nav className="sh-nav">
        <a href="#about">About</a>
        <a href="#work">Selected Work</a>
        <a href="#archive">Archive</a>
        <a href="#timeline">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="sh-right">
        <span className="sh-status"><span className="sh-dot" /> Currently @ Woven by Toyota</span>
        <span className="sh-time">{t}</span>
      </div>
    </header>
  );
}

// ───────────────────────────── HERO ─────────────────────────────
function Hero() {
  const id = window.SITE_DATA.identity;
  return (
    <section className="hero" data-screen-label="01 Hero">
      <HeroCrosshair />
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-meta-top">
          <span><Label mark={false}>FIG.00</Label></span>
          <span><Label mark={false}>Personal Portfolio · v2.1</Label></span>
          <span><Label mark={false}>Rev. 2026</Label></span>
        </div>

        <div className="hero-rows">
          <div className="hero-row hero-row-1">
            <span className="hero-bracket">[</span>
            <h1 className="hero-name">Allison<br/>Taub</h1>
            <span className="hero-bracket">]</span>
          </div>

          <div className="hero-row hero-row-2">
            <div className="hero-portrait-wrap">
              <CornerFrame padding={0}>
                <image-slot
                  id="hero-portrait"
                  shape="rect"
                  src="images/headshot.jpg"
                  placeholder="Drop your headshot here →"
                  style={{ width: '260px', height: '320px', display: 'block' }}
                ></image-slot>
              </CornerFrame>
              <div className="hero-portrait-cap">
                <span>Fig. A · Subject</span>
                <span>260 × 320 mm</span>
              </div>
            </div>

            <div className="hero-tagline-block">
              <p className="hero-tagline">
                Mechanical engineer &amp; computer scientist working at the seam between <em>hardware</em>,
                <em> embedded systems</em>, and <em>machine learning</em>.
              </p>
              <p className="hero-sub">
                Vehicle Integration Engineer at Woven by Toyota. Previously: simulation software at
                The Aerospace Corporation, advanced vehicle design at GM, R&amp;D at iRobot, and a three-year
                run with Duke's XPRIZE rainforest drone team.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">
                  <span>Selected Work</span>
                  <span className="btn-arrow">↓</span>
                </a>
                <a className="btn btn-ghost" href="https://docs.google.com/document/d/17NFxus2aE1VrILBjT2sjbgEpIlVhkB-woeCl8IlRG8I/edit?usp=sharing" target="_blank" rel="noreferrer">
                  <span>Resume</span>
                  <span className="btn-arrow">↗</span>
                </a>
                <a className="btn btn-ghost" href={id.linkedin} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <span className="btn-arrow">↗</span>
                </a>
                <a className="btn btn-ghost" href={id.github} target="_blank" rel="noreferrer">
                  <span>GitHub</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-spec">
          <SpecimenTag no="01" label="Mountain View, CA · 37.4°N 122.1°W" />
          <SpecimenTag no="02" label="B.S.E + B.A · Duke '24" />
          <SpecimenTag no="03" label="Robotics & Automation Cert." />
          <SpecimenTag no="04" label="Vehicle Integration · Woven by Toyota" />
        </div>
      </div>

      <div className="hero-footer">
        <span>scroll for details</span>
        <span className="hero-arrow">↓</span>
      </div>
    </section>
  );
}

// ───────────────────────────── ABOUT ─────────────────────────────
function About() {
  const id = window.SITE_DATA.identity;
  return (
    <section className="section about" data-screen-label="02 About">
      <SectionHeader idx="01" title="About" meta="A note from the engineer" anchor="about" />
      <div className="about-grid">
        <div className="about-left">
          <p className="about-lead">
            {id.statement}
          </p>
          <p className="about-body">
            My expertise spans engineering design and system integration — mechanical engineering,
            embedded software, and computer vision. Recent highlights: validating ECU integration
            across CAN/UDP/Serial networks at Woven by Toyota, distributed Java simulations of
            in-orbit vehicle dynamics at The Aerospace Corporation, a perception-driven cable insertion
            policy for a UR5e arm (mAP50 = 0.995), a three-year drone-swarm program for XPRIZE
            Rainforest, and Bot Ross — a robot that creates paintings with the inaccuracies of a
            human hand.
          </p>
        </div>
        <aside className="about-right">
          <CornerFrame>
            <div className="about-card-title"><Label>Profile</Label></div>
            <dl className="about-dl">
              <div><dt>Discipline</dt><dd>ME × CS × Robotics</dd></div>
              <div><dt>Education</dt><dd>Duke University, '24</dd></div>
              <div><dt>Based</dt><dd>Mountain View, CA</dd></div>
              <div><dt>Currently</dt><dd>Woven by Toyota</dd></div>
              <div><dt>Stack</dt><dd>ROS2 · Python · C/C++ · CAN</dd></div>
              <div><dt>CAD</dt><dd>SolidWorks · Siemens NX</dd></div>
            </dl>
          </CornerFrame>
        </aside>
      </div>
    </section>
  );
}

// ───────────────────────────── FEATURED WORK ─────────────────────────────
function FeaturedWork() {
  const [open, setOpen] = useState(null);
  const items = window.SITE_DATA.featured;
  return (
    <section className="section work" data-screen-label="03 Selected Work">
      <SectionHeader idx="02" title="Selected Work" meta={`${items.length} featured projects · click to expand`} anchor="work" />
      <div className="work-list">
        {items.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            isOpen={open === p.id}
            onToggle={() => setOpen(open === p.id ? null : p.id)}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <article className={'project ' + (isOpen ? 'project-open' : '')}>
      <button className="project-head" onClick={onToggle} aria-expanded={isOpen}>
        <span className="project-idx">{project.idx}</span>
        <div className="project-head-text">
          <span className="project-kicker"><Label>{project.kicker}</Label> <span className="project-year">· {project.year}</span></span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>
        <span className="project-toggle" aria-hidden="true">
          <span className="pt-line pt-h" />
          <span className={'pt-line pt-v ' + (isOpen ? 'pt-rot' : '')} />
        </span>
      </button>

      <div className="project-body" style={{ maxHeight: isOpen ? '2400px' : '0px' }}>
        <div className="project-body-inner">
          <div className="project-body-grid">
            <div className="project-image">
              <CornerFrame padding={0}>
                {project.slotMp4 ? (
                  <video
                    src={project.slotMp4}
                    controls
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', background: 'var(--bg-2)', objectFit: 'contain' }}
                  ></video>
                ) : project.slotVideo ? (
                  <iframe
                    src={project.slotVideo}
                    title={project.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', border: 0 }}
                  ></iframe>
                ) : project.slotFit === 'natural' && project.slotSrc ? (
                  <img
                    src={project.slotSrc}
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  <image-slot
                    id={project.slotId}
                    shape="rect"
                    placeholder={`Drop: ${project.slotHint}`}
                    src={project.slotSrc || undefined}
                    fit={project.slotFit || 'cover'}
                    style={{ width: '100%', aspectRatio: '16 / 9', display: 'block' }}
                  ></image-slot>
                )}
              </CornerFrame>
              <Stamp>FIG.{project.idx} · {project.title}</Stamp>
            </div>

            <div className="project-copy">
              <dl className="project-meta">
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                <div><dt>Org</dt><dd>{project.org}</dd></div>
                <div><dt>Year</dt><dd>{project.year}</dd></div>
              </dl>

              {project.body.map((para, i) => (
                <p key={i} className="project-para">{para}</p>
              ))}

              <div className="project-stats">
                {project.stats.map((s, i) => (
                  <div key={i} className="pstat">
                    <span className="pstat-k">{s.k}</span>
                    <span className="pstat-l">{s.l}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="project-links">
                  <div className="project-links-label"><Label>Artifacts</Label></div>
                  <div className="project-links-row">
                    {project.links.map((l, i) => (
                      <a key={i} className="alink" href={l.url} target="_blank" rel="noreferrer">
                        <span className="alink-icon">{(window.LINK_META && window.LINK_META[l.kind] || { icon: '↗' }).icon}</span>
                        <span className="alink-label">{l.label}</span>
                        <span className="alink-arr">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { SiteHeader, Hero, About, FeaturedWork });
