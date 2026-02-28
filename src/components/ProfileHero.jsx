import linkedInIcon from "../assets/LinkedIn_icon.svg.png";
import gmailIcon from "../assets/Gmail_Icon.png";

const iconMap = {
  linkedin: linkedInIcon,
  gmail: gmailIcon,
};

export default function ProfileHero({ profile }) {
  return (
    <section id="top" className="hero">
      <div className="profileCard">
        <img className="profileImg" src={profile.image} alt="" />
      </div>

      <h1 className="name">{profile.name}</h1>
      <p className="subtitle">{profile.subtitleLine1}</p>
      <p className="subtitle">{profile.subtitleLine2}</p>

      <div className="iconRow" aria-label="Social links">
        {profile.social.map((s) => (
          <a
            key={s.label}
            className="iconBtn"
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
          >
            <img
              src={iconMap[s.icon]}
              alt={s.label}
              className="socialIcon"
            />
          </a>
        ))}
      </div>

      <div className="bio">
        <p>{profile.bio1}</p>
        <p>{profile.bio2}</p>
      </div>
    </section>
  );
}