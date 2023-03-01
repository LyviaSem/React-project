import { useNavigate } from "react-router-dom";
import './StyleBtn.css'

const ModifButton = (props) => {
    const navigate = useNavigate();
    const modifbtn = () =>{
        navigate(`/product/${props.idcategory}/${props.idregime}/${props.idplat}`);
    }


    return <button className="btn-vert" onClick={modifbtn}>Modifier</button>
}

export default ModifButton;