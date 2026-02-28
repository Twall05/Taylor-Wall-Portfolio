// src/App.jsx
import "./App.css";
import TopNav from "./components/TopNav";
import ProfileHero from "./components/ProfileHero";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import profilePic from "./assets/ProfilePicture.png";

import {
  lastUpdated,
  navLinks,
  socialLinks,
  mainProfile,
  projects,
  work,
  awards,
  education,
  professionalDevelopment,
  links,
  hobbies,
} from "./data/siteData";

function Bullets({ bullets }) {
  if (!bullets?.length) return null;
  return (
    <ul className="bullets">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const profile = {
  ...mainProfile,
  image: profilePic,
  social: socialLinks,
  };

  return (
    <div className="page">
      <TopNav links={navLinks} />

      <main className="container">
        <ProfileHero profile={profile} />

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="list">
            {education.map((e) => (
              <ListItem key={e.title} item={e} />
            ))}
          </div>
        </Section>

        {/* WORK */}
        <Section id="work" title="Work">
          <div className="list">
            {work.map((w) => (
              <div className="listItem" key={w.title}>
                <h3 className="listTitle">
                  {w.title} <span className="pill">{w.venue}</span>
                </h3>
                <Bullets bullets={w.bullets} />
              </div>
            ))}
          </div>
        </Section>

        {/* PROFESSIONAL DEVELOPMENT */}
        <Section id="prodev" title="Professional Development">
          <div className="list">
            {professionalDevelopment.map((p) => (
              <ListItem key={p.title} item={p} />
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="list">
            {projects.map((p) => (
              <ListItem key={p.title} item={p} />
            ))}
          </div>
        </Section>

        {/* AWARDS */}
        <Section id="awards" title="Awards">
          <div className="list">
            {awards.map((a) => (
              <ListItem key={a.title} item={a} />
            ))}
          </div>
        </Section>

        {/* HOBBIES */}
        <Section id="hobbies" title="Hobbies">
          <div className="list">
            {hobbies.map((h) => (
              <div className="listItem" key={h.title}>
                <h3 className="listTitle">{h.title}</h3>
                <div className="muted">{h.description}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* LINKS */}
        <Section id="links" title="Links">
          <div className="linkGrid">
            {links.map((l) => (
              <a key={l.label} className="linkPill" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </Section>

        {/* Footer requirements: year, name, last update :contentReference[oaicite:21]{index=21} */}
        <footer className="footer">
          <div>© {new Date().getFullYear()} Taylor Wall</div>
          <div className="muted small">Last updated: {lastUpdated}</div>
        </footer>
      </main>
    </div>
  );
}