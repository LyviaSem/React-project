import './StyleBtn.css';
import { useNavigate, useLocation } from "react-router-dom";

const Button = () => {
    const location = useLocation();
    const { cart } = location.state;    
    const navigate = useNavigate();
    const RecapBtn = () => navigate("/recapcommande", { state: { cart } });

    return <button className="btn-blanc" onClick={RecapBtn}>Voir le récapitulatif de ma commande</button>

}

export default Button;