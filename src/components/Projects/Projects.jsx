import "./Projects.scss";
import cilesiaImage from "../../assets/images/Cilesia Website.png";
import gameRecImage from "../../assets/images/GameRec.png";
import invoiceImage from "../../assets/images/Invoice App Dark.png";
import instockImage from "../../assets/images/Instock-2.png";
import cilesiaLogo from "../../assets/images/cilesiaLogo.png";
import gameRecLogo from "../../assets/images/gameRec-logo.png";
import invoiceLogo from "../../assets/images/invoice-logo.png";
import instockLogo from "../../assets/images/InStock-Logo.png";
import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ visible }) {
  const [selectedWork, setSelectedWork] = useState(0);

  function changeWork(number) {
    setSelectedWork(number);
  }
  function closeWork() {
    setSelectedWork(0);
  }
  return (
    <AnimatePresence>
      <motion.div
        className="projects"
        id="projects"
        initial={{ backgroundColor: "var(--background)", opacity: 0.6 }}
        animate={
          visible
            ? { backgroundColor: "var(--background)", opacity: 1, duration: 2 }
            : {}
        }
      >
        <div className="projects__container">
          <div className="projects__header">PROJECTS</div>
          <div className="projects__section">
            <ProjectCard
              projectNumber={1}
              title={"Cilesia Beauty Bar"}
              changeWork={changeWork}
              closeWork={closeWork}
              selectedWork={selectedWork}
              description={
                "I designed and developed a modern, user-friendly website for a small beauty business specializing in lash services. Collaborating closely with the client, I crafted a custom design that aligns with their brand identity while ensuring functionality for both users and the business owner."
              }
              logo={cilesiaLogo}
              image={cilesiaImage}
              techs={["React.js", "Email Integration", "Responsive Design"]}
              link={"https://cilesiabeautybar.com/"}
            />
            <ProjectCard
              projectNumber={2}
              title={"GameRec"}
              changeWork={changeWork}
              closeWork={closeWork}
              selectedWork={selectedWork}
              description={
                "I developed a full-stack web application designed to help users discover new games tailored to their preferences. The platform integrates with the IGDB API from Twitch to fetch detailed game information, while users can create personalized accounts, maintain wishlists, and explore game recommendations."
              }
              logo={gameRecLogo}
              image={gameRecImage}
              techs={[
                "React.js",
                "Node.js",
                "IGDB API",
                "SQL",
                "Full-Stack Development",
              ]}
              link={"https://gamerecc.netlify.app/"}
            />
            <ProjectCard
              projectNumber={3}
              title={"Invoice Tracker"}
              changeWork={changeWork}
              closeWork={closeWork}
              selectedWork={selectedWork}
              description={
                "I built this full-stack web application as a hands-on project to learn and apply TypeScript in a real-world scenario. The platform allows users to efficiently manage invoices by adding, editing, and deleting them while maintaining data consistency and type safety throughout the application."
              }
              logo={invoiceLogo}
              image={invoiceImage}
              techs={[
                "React.js",
                "TypeScript",
                "Node.js",
                "Full-Stack Development",
              ]}
              link={"https://cilesiabeautybar.com/"}
            />
            <ProjectCard
              projectNumber={4}
              title={"Instock"}
              changeWork={changeWork}
              closeWork={closeWork}
              selectedWork={selectedWork}
              description={
                "A full-stack application designed to manage warehouse databases and track stock efficiently. Users can add, edit, and delete warehouses and inventory items in real time. Built collaboratively with three other developers."
              }
              logo={instockLogo}
              image={instockImage}
              techs={[
                "React.js",
                "Node.js",
                "Full-Stack Development",
                "Collaborative",
              ]}
              link={"https://cilesiabeautybar.com/"}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
