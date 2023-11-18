import Logo from "../../images/default.png";
import "./header.css";

const Header = ()=> {
    return (
        <div className="header">
            <a href=""><img src={Logo} alt="" /></a>
            <nav>
                <a href="/shop">Your Cart</a>
                <a href="/cart">Shop</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;