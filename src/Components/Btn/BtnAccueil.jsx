import './StyleBtn.css'; 
import { useNavigate } from "react-router-dom"; 

const CommandeMenuBtn = (props) => { 
    const navigate = useNavigate(); 
    const accueilbtn = () =>{
        navigate("/"); 
    } 
    return( <button className="btn-blanc" onClick={accueilbtn}>Retourner à l'accueil</button> ) } 
    
    export default CommandeMenuBtn;