import Logo from '../../img/logo_mony.svg'
import MonopArgent from '../../img/mr-monop-argent.png'
import './PaiementAccepte.css'
import Button from "../../Components/Btn/BtnRecap"


const PaiementAccepte = () => {

    return (
        <div>
            <div className="background">
                <img src={Logo} alt="logo mony" className="logo" />

                <h2>Votre paiement a bien été accepté</h2>

                <img src={MonopArgent} alt="" className="mr-monop-argent" />

                <Button />
            </div>
        </div>
    );
}



export default PaiementAccepte;