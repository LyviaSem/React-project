import './StyleBtn.css';
import { useNavigate } from "react-router-dom";


const CommandeMenuBtn = (props) => {
    const navigate = useNavigate();
    const commandebtn = () =>{
        navigate(`/commande/${props.idcategory}/${props.idregime}`);
    }
    return(
        <button className="btn-vert" onClick={commandebtn}>je commande</button>
    )
}

export default CommandeMenuBtn;