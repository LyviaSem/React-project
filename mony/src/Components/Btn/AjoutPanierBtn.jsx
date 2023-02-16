import { useNavigate } from "react-router-dom";
import './StyleBtn.css'
import { useState } from "react";

const AjoutPanierBtn = (props) => {
    const {callback} = props

    
    return(
        <button className="btn-vert" onClick={callback}>Ajouter au panier</button>
    )
}

export default AjoutPanierBtn;