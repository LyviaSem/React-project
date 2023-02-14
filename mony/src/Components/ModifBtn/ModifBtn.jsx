import { useNavigate } from "react-router-dom";
//import AppRouter from '../../router/AppRouter';

const ModifButton = (props) => {
    const navigate = useNavigate();
    const modifbtn = () =>{
        navigate(`/commande/${props.idcategory}/${props.idregime}/${props.idplat}`);
        console.log(props);
    }


    return(
        <button className="btn-commande" onClick={modifbtn}>modifier</button>
    )
}

export default ModifButton;