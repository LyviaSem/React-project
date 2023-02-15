import '../BtnPayer/BtnPayer.css'; 
import { useNavigate } from "react-router-dom"; 

const CommandeMenuBtn = (props) => { 
    const navigate = useNavigate(); 
    const commandebtn = () =>{ navigate(`/commande/${props.idcategory}/${props.idregime}`); } 
    return( <button className="btn-payer" onClick={commandebtn}>Récapitulatif de ma commande</button> ) } 
    
    export default CommandeMenuBtn;