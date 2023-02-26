import './Header.css'
import Logo from '../../img/logo_mony.svg'
import '../../fonts.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { StoreContext } from "../../contexts/StoreContext";
import { Outlet } from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cart } = useContext(StoreContext);

    const handleClick = route => {
        navigate(route);
    };

    return (
        <>
            <nav>
                <div className="nav">

                    <div className="logo-nav">
                        <div className="nav-item" onClick={() => handleClick("/")}>
                            <img className="logo-header" src={Logo} alt="logo Mony" />
                        </div>
                    </div>

                    <ul className="elements-nav">
                        <li className={location.pathname === "/" ? "nav-item selected" : "nav-item"} onClick={() => handleClick("/")}>
                            Accueil
                        </li>
                        <li className={location.pathname === "/products" ? "nav-item selected" : "nav-item"} onClick={() => handleClick("/products")}>
                            Produits à l'unité
                        </li>
                        <li className={location.pathname === "/panier" ? "nav-item selected" : "nav-item"} onClick={() => handleClick("/panier")}>
                            <div className="number-of-products">
                                {cart.reduce((acc, currVal) => acc + currVal.quantity, 0)}
                            </div>
                            Panier
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Nav;


