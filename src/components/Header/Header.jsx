import "./Header.scss";
import logo from "../../assets/images/javascript-logo.png";
import { useState, useEffect } from "react";

export default function Header({visible}) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (visible == false){
      setHasScrolled(true);
    }
  }, [visible]);
  return (
    <div className={hasScrolled ? (visible ? "header header__reverse" : "header header__expand") : "header"}>
      <div className="header__logo">
        <img src={logo} className="header__logo-image"></img>
      </div>
      <ul className="header__list">
        <li className="header__list-item">About</li>
        <li className="header__list-item">Projects</li>
        <li className="header__list-item">Skills</li>
      </ul>
      <div className="header__contact">
        <button className="header__contact-button">Contact</button>
      </div>
    </div>
  );
}
