import Logo from '../../img/logo_mony.svg'
import CarteChance from '../../img/carte-chance.png'
import './Recap.css'
import Button from "../../Components/Btn/BtnAccueil"
import { useNavigate, useLocation } from 'react-router-dom';


const Recap = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cart } = location.state;    
    const BtnAccueil = () => navigate("/");
    const randomOrderNumber = Math.floor(Math.random() * 100) + 1;
    const maxNumber = 20;
    const randomTableNumber = Math.floor(Math.random() * maxNumber) + 1;

    return (
        <div>
            <div className="recap">
                <img src={Logo} alt="logo mony" className="logo" />
                <h1>Votre commande n°{randomOrderNumber}</h1>
                <h2>Rendez-vous à la table n°{randomTableNumber}</h2>
                <div className="recap-commande">
                    <ul>
                        {cart.map((item, i) => (<li className="recap-produit" key={i}>

                            <strong>
                                {Object.keys(item.meal).length === 1 ? "Plat à l'unité" : "Menu"}
                            </strong>

                            <ul className="options">
                                {Object.values(item.meal).map((option, i) => <li key={i}>{option}</li>)}
                            </ul>
                            <strong>Prix : {item.price}€</strong>
                            <strong>Quantité : {item.quantity}</strong>
                        </li>))}
                    </ul>
                    <div className="carte-chance">
                        <img src={CarteChance} alt="" />
                        <Button title="Retour à l'accueil" onClick={BtnAccueil} />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Recap;