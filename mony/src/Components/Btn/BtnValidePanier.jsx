import { useNavigate } from "react-router-dom";
import './StyleBtn.css'; 

const AjoutPanierBtn = (props) => {

    const navigate = useNavigate()
    const paiementBtn = () =>{
        navigate(`/paiement/${props.total}`)
    }
    return(
        <button className="btn-vert" onClick={paiementBtn}>Valider ma commande</button>
    )
}

export default AjoutPanierBtn;