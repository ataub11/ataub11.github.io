// Shared schematic UI primitives.
// Exported to window so the other Babel scripts can use them.

const { useEffect, useRef, useState } = React;

// Corner brackets — schematic-frame style.
function CornerFrame({ children, color, padding, className, style }) {
  const c = color || 'var(--ink)';
  const p = padding || 16;
  return (
    <div className={'corner-frame ' + (className || '')} style={{ position: 'relative', padding: p, ...(style || {}) }}>
      <span className="cf cf-tl" style={{ borderColor: c }} />
      <span className="cf cf-tr" style={{ borderColor: c }} />
      <span className="cf cf-bl" style={{ borderColor: c }} />
      <span className="cf cf-br" style={{ borderColor: c }} />
      {children}
    </div>
  );
}

// Small uppercase mono label with a leading marker.
function Label({ children, mark, color }) {
  return (
    <span className="mlabel" style={{ color: color || 'var(--muted)' }}>
      {mark !== false && <span className="mlabel-mark">[+]</span>}
      <span>{children}</span>
    </span>
  );
}

// Coordinate stamp e.g. "FIG.04 · 40.8N / 73.7W"
function Stamp({ children }) {
  return <div className="stamp">{children}</div>;
}

// Hairline divider with optional label.
function Rule({ label, dashed }) {
  return (
    <div className={'rule ' + (dashed ? 'rule-dashed' : '')}>
      <span className="rule-line" />
      {label && <span className="rule-label">{label}</span>}
      <span className="rule-line" />
    </div>
  );
}

// Section header — index + title + meta.
function SectionHeader({ idx, title, meta, anchor }) {
  return (
    <header className="section-head" id={anchor}>
      <div className="section-head-row">
        <span className="section-idx">§{idx}</span>
        <h2 className="section-title">{title}</h2>
        {meta && <span className="section-meta">{meta}</span>}
      </div>
      <div className="hairline" />
    </header>
  );
}

// Animated count-up — used in the tracker / stats.
function CountUp({ to, duration, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let raf;
    let start;
    const d = duration || 900;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / d);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix || ''}</span>;
}

// Crosshair that follows the cursor inside a container.
function HeroCrosshair() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, on: false });
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPos({ x, y, on: x >= 0 && y >= 0 && x <= rect.width && y <= rect.height });
      setCoord({
        x: Math.round((x / rect.width) * 1000),
        y: Math.round((y / rect.height) * 1000),
      });
    };
    const onLeave = () => setPos((p) => ({ ...p, on: false }));
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return (
    <div ref={ref} className="hero-crosshair-host">
      <div className="hero-crosshair" style={{ opacity: pos.on ? 1 : 0, transform: `translate(${pos.x}px, ${pos.y}px)` }}>
        <span className="ch-v" />
        <span className="ch-h" />
        <span className="ch-c" />
        <span className="ch-coord">X{String(coord.x).padStart(4,'0')} · Y{String(coord.y).padStart(4,'0')}</span>
      </div>
    </div>
  );
}

// Pill / chip.
function Chip({ children, active, onClick }) {
  return (
    <button type="button" className={'chip ' + (active ? 'chip-active' : '')} onClick={onClick}>
      <span className="chip-dot" />
      {children}
    </button>
  );
}

// Tiny SVG decorative tile — a grid of measurement ticks.
function TickGrid({ w, h, gap }) {
  const W = w || 200, H = h || 60, G = gap || 14;
  const cols = Math.floor(W / G);
  const rows = Math.floor(H / G);
  const els = [];
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const x = c * G;
      const y = r * G;
      const len = (c % 5 === 0 && r % 5 === 0) ? 5 : 2;
      els.push(<line key={`${r}-${c}`} x1={x} y1={y - len} x2={x} y2={y + len} stroke="currentColor" strokeWidth="0.6" />);
      els.push(<line key={`h-${r}-${c}`} x1={x - len} y1={y} x2={x + len} y2={y} stroke="currentColor" strokeWidth="0.6" />);
    }
  }
  return <svg className="tickgrid" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>{els}</svg>;
}

// Specimen number sticker.
function SpecimenTag({ no, label }) {
  return (
    <div className="specimen">
      <span className="specimen-no">№ {no}</span>
      {label && <span className="specimen-l">{label}</span>}
    </div>
  );
}

Object.assign(window, {
  CornerFrame, Label, Stamp, Rule, SectionHeader, CountUp,
  HeroCrosshair, Chip, TickGrid, SpecimenTag,
});
