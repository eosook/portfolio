import "./Header.scss";
import logo from "../../assets/images/ek-logo-transparent.png";
import menuLogo from "../../assets/images/menu.gif";
import menuOpen from "../../assets/images/menu-open.png";
import menuClose from "../../assets/images/menu-close.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ visible, darkMode, setDarkMode }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const headerList = ["home", "projects", "skills", "contact"];

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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
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
        <li className="header__list-home" onClick={() => scrollTo("home")}>
          Home
        </li>
        <li className="header__list-item" onClick={() => scrollTo("projects")}>
          Projects
        </li>
        <li className="header__list-item" onClick={() => scrollTo("skills")}>
          Skills
        </li>
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
          <button
            className="header__contact-button"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </div>
        <div className="header__menu">
          <img
            src={menuOpen}
            className="header__menu-image"
            onClick={menuClick}
          ></img>
        </div>
        <AnimatePresence>
          {openMenu ? (
            <motion.div
              className="header__dropdown-menu"
              initial={{ scale: 1 }}
              animate={{
                scale: 1.4,
                transition: { type: "spring", bounce: 0.6, duration: 0.4 },
              }}
              exit={{ scale: 1 }}
            >
              <ul className="header__dropdown-list">
                <div className="header__dropdown-list-arrow"></div>
                {headerList.map((item) => (
                  <motion.li
                    key={item}
                    className="header__dropdown-list-item"
                    onClick={() => scrollTo(item)}
                    whileHover={{ scale: 1.1, color: "white" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
