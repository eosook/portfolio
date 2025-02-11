import "./ProjectCard.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cardVariants = {
  expanded: { width: "100vw", height: "600px", borderRadius: 16 },
  collapsed: { width: "300px", height: "500px", borderRadius: 16 },
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
              closeWork();
            } else {
              changeWork(projectNumber);
            }
          }}
          variants={cardVariants}
          initial={{ borderRadius: 16 }}
          animate={selectedWork == projectNumber ? "expanded" : "collapsed"}
          exit={{}}
          transition={{ duration: 0.4, ease: "easeIn" }}
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
                  border: "1px solid black",
                }
              : ""
          }
          whileTap={{ scale: 0.9 }}
        >
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
                  <img
                    className="project-card__logo"
                    src={logo}
                    alt="cilesia beauty bar logo"
                  ></img>
                  <h2 className="project-card__title">{title}</h2>
                </div>
                <p className="project-card__description">{description}</p>
              </div>
              <div className="project-card__techs">
                {techs.map((tech) => {
                  return (
                    <div className="project-card__techs--item">
                      {tech}
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <img
            className={selectedWork == projectNumber ? "project-card__image project-card__image-expanded" : "project-card__image"}
            src={image}
            alt="cilesia website image"
          ></img>
        </motion.div>
      ) : showOtherCards ? (
        <motion.div
          key={projectNumber}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
}
