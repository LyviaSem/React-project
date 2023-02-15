import Logo from '../../Img/logo_mony.svg'
import CarteChance from '../../Img/carte-chance.png'
import './Recap.css'
import { Link } from 'react-router-dom';
import Button from "../../components/BtnAccueil/BtnAccueil"

const Recap = () => {
    return(
        <div>
        <div class="recap">
                <img src={Logo} alt="logo mony" className="logo" />
                <h1>Votre commande</h1>
            <div class="recap-commande">
                <div class="commande">
                    <p>Menu Avenue Matignon x1 15€
                    Pâtes Bolognaise x1 10€
                    Tiramisu x2 15€
                    Ice Tea x1 5€</p>
                    <p>Total: 45€</p>
                </div>
                <div class="carte-chance">
                    <img src={CarteChance} alt=""/>
                    <Link to="/">
                        <Button></Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}



export default Recap;