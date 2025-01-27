import './Skills.scss'
import reactLogo from "../../assets/images/react-logo.png"
import javascriptLogo from "../../assets/images/javascript-logo.png"
import typescriptLogo from "../../assets/images/typescript-logo.png"
import cssLogo from "../../assets/images/css-logo.png"
import sassLogo from "../../assets/images/sass-logo.png"
import nodeLogo from "../../assets/images/node-logo.png"
import mysqlLogo from "../../assets/images/mysql-logo.png"

export default function Skills(){
    return (
        <div className="skills">
            <h2 className="skills__title">My Skills</h2>
            <h3 className="skills__subtitle">Subtitle</h3>
            <div className="skills__list">
                <div className="skills__item">
                    <img className="skills__image" src={reactLogo}></img>
                    <h4 className="skills__name">React</h4>
                </div>
                <div className="skills__item">
                    <img className="skills__image" src={javascriptLogo}></img>
                    <h4 className="skills__name">JavaScript</h4>
                </div>
                <div className="skills__item">
                    <img className="skills__image" src={typescriptLogo}></img>
                    <h4 className="skills__name">TypeScript</h4>
                </div>
                <div className="skills__item">
                    <img className="skills__image" src={cssLogo}></img>
                    <h4 className="skills__name">CSS</h4>
                </div>
                <div className="skills__item">
                    <img className="skills__image" src={sassLogo}></img>
                    <h4 className="skills__name">SASS</h4>
                </div>
                <div className="skills__item">
                    <img className="skills__image" src={nodeLogo}></img>
                    <h4 className="skills__name">Node.js</h4>
                </div>
                <div className="skills__item">
                    <img className="skills__image" src={mysqlLogo}></img>
                    <h4 className="skills__name">MySQL</h4>
                </div>
            </div>
        </div>
    )
}