import "./Project.scss";

export default function Project({
  image,
  title,
  description,
  siteUrl,
  techs,
  side,
}) {
  function toProject(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  if (side === "right") {
    return (
      <div className="project">
        <div className="project__container">
          <h2 className="project__title">{title}</h2>
          <p className="project__description">{description}</p>
          <div className="project__techs">
            React.js, Email Integration, Responsive Design
          </div>
          <button onClick={() => toProject(siteUrl)}>View Site</button>
        </div>
        <div className="project__container">
          <img src={image} alt="Project Image" className="project__image project__image-right" />
        </div>
      </div>
    );
  } else if (side === "left") {
    return (
      <div className="project">
        <div className="project__container">
          <img src={image} alt="Project Image" className="project__image project__image-left" />
        </div>
        <div className="project__container">
          <h2 className="project__title">{title}</h2>
          <p className="project__description">{description}</p>
          <div className="project__techs">
            React.js, Email Integration, Responsive Design
          </div>
          <button onClick={() => toProject(siteUrl)}>View Site</button>
        </div>
      </div>
    );
  }
}
