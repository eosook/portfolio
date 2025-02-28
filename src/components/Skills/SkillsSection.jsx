import './SkillsSection.scss'
import reactLogo from "../../assets/images/react-logo.png"
import htmlLogo from "../../assets/images/html5-logo.png"
import javascriptLogo from "../../assets/images/javascript-logo.png"
import typescriptLogo from "../../assets/images/typescript-logo.png"
import cssLogo from "../../assets/images/css-logo.png"
import sassLogo from "../../assets/images/sass-logo.png"
import nodeLogo from "../../assets/images/node-logo.png"
import mysqlLogo from "../../assets/images/mysql-logo.png"
import SkillCard from './SkillCard/SkillCard';
import githubLogo from "../../assets/images/github-logo.png"
import gitLogo from "../../assets/images/git-logo.png"
import vscodeLogo from "../../assets/images/vscode-logo.png"
import viteLogo from "../../assets/images/vite-logo.png"

export default function Skills(){
    return (
        <div id="skills" className="skills">
            <h2 className="skills__title">Tools of the Trade</h2>
            <h3 className="skills__subtitle"></h3>
            <div className="skills__list">
                <SkillCard logo={reactLogo} name={"React"} />
                <SkillCard logo={htmlLogo} name={"HTML"} />
                <SkillCard logo={javascriptLogo} name={"JavaScript"} />
                <SkillCard logo={typescriptLogo} name={"TypeScript"} />
                <SkillCard logo={cssLogo} name={"CSS"} />
                <SkillCard logo={sassLogo} name={"SASS"} />
                <SkillCard logo={nodeLogo} name={"Node.js"} />
                <SkillCard logo={mysqlLogo} name={"MySQL"} />
                <SkillCard logo={githubLogo} name={"Github"} />
                <SkillCard logo={gitLogo} name={"Git"} />
                <SkillCard logo={vscodeLogo} name={"VSCode"} />
                <SkillCard logo={viteLogo} name={"Vite"} />
            </div>
        </div>
    )
}