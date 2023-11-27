import { NavLink } from "react-router-dom";
import Logo from "../../images/default.png";
import "./header.css";

const Header = ()=> {
    return (
        <div className="header">
            <a href=""><img src={Logo} alt="" /></a>
            <nav>
                <NavLink  className='navLink' to="/">Shop</NavLink>
                <NavLink  className='navLink' to="/review">Review Order</NavLink>
                <NavLink  className='navLink' to="/inventory">Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;