import "./Projects.scss";
import Project from "../Project/Project";
import cilesiaImage from "../../assets/images/Cilesia Website.png";
import gameRecImage from "../../assets/images/GameRec.png";
import invoiceImage from "../../assets/images/Invoice App Dark.png";
import cilesiaLogo from "../../assets/images/cilesiaLogo.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedWork, setSelectedWork] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  function changeWork(number) {
    setSelectedWork(number);
    document.body.classList.add("remove__scroll");
  }
  function closeWork() {
    setSelectedWork(0);
    document.body.classList.remove("remove__scroll");
  }
  return (
    <div className="projects">
      <div className="projects__header">Some of my work</div>
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bg-blue-500 p-4 text-white cursor-pointer"
        initial={false}
        animate={{
          width: isExpanded ? "100vw" : "200px",
          height: isExpanded ? "100vh" : "150px",
          top: isExpanded ? 0 : "50px",
          left: isExpanded ? 0 : "50px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Click to {isExpanded ? "shrink" : "expand"}
      </motion.div>
      <div className="projects__section">
        <div
          className={
            selectedWork == 1
              ? "projects__mini projects__mini-expand"
              : selectedWork == 0
              ? "projects__mini"
              : "projects__mini-remove"
          }
          onClick={() => changeWork(1)}
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
            src={cilesiaLogo}
            alt="cilesia beauty bar logo"
          ></img>
          <img
            className="projects__mini-image"
            src={cilesiaImage}
            alt="cilesia website image"
          ></img>
        </div>
        <div
          className={
            selectedWork == 2
              ? "projects__mini projects__mini-expand"
              : selectedWork !== 0
              ? "projects__mini-remove"
              : "projects__mini"
          }
          onClick={() => setSelectedWork(2)}
        >
          <div className="projects__mini-close">X</div>
          <img
            className="projects__mini-logo"
            src={cilesiaLogo}
            alt="cilesia beauty bar logo"
          ></img>
          <img
            className="projects__mini-image"
            src={gameRecImage}
            alt="cilesia website image"
          ></img>
        </div>
        <div
          className={
            selectedWork == 3
              ? "projects__mini projects__mini-expand"
              : selectedWork !== 0
              ? "projects__mini-remove"
              : "projects__mini"
          }
          onClick={() => setSelectedWork(3)}
        >
          <img
            className="projects__mini-logo"
            src={cilesiaLogo}
            alt="cilesia beauty bar logo"
          ></img>
          <img
            className="projects__mini-image"
            src={invoiceImage}
            alt="cilesia website image"
          ></img>
        </div>
      </div>
      <Project
        image={cilesiaImage}
        title={"Cilesia Beauty Bar"}
        description={
          "I designed and developed a modern, user-friendly website for a small beauty business specializing in lash services. Collaborating closely with the client, I crafted a custom design that aligns with their brand identity while ensuring functionality for both users and the business owner."
        }
        siteUrl={"https://cilesiabeautybar.com"}
        techs={["React.js", "Email Integration", "Responsive Design"]}
        side={"right"}
      />
      <Project
        image={gameRecImage}
        title={"GameRec"}
        description={
          "I developed a full-stack web application designed to help users discover new games tailored to their preferences. The platform integrates with the IGDB API from Twitch to fetch detailed game information, while users can create personalized accounts, maintain wishlists, and explore game recommendations."
        }
        siteUrl={"https://cilesiabeautybar.com"}
        techs={[
          "React.js",
          "Node.js",
          "IGDB API",
          "SQL",
          "Full-Stack Development",
        ]}
        side={"left"}
      />
      <Project
        image={invoiceImage}
        title={"Invoice Tracker"}
        description={
          "I built this full-stack web application as a hands-on project to learn and apply TypeScript in a real-world scenario. The platform allows users to efficiently manage invoices by adding, editing, and deleting them while maintaining data consistency and type safety throughout the application."
        }
        siteUrl={"https://cilesiabeautybar.com"}
        techs={["React.js", "TypeScript", "Node.js", "Full-Stack Development"]}
        side={"right"}
      />
    </div>
  );
}
