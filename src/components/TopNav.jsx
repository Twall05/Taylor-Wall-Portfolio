// src/components/TopNav.jsx
export default function TopNav({ links }) {
  return (
    <div className="topNavWrap">
      <nav className="topNav" aria-label="Primary">
        {links.map((l) => (
          <a key={l.label} className="topNavLink" href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}