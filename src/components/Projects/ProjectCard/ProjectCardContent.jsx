import leftArrow from "../../../assets/images/left-arrow.png";
import externalLink from "../../../assets/images/external-link.png";

export default function ProjectCardContent({
  logo,
  title,
  description,
  techs,
  link,
  closeWork,
}) {
  function openLink(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="project-card__container">
      <img
        className="project-card__back-arrow"
        src={leftArrow}
        onClick={closeWork}
        alt="Back"
      />
      <div className="project-card__content">
        <div className="project-card__content-top">
          <img
            className="project-card__logo"
            src={logo}
            alt={`${title} logo`}
          />
          <h2 className="project-card__title">
            {title}{" "}
            <img
              src={externalLink}
              className="project-card__external"
              onClick={() => openLink(link)}
              alt="Open"
            />
          </h2>
        </div>
        <p className="project-card__description">{description}</p>
      </div>

      <div className="project-card__techs">
        {techs.map((tech, index) => (
          <div key={index} className="project-card__techs--item">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
