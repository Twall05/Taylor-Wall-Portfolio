// src/components/ListItem.jsx
export default function ListItem({ item }) {
  return (
    <div className="listItem">
      <h3 className="listTitle">
        <a href={item.href} target="_blank" rel="noreferrer">
          {item.title}
        </a>{" "}
        <span className="pill">{item.venue}</span>
      </h3>
      {item.date ? <div className="muted small">{item.date}</div> : null}
      {item.authors ? <div className="muted">{item.authors}</div> : null}
      {item.body ? <div className="muted">{item.body}</div> : null}
      {item.cta ? (
        <a className="smallLink" href={item.href} target="_blank" rel="noreferrer">
          {item.cta}
        </a>
      ) : null}
    </div>
  );
}