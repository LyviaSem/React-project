import '../BtnPayer/BtnPayer.css'; 
import { useNavigate } from "react-router-dom"; 

const CommandeMenuBtn = (props) => { 
    const navigate = useNavigate(); 
    const commandebtn = () =>{ navigate(`/commande/${props.idcategory}/${props.idregime}`); } 
    return( <button className="btn-payer" onClick={commandebtn}>Payer</button> ) } 
    
    export default CommandeMenuBtn;