import Logo from '../../Img/logo_mony.svg'
import MonopArgent from '../../Img/mr-monop-argent.png'
import './PaiementAccepte.css'
import { Link, Navigate } from 'react-router-dom';
import Button from "../../components/Btn/BtnRecap"
import { useNavigate } from 'react-router-dom';


const PaiementAccepte = () => {

const navigate = useNavigate();
const recapBtn = () => {
    navigate("/recapcommande")
}
    return(
    <div>
        <div className="background">
            <img src={Logo} alt="logo mony" className="logo" />

                <h2>Votre paiement a bien été accepté</h2>

                <img src={MonopArgent} alt="" className="mr-monop-argent"/>

                    <Button />

        </div>
    </div>
    );
}



export default PaiementAccepte;