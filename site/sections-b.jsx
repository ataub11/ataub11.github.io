// More sections — archive, timeline, skills, contact.

const { useState: _useState2, useMemo: _useMemo2 } = React;

// ───────────────────────────── ARCHIVE ─────────────────────────────
const LINK_META = {
  video:  { icon: '▶',  label: 'Video' },
  repo:   { icon: '⌥',  label: 'Repo' },
  pdf:    { icon: '⊟',  label: 'PDF' },
  slides: { icon: '◫',  label: 'Slides' },
  doc:    { icon: '☰',  label: 'Doc' },
  site:   { icon: '↗',  label: 'Link' },
};

function ArchiveLink({ link }) {
  const meta = LINK_META[link.kind] || LINK_META.site;
  return (
    <a className="alink" href={link.url} target="_blank" rel="noreferrer">
      <span className="alink-icon">{meta.icon}</span>
      <span className="alink-label">{link.label || meta.label}</span>
      <span className="alink-arr">↗</span>
    </a>
  );
}

function Archive() {
  const items = window.SITE_DATA.archive;
  const [filter, setFilter] = _useState2('All');
  const [open, setOpen] = _useState2(null);
  const types = ['All', 'Internship', 'Project', 'Course', 'Research'];

  const filtered = items.filter((i) => filter === 'All' || i.type === filter);

  return (
    <section className="section archive" data-screen-label="04 Archive">
      <SectionHeader idx="03" title="Project Archive" meta="internships · coursework · research · click to expand" anchor="archive" />
      <div className="archive-filter">
        {types.map((t) => (
          <Chip key={t} active={filter === t} onClick={() => setFilter(t)}>{t}</Chip>
        ))}
        <span className="archive-count">{filtered.length} of {items.length}</span>
      </div>

      <div className="archive-table">
        <div className="archive-header">
          <span>№</span>
          <span>Year</span>
          <span>Type</span>
          <span>Org</span>
          <span>Title</span>
          <span>Tags</span>
          <span className="ar-h-art">Artifacts</span>
        </div>
        {filtered.map((item, i) => {
          const isOpen = open === item.id;
          const linkCount = (item.links || []).length;
          return (
            <div key={item.id} className={'archive-row-wrap ' + (isOpen ? 'is-open' : '')}>
              <button
                className="archive-row"
                onClick={() => setOpen(isOpen ? null : item.id)}
                aria-expanded={isOpen}
              >
                <span className="ar-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="ar-year">{item.year}</span>
                <span className="ar-type"><span className={'type-dot type-' + item.type.toLowerCase()} />{item.type}</span>
                <span className="ar-org">{item.org}</span>
                <span className="ar-title">
                  {item.title}
                  <span className="ar-chev">{isOpen ? '−' : '+'}</span>
                </span>
                <span className="ar-tags">{item.tags.map((t) => <span key={t} className="tag tag-sm">{t}</span>)}</span>
                <span className="ar-artifact-count">
                  {linkCount > 0 ? `${linkCount} link${linkCount === 1 ? '' : 's'}` : '—'}
                </span>
              </button>
              <div className="ar-detail" style={{ maxHeight: isOpen ? '900px' : '0px' }}>
                <div className="ar-detail-inner">
                  <p className="ar-blurb">{item.blurb}</p>
                  {item.images && item.images.length > 0 && (
                    <div className="ar-images">
                      {item.images.map((img, k) => (
                        <figure key={k} className="ar-fig">
                          <img src={img.src} alt={img.caption || item.title} loading="lazy" />
                          {img.caption && <figcaption>{img.caption}</figcaption>}
                        </figure>
                      ))}
                    </div>
                  )}
                  {linkCount > 0 ? (
                    <div className="ar-links">
                      {item.links.map((l, j) => <ArchiveLink key={j} link={l} />)}
                    </div>
                  ) : (
                    <div className="ar-links-empty">
                      <Label mark={false}>No public artifacts yet · ask for materials</Label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ───────────────────────────── TIMELINE ─────────────────────────────
function Timeline() {
  const items = window.SITE_DATA.timeline;
  return (
    <section className="section timeline" data-screen-label="05 Timeline">
      <SectionHeader idx="04" title="Experience" meta="Newest first" anchor="timeline" />
      <ol className="tl-list">
        {items.map((item, i) => (
          <li key={i} className="tl-item">
            <div className="tl-range"><Label mark={false}>{item.range}</Label></div>
            <div className="tl-node">
              <span className="tl-marker" />
              {i < items.length - 1 && <span className="tl-line" />}
            </div>
            <div className="tl-body">
              <h4 className="tl-org">{item.org}</h4>
              <p className="tl-role">{item.role}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ───────────────────────────── SKILLS ─────────────────────────────
function Skills() {
  const groups = window.SITE_DATA.skills;
  return (
    <section className="section skills" data-screen-label="06 Skills">
      <SectionHeader idx="05" title="Toolbox" meta="Languages · frameworks · CAD · fab" anchor="skills" />
      <div className="skills-grid">
        {Object.entries(groups).map(([name, list]) => (
          <div key={name} className="skill-group">
            <div className="skill-group-head">
              <Label>{name}</Label>
              <span className="skill-count">{String(list.length).padStart(2, '0')}</span>
            </div>
            <ul className="skill-list">
              {list.map((s) => <li key={s} className="skill"><span className="skill-bar" />{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ───────────────────────────── CONTACT ─────────────────────────────
function Contact() {
  const id = window.SITE_DATA.identity;
  return (
    <section className="section contact" data-screen-label="07 Contact" id="contact">
      <SectionHeader idx="06" title="Get in touch" meta="Always happy to talk shop" />
      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-headline">
            Working on something hard at the seam of hardware and software? I'd love to hear about it.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${id.email}`}>
              <span>{id.email}</span>
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
            <a className="btn btn-ghost" href="https://docs.google.com/document/d/17NFxus2aE1VrILBjT2sjbgEpIlVhkB-woeCl8IlRG8I/edit?usp=sharing" target="_blank" rel="noreferrer">
              <span>Resume</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </div>
        <aside className="contact-right">
          <CornerFrame>
            <dl className="contact-dl">
              <div><dt>Email</dt><dd><a href={`mailto:${id.email}`}>{id.email}</a></dd></div>
              <div><dt>Phone</dt><dd>{id.phone}</dd></div>
              <div><dt>Based</dt><dd>{id.location}</dd></div>
              <div><dt>Coords</dt><dd>{id.coords}</dd></div>
            </dl>
          </CornerFrame>
        </aside>
      </div>
    </section>
  );
}

// ───────────────────────────── FOOTER ─────────────────────────────
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="sf-row">
        <span><Label mark={false}>© {new Date().getFullYear()} Allison Taub</Label></span>
        <span><Label mark={false}>Hand-built · Last revision 05.2026</Label></span>
        <span><Label mark={false}>END OF DOCUMENT</Label></span>
      </div>
      <div className="sf-bar" />
    </footer>
  );
}

Object.assign(window, { Archive, Timeline, Skills, Contact, SiteFooter, LINK_META });
