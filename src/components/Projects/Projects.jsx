import "./Projects.scss";
import cilesiaImage from "../../assets/images/Cilesia Website.png";
import gameRecImage from "../../assets/images/GameRec.png";
import invoiceImage from "../../assets/images/Invoice App Dark.png";
import cilesiaLogo from "../../assets/images/cilesiaLogo.png";
import gameRecLogo from "../../assets/images/gameRec-logo.png"
import invoiceLogo from "../../assets/images/invoice-logo.png"
import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

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
      <div className="projects__header">Recent Projects</div>
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
          link={"https://cilesiabeautybar.com/"}
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
          title={"Invoice Tracker"}
          changeWork={changeWork}
          closeWork={closeWork}
          selectedWork={selectedWork}
          description={
            "I built this full-stack web application as a hands-on project to learn and apply TypeScript in a real-world scenario. The platform allows users to efficiently manage invoices by adding, editing, and deleting them while maintaining data consistency and type safety throughout the application."
          }
          logo={cilesiaLogo}
          image={invoiceImage}
          techs={[
            "React.js",
            "TypeScript",
            "Node.js",
            "Full-Stack Development",
          ]}
          link={"https://cilesiabeautybar.com/"}
        />
      </div>
    </div>
  );
}
