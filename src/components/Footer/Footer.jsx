import "./Footer.scss";
import githubLogo from '../../assets/images/github-logo.png';
import linkedInLogo from '../../assets/images/linkedin-logo.png';

export default function Footer() {

    function sendTo(url) {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) {
          newWindow.opener = null;
        }
      }

  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__copyright">C</div>
        <h2 className="footer__name">Eo Soo Kim</h2>
      </div>
      <div className="footer__section footer__links">
        <img className="footer__link" src={githubLogo} alt="github logo" onClick={() => sendTo("https://github.com/eosook")}></img>
        <img className="footer__link" src={linkedInLogo} alt="linkedIn logo"  onClick={() => sendTo("https://www.linkedin.com/in/eosoo/")}></img>
      </div>
    </div>
  );
}
