import Navbar from '../components/Navbar';
import "./HeaderStyles.css"


const Header = ({navigatePage}) => {
    return(
        <div className="header">
        <Navbar navigatePage = {navigatePage}/>   
        </div>
    )
};


export default Header;