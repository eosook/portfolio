import "./ProjectCard.scss";
import cilesiaLogo from "../../assets/images/cilesiaLogo.png";
import cilesiaImage from "../../assets/images/Cilesia Website.png";
import gameRecImage from "../../assets/images/GameRec.png";
import invoiceImage from "../../assets/images/Invoice App Dark.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ projectNumber, closeWork, changeWork, selectedWork, description, logo, image }) {
  return (
    <motion.div
      className={"projects__mini"}
      layout
      onClick={() => {
        selectedWork == projectNumber ? closeWork() : changeWork(projectNumber);
      }}
      initial={{ borderRadius: 16 }}
      animate={{
        width: selectedWork == projectNumber ? "100vw" : "300px",
        height: selectedWork == projectNumber ? "500px" : "400px",
        borderRadius: selectedWork == projectNumber ? 0 : 16,
      }}
      exit={{}}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <button
        className="projects__mini-close"
        onClick={(event) => {
          event.stopPropagation();
          closeWork();
        }}
      >
        X
      </button>
      <img
        className="projects__mini-logo"
        src={logo}
        alt="cilesia beauty bar logo"
      ></img>
      <img
        className="projects__mini-image"
        src={image}
        alt="cilesia website image"
      ></img>
    </motion.div>
  );
}
