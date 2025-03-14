import "./ProjectCard.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCardContent from "./ProjectCardContent";
import ProjectCardImage from "./ProjectCardImage";
import useWindowSize from "../../../hooks/useWindowSize";

var cardVariants = {};

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
  const width = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width < 1280;

  function mobileClose() {
    if (isMobile) {
      setMobileAnimationComplete(true);
    }
  }

  useEffect(() => {
    if (selectedWork == 0) {
      setMobileAnimationComplete(false);
    }
  }, [selectedWork]);

  useEffect(() => {
    if (isMobile) {
      cardVariants = {
        expanded: {
          width: "100vw",
          height: "600px",
          borderRadius: 24,
          position: ["relative", "absolute", "relative"],
        },
        collapsed: { width: "160px", height: "160px", borderRadius: 16 },
      };
    } else if (isTablet) {
      cardVariants = {
        expanded: {
          width: "100vw",
          height: "600px",
          borderRadius: 48,
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
          width: ["300px", "600px", "1000px"],
          height: "600px",
          borderRadius: 48,
          zIndex: 1,
          position: ["relative", "absolute", "relative"],
        },
        collapsed: {
          width: "300px",
          height: "500px",
          borderRadius: 16,
          position: "relative",
        },
      };
    }
  }, [width]);

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
              setShowOtherCards(true);
            } else {
              changeWork(projectNumber);
            }
          }}
          variants={cardVariants}
          initial={{}}
          animate={selectedWork == projectNumber ? "expanded" : "collapsed"}
          exit={{}}
          transition={{
            visualDuration: 0.75,
            times: [0, 0.5, 1],
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
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.5, duration: 0.3 },
                  borderRadius: 48,
                  border:
                    "2px solid color-mix(in srgb, var(--primary) 60%, black)",
                }
              : ""
          }
          whileTap={{ scale: 0.9 }}
        >
          <img
            className={
              selectedWork == projectNumber
                ? "project-card__logo project-card__logo--remove"
                : "project-card__logo"
            }
            src={logo}
            alt={`${title} logo`}
          />
          <div className="project-card__wrapper">
            {selectedWork === projectNumber && (
              <ProjectCardContent
                logo={logo}
                title={title}
                description={description}
                techs={techs}
                link={link}
                closeWork={closeWork}
              />
            )}
            <ProjectCardImage
              image={image}
              expanded={selectedWork === projectNumber}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </div>
        </motion.div>
      ) : showOtherCards ? (
        <motion.div
          key={`card-${projectNumber}`}
          id="project-card"
          className={
            mobileAnimationComplete
              ? "project-card project-card__remove"
              : "project-card"
          }
          layout
          initial={{ scale: 0, opacity: 1, padding: 0 }}
          animate={{ scale: 1, display: "none", opacity: 0, padding: 0 }}
          exit={{scale: 0, display: "none", opacity: 0, padding: 0}}
          onAnimationComplete={() => mobileClose()}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
}
