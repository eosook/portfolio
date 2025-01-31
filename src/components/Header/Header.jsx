import "./Header.scss";
import logo from "../../assets/images/javascript-logo.png";
import menuLogo from "../../assets/images/menu.gif";
import menuOpen from "../../assets/images/menu-open.png";
import menuClose from "../../assets/images/menu-close.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import { useState, useEffect } from "react";

export default function Header({ visible }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (visible == false) {
      setHasScrolled(true);
    }
  }, [visible]);

  function changeMode() {
    setMode(!mode);
  }

  function menuClick() {
    setOpenMenu(!openMenu);
  }

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
        <li className="header__list-item">About</li>
        <li className="header__list-item">Projects</li>
        <li className="header__list-item">Skills</li>
      </ul>
      <div className="header__right-container">
        <div className="header__mode">
          <img
            className="header__mode-image"
            src={mode === false ? sun : moon}
            onClick={changeMode}
          ></img>
        </div>
        <div className="header__contact">
          <button className="header__contact-button">Contact</button>
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
