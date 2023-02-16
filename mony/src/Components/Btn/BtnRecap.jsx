import './StyleBtn.css'; 
import { useNavigate } from "react-router-dom"; 

const Button = () => { 
    
    const navigate = useNavigate();
    const RecapBtn = () => {
        navigate("/recapcommande")  
    }

    return( 
    <button className="btn-blanc" onClick={RecapBtn}>Voir le récapitulatif de ma commande</button> 
    ) } 
    
    export default Button;