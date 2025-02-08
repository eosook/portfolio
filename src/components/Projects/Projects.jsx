import "./Projects.scss";
import Project from "../Project/Project";
import cilesiaImage from "../../assets/images/Cilesia Website.png";
import gameRecImage from "../../assets/images/GameRec.png";
import invoiceImage from "../../assets/images/Invoice App Dark.png";
import cilesiaLogo from "../../assets/images/cilesiaLogo.png";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const [selectedWork, setSelectedWork] = useState(0);

  function changeWork(number) {
    setSelectedWork(number);
  }
  function closeWork() {
    setSelectedWork(0);
  }
  return (
    <div className="projects">
      <div className="projects__header">Some of my work</div>
      <div className="projects__section">
        <ProjectCard
          projectNumber={1}
          changeWork={changeWork}
          closeWork={closeWork}
          selectedWork={selectedWork}
          description={
            "I designed and developed a modern, user-friendly website for a small beauty business specializing in lash services. Collaborating closely with the client, I crafted a custom design that aligns with their brand identity while ensuring functionality for both users and the business owner."
          }
          logo={cilesiaLogo}
          image={cilesiaImage}
        />
        <ProjectCard
          projectNumber={2}
          changeWork={changeWork}
          closeWork={closeWork}
          selectedWork={selectedWork}
          description={
            "I developed a full-stack web application designed to help users discover new games tailored to their preferences. The platform integrates with the IGDB API from Twitch to fetch detailed game information, while users can create personalized accounts, maintain wishlists, and explore game recommendations."
          }
          logo={cilesiaLogo}
          image={gameRecImage}
        />
        <ProjectCard
          projectNumber={3}
          changeWork={changeWork}
          closeWork={closeWork}
          selectedWork={selectedWork}
          description={
            "I built this full-stack web application as a hands-on project to learn and apply TypeScript in a real-world scenario. The platform allows users to efficiently manage invoices by adding, editing, and deleting them while maintaining data consistency and type safety throughout the application."
          }
          logo={cilesiaLogo}
          image={invoiceImage}
        />
      </div>
      {/* <Project
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
      /> */}
    </div>
  );
}
