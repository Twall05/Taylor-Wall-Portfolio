// src/components/Section.jsx
export default function Section({ id, title, children, rightLink }) {
  return (
    <section id={id} className="section">
      <div className="sectionHeader">
        <h2 className="sectionTitle">{title}</h2>
        {rightLink ? (
          <a className="sectionLink" href={rightLink.href}>
            {rightLink.label}
          </a>
        ) : null}
      </div>
      {children}
    </section>
  );
}