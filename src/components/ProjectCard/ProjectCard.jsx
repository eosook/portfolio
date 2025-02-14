import "./ProjectCard.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import externalLink from "../../assets/images/external-link.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

var cardVariants = {
  expanded: { width: "100vw", height: "600px", borderRadius: 16 },
  collapsed: { width: "200px", height: "200px", borderRadius: 16 },
};

export default function ProjectCard({
  projectNumber,
  title,
  closeWork,
  changeWork,
  selectedWork,
  description,
  logo,
  image,
  techs,
  link,
}) {
  const [showOtherCards, setShowOtherCards] = useState(true);
  const [mobileAnimationComplete, setMobileAnimationComplete] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;
  const isTablet = width <= 1280;

  function handleWindowChange() {
    setWidth(window.innerWidth);
  }

  function mobileClose() {
    if (isMobile) {
      setMobileAnimationComplete(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);
    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  useEffect(() => {
    if (selectedWork == 0) {
      setMobileAnimationComplete(false);
    }
  }, [selectedWork]);

  useEffect(() => {
    if (isMobile) {
      cardVariants = {
        expanded: { width: "100vw", height: "600px", borderRadius: 16 },
        collapsed: { width: "200px", height: "200px", borderRadius: 16 },
      };
    } else if (isTablet) {
      cardVariants = {
        expanded: {
          width: "100vw",
          height: "600px",
          borderRadius: 16,
          zIndex: 1,
        },
        collapsed: {
          width: "250px",
          height: "400px",
          borderRadius: 16,
          zIndex: 0,
        },
      };
    } else {
      cardVariants = {
        expanded: {
          width: ["300px", "600px", "1200px"],
          height: "600px",
          borderRadius: 16,
          zIndex: 1,
        },
        collapsed: {
          width: "300px",
          height: "500px",
          borderRadius: 16,
          zIndex: 0,
        },
      };
    }
  }, [width]);

  function linkTo(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  return (
    <AnimatePresence>
      {selectedWork == 0 || selectedWork == projectNumber ? (
        <motion.div
          key={projectNumber}
          className={
            selectedWork == projectNumber
              ? "project-card project-card__expanded"
              : "project-card"
          }
          layout
          onClick={() => {
            if (selectedWork == projectNumber) {
              setShowOtherCards(false);
            } else {
              changeWork(projectNumber);
            }
          }}
          variants={cardVariants}
          initial={{ borderRadius: 16 }}
          animate={selectedWork == projectNumber ? "expanded" : "collapsed"}
          exit={{}}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.75, 1],
            delay: 0.25,
          }}
          onAnimationComplete={() => {
            if (selectedWork !== projectNumber) {
              setShowOtherCards(true);
            }
          }}
          whileHover={
            selectedWork !== projectNumber
              ? {
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }
              : ""
          }
          whileTap={{ scale: 0.9 }}
        >
          <img
            className="project-card__logo"
            src={logo}
            alt="cilesia beauty bar logo"
          ></img>
          {selectedWork == projectNumber ? (
            <div className="project-card__container">
              <img
                className="project-card__back-arrow"
                src={leftArrow}
                onClick={(event) => {
                  event.stopPropagation();
                  closeWork();
                }}
              ></img>
              <div className="project-card__content">
                <div>
                  <h2 className="project-card__title">
                    {title}{" "}
                    <img
                      src={externalLink}
                      className="project-card__external"
                      onClick={() => linkTo(link)}
                    />
                  </h2>
                </div>
                <p className="project-card__description">{description}</p>
              </div>
              <div className="project-card__techs">
                {techs.map((tech, index) => {
                  return (
                    <div key={index} className="project-card__techs--item">
                      {tech}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <img
            className={
              selectedWork == projectNumber
                ? "project-card__image project-card__image-expanded"
                : "project-card__image"
            }
            src={image}
            alt="cilesia website image"
          ></img>
        </motion.div>
      ) : showOtherCards ? (
        <motion.div
          key={projectNumber}
          id="project-card"
          className={
            mobileAnimationComplete
              ? "project-card project-card__remove"
              : "project-card"
          }
          initial={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          animate={{ scaleX: 0, scaleY: 0.2, opacity: 1, display: "none" }}
          exit={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          onAnimationComplete={() => mobileClose()}
          transition={{ duration: 0.25 }}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
}
