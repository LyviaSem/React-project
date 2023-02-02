import { NavLink } from "react-router-dom";
import './Header.css'
import Logo from '../../img/logo_mony.svg'
import '../../fonts.css'

const Header = () => {
    return (
        <header>
            <div className="nav">
                <img className="logo" src={Logo} alt="" />
                <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/products">Produits à l'unité</NavLink></li>
                <li><NavLink to="/panier">Panier</NavLink></li>
            </ul>
            </div>
            
        </header>
    )
}

export default Header;