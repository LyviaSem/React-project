import Logo from '../../Img/logo_mony.svg'
import MonopArgent from '../../Img/mr-monop-argent.png'
import './PaiementAccepte.css'
import { Link } from 'react-router-dom';
import Button from "../../components/BtnRecap/BtnRecap"


const PaiementAccepte = () => {
    return(
    <div>
        <div class="background">
            <img src={Logo} alt="logo mony" className="logo" />

                <h2>Votre paiement a bien été accepté</h2>

                <img src={MonopArgent} alt="" class="mr-monop-argent"/>

                <Link to="/recapcommande">
                    <Button></Button>
                </Link>
        </div>
    </div>
    );
}



export default PaiementAccepte;