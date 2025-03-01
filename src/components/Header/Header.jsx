import "./Header.scss";
import logo from "../../assets/images/javascript-logo.png";
import menuLogo from "../../assets/images/menu.gif";
import menuOpen from "../../assets/images/menu-open.png";
import menuClose from "../../assets/images/menu-close.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import { useState, useEffect } from "react";

export default function Header({ visible, darkMode, setDarkMode }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (visible == false) {
      setHasScrolled(true);
    }
  }, [visible]);

  function changeMode() {
    setDarkMode(!darkMode);
  }

  function menuClick() {
    setOpenMenu(!openMenu);
  }

  const sendTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={
        hasScrolled
          ? visible
            ? "header header__reverse"
            : "header header__expand"
          : "header"
      }
    >
      <div className="header__logo">
        <img src={logo} className="header__logo-image"></img>
      </div>
      <ul className="header__list">
        <li className="header__list-home" onClick={() => sendTo("home")}>Home</li>
        <li className="header__list-item" onClick={() => sendTo("projects")}>Projects</li>
        <li className="header__list-item" onClick={() => sendTo("skills")}>Skills</li>
      </ul>
      <div className="header__right-container">
        <div className="header__mode">
          <img
            className="header__mode-image"
            src={darkMode === false ? sun : moon}
            onClick={changeMode}
          ></img>
        </div>
        <div className="header__contact">
          <button className="header__contact-button" onClick={() => sendTo("contact")}>Contact</button>
        </div>
        <div className="header__menu">
          <img
            src={menuOpen}
            className="header__menu-image"
            onClick={menuClick}
          ></img>
        </div>
      </div>
    </div>
  );
}
