import "./About.scss";
import aboutImage from "../../assets/images/my-photo.jpg";

export default function About() {
  function sendTo(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  return (
    <div className="about">
      <div className="about__container">
        <img src={aboutImage} alt="" className="about__image" />
      </div>
      <div className="about__container">
        <h1 className="about__title">Eo Soo Kim</h1>
        <h2 className="about__subtitle">Software Engineer</h2>
        <p className="about__body">Hello, i like game</p>
        <button
          className="about__button"
          onClick={() => sendTo("https://github.com/eosook")}
        >
          Github
        </button>
        <button
          className="about__button"
          onClick={() => sendTo("https://www.linkedin.com/in/eosoo/")}
        >
          LinkedIn
        </button>
        <button className="about__button">Let's Talk</button>
      </div>
    </div>
  );
}
