import Logo from '../../Img/logo_mony.svg'
import CarteChance from '../../Img/carte-chance.png'
import './Recap.css'
import { Link } from 'react-router-dom';
import Button from "../../components/Btn/BtnAccueil"
import { useNavigate } from 'react-router-dom';

const Recap = () => {
const navigate = useNavigate();
const BtnAccueil = () => {
    navigate("/")
}
    return(
        <div>
        <div className="recap">
                <img src={Logo} alt="logo mony" className="logo" />
                <h1>Votre commande</h1>
            <div className="recap-commande">
                <div clasName="commande">
                    <p>Menu Avenue Matignon x1 15€</p>
                    <p>Pâtes Bolognaise x1 10€</p>
                    <p>Tiramisu x2 15€</p>
                    <p>Ice Tea x1 5€</p>
                    <p>Total: 45€</p>
                </div>
                <div className="carte-chance">
                    <img src={CarteChance} alt=""/>
                        <Button title="Retour à l'accueil" onClick={BtnAccueil}/>
                </div>
            </div>
        </div>
    </div>
    );
}



export default Recap;