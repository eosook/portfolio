import "./SkillCard.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillCard({ logo, name }) {
  return (
    <AnimatePresence>
      <motion.div
        className="skill-card"
        start={{}}
        animate={{}}
        exit={{}}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", bounce: 0.5, duration: 0.3 },
          borderRadius: "32px",
        }}
      >
        <img className="skill-card__image" src={logo}></img>
        <h4 className="skill-card__name">{name}</h4>
      </motion.div>
    </AnimatePresence>
  );
}
