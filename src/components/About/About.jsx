import "./About.scss";
import aboutImage from "../../assets/images/my-photo.jpg";
import githubLogo from "../../assets/images/github-logo.png";
import linkedInLogo from "../../assets/images/linkedin-logo.png";

export default function About() {
  function sendTo(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__container">
          <img
            src={aboutImage}
            alt="profile picture"
            className="about__image"
          />
        </div>
        <div className="about__container about__main">
          <h1 className="about__title">Eo Soo Kim</h1>
          <h2 className="about__subtitle">Software Engineer</h2>
          <p className="about__body">
            Hey, I'm Eo Soo Kim , a software engineer with a background in
            mathematics and a passion for building efficient, user-friendly
            applications.
          </p>
          <p className="about__body">
            I specialize in JavaScript and React, crafting dynamic single-page
            applications with a focus on performance and seamless user
            experiences.
          </p>
          <p className="about__body">
            I'm always looking for exciting opportunities to grow and
            contribute. Feel free to check out my work and connect!
          </p>
          <div className="about__link-container">
            <div className="about__link-wrapper">
              <div className="about__link about__link--github">
                <span className="about__link-text about__link-text-github">Github</span>
                <img
                  className="about__link-logo github-logo"
                  src={githubLogo}
                  onClick={() => sendTo("https://github.com/eosook")}
                />
              </div>
              <div className="about__link about__link--linkedin">
                <span className="about__link-text about__link-text-linkedin">LinkedIn</span>
                <img
                  className="about__link-logo linkedin-logo"
                  src={linkedInLogo}
                  onClick={() => sendTo("https://www.linkedin.com/in/eosoo/")}
                />
              </div>
            </div>

            <button className="about__button" onClick={() => scrollTo("contact")}>Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}
