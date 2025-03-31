import "./ProjectCard.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
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
  const width = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width < 1280;

  useEffect(() => {
    if (isMobile) {
      cardVariants = {
        expanded: {
          width: "85dvw",
          height: "600px",
          borderRadius: 24,
        },
        collapsed: { width: "90%", height: "150px", borderRadius: 16, position: "relative" },
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
          height: "250px",
          borderRadius: 16,
          zIndex: 0,
        },
      };
    } else {
      cardVariants = {
        expanded: {
          width: "1000px",
          height: "650px",
          borderRadius: 48,
          zIndex: 1,
        },
        collapsed: {
          width: "300px",
          height: "500px",
          borderRadius: 16,
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
            duration: 0.4,
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
                  borderRadius: isMobile ? 36 : 48 ,
                  border:
                    "2px solid color-mix(in srgb, var(--tertiary) 60%, black)",
                }
              : ""
          }
          whileTap={{ scale: 0.95 }}
        >
          <motion.div>
            
          </motion.div>
          <img
            className={
              selectedWork == projectNumber
                ? "project-card__logo project-card__logo--remove"
                : "project-card__logo"
            }
            src={logo}
            alt={`${title} logo`}
          />
          <h2
            className={
              selectedWork == projectNumber
                ? "project-card__title--collapsed project-card__title--remove"
                : "project-card__title--collapsed"
            }
          >
            {title}
          </h2>
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
      ) : null}
    </AnimatePresence>
  );
}
