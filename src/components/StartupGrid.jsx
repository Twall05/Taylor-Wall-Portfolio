// src/components/StartupGrid.jsx
export default function StartupGrid({ startups }) {
  return (
    <div className="grid">
      {startups.map((s) => (
        <a key={s.name} className="gridCard" href={s.href} target="_blank" rel="noreferrer">
          <img className="gridLogo" src={s.logo} alt="" />
          <div className="gridBody">
            <h3 className="gridTitle">{s.name}</h3>
            <div className="muted">{s.tagline}</div>
            <div className="muted small">Founders: {s.founders}</div>
          </div>
        </a>
      ))}
    </div>
  );
}