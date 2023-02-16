import Button from '../Btn/CommandeMenuBtn'
import './Cartes.css'
import { useNavigate } from "react-router-dom";

const Carte = (props) => {


    console.log("id "+props.id+" nom "+props.name)

    return (
        <main>
           
            <div className="carte">
                {
                    (props.category === "Burger") ?
                        <div className="titre-carte-rouge">
                            <h2>{props.type}</h2>
                        </div>
                    :
                    (props.category === "Pizza") ?
                        <div className="titre-carte-jaune">
                            <h2>{props.type}</h2>
                        </div>
                    :
                    (props.category === "Salade") ?
                        <div className="titre-carte-vert">
                            <h2>{props.type}</h2>
                        </div>
                    :
                    (props.category === "Pâtes") ?
                        <div className="titre-carte-bleu">
                            <h2>{props.type}</h2>
                        </div>
                        :
                        ""
                }

                <div className="contenu-carte">
                    <h3>{props.name}</h3>
                    <Button idcategory={props.idcategory} idregime={props.idregime}/>
                </div>
            </div>
                    
        </main>

    )
}

export default Carte;