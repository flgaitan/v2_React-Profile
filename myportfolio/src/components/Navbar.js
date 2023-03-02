import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="navbarItems">
                <h1 className="navbar-logo">Fiama G.</h1>

                <div className="burgermenu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
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
}

export default Navbar;


//<i class="fa-sharp fa-solid fa-house-heart">HOME</i>

// link to index html for icons before title  <link rel= link here>
 //https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css