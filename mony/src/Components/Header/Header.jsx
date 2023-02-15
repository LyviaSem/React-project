import { NavLink } from "react-router-dom";
import './Header.css'
import Logo from '../../Img/logo_mony.svg'
import '../../fonts.css'
import React, { useState } from "react";


const Nav = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = index => {
    setSelected(index);
  };

  return (
    <nav>
        <div className="nav">

            <div className="logo-nav">
                <div className={"nav-item"} onClick={() => handleClick(0)}>
                    <NavLink to="/"><img className="logo" src={Logo} alt=""/></NavLink>
                </div>
            </div>

            <div className="elements-nav">
                     <div className={selected === 0 ? "nav-item selected" : "nav-item"} onClick={() => handleClick(0)}>
                        <NavLink to="/">Accueil</NavLink>
                    </div>
                    <div className={selected === 1 ? "nav-item selected" : "nav-item"} onClick={() => handleClick(1)}>
                        <NavLink to="/products">Produits à l'unité</NavLink>
                    </div>
                    <div className={selected === 2 ? "nav-item selected" : "nav-item"} onClick={() => handleClick(2)}>
                        <NavLink to="/panier">Panier</NavLink>
                    </div>
            </div>
            
        </div>
    </nav>
  );
};

export default Nav;


