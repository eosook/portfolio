import "./Header.scss"

export default function Header(){
    return (
        <div className="header">
            <ul className="header__list">
                <li className="header__list-item">About</li>
                <li className="header__list-item">Projects</li>
                <li className="header__list-item">Skills</li>
                <li className="header__list-item">Contact</li>
            </ul>
        </div>
    )
}