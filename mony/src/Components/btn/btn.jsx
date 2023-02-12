import './btn.css';
import { useNavigate } from "react-router-dom";
//import AppRouter from '../../router/AppRouter';

const Button = (props) => {
    const navigate = useNavigate();
    const commandebtn = () =>{
        navigate(`/commande/${props.idcategory}/${props.idregime}`);
        console.log(props);
    }
    return(
        <button className="btn-commande" onClick={commandebtn}>je commande</button>
    )
}

export default Button;