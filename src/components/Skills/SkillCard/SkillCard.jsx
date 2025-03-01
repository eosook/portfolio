import "./SkillCard.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillCard({ logo, name, type, currentSkill }) {
  return (
    <AnimatePresence>
      {currentSkill == "all" || currentSkill == type ? (
        <motion.div
          className="skill-card"
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: {delay: 0.3} }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", bounce: 0.5, duration: 0.3 },
            borderRadius: "32px",
          }}
        >
          <img className="skill-card__image" src={logo}></img>
          <h4 className="skill-card__name">{name}</h4>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}
