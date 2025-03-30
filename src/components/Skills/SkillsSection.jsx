import "./SkillsSection.scss";
import reactLogo from "../../assets/images/react-logo.png";
import htmlLogo from "../../assets/images/html5-logo.png";
import javascriptLogo from "../../assets/images/javascript-logo.png";
import typescriptLogo from "../../assets/images/typescript-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import sassLogo from "../../assets/images/sass-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import mysqlLogo from "../../assets/images/mysql-logo.png";
import SkillCard from "./SkillCard/SkillCard";
import githubLogo from "../../assets/images/github-logo.png";
import gitLogo from "../../assets/images/git-logo.png";
import vscodeLogo from "../../assets/images/vscode-logo.png";
import viteLogo from "../../assets/images/vite-logo.png";
import { useState } from "react";

export default function Skills() {
  const [currentSkill, setCurrentSkill] = useState("all");

  function changeSkill(skill){
    setCurrentSkill(skill);
  }

  return (
    <div>
      <h2 className="skills__title">Tools of the Trade</h2>
      <div className="skills-categories">
        <ul className="skills-categories__list">
          <li className="skills-categories__item" onClick={() => changeSkill("all")}>All</li>
          <li className="skills-categories__item" onClick={() => changeSkill("framework")}>Frameworks</li>
          <li className="skills-categories__item" onClick={() => changeSkill("language")}>Languages</li>
          <li className="skills-categories__item" onClick={() => changeSkill("database")}>Databases</li>
          <li className="skills-categories__item" onClick={() => changeSkill("tool")}>Tools</li>
        </ul>
      </div>
      <div className="skills__list">
        <SkillCard logo={reactLogo} name={"React"} type={"framework"} currentSkill={currentSkill}/>
        <SkillCard logo={htmlLogo} name={"HTML"} type={"language"} currentSkill={currentSkill}/>
        <SkillCard logo={javascriptLogo} name={"JavaScript"} type={"language"} currentSkill={currentSkill}/>
        <SkillCard logo={typescriptLogo} name={"TypeScript"} type={"language"} currentSkill={currentSkill}/>
        <SkillCard logo={cssLogo} name={"CSS"} type={"language"} currentSkill={currentSkill}/>
        <SkillCard logo={sassLogo} name={"SASS"} type={"language"} currentSkill={currentSkill}/>
        <SkillCard logo={nodeLogo} name={"Node.js"} type={"framework"} currentSkill={currentSkill}/>
        <SkillCard logo={mysqlLogo} name={"MySQL"} type={"database"} currentSkill={currentSkill}/>
        <SkillCard logo={githubLogo} name={"Github"} type={"tool"} currentSkill={currentSkill}/>
        <SkillCard logo={gitLogo} name={"Git"} type={"tool"} currentSkill={currentSkill}/>
        <SkillCard logo={vscodeLogo} name={"VSCode"} type={"tool"} currentSkill={currentSkill}/>
        <SkillCard logo={viteLogo} name={"Vite"} type={"tool"} currentSkill={currentSkill}/>
      </div>
    </div>
  );
}
