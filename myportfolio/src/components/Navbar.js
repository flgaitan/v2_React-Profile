import { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


function Navbar({navigatePage}) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className="navbarItems">
            <h1 className="navbar-logo">Fiama G.</h1>

            <div className="burgermenu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} onClick={()=>navigatePage(item.url)}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


export default Navbar;

