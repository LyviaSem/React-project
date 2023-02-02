import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/panier">panier</NavLink></li>
                <li><NavLink to="/products">produits</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;