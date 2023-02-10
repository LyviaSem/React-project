import Button from '../btn/btn'
import './cartes.css'
import { useNavigate } from "react-router-dom";

const Carte = (props) => {
    /* passer en argument de carte depuis home h2 h3 titre carte */
    const navigate = useNavigate();
    console.log("id "+props.id+" nom "+props.name)

    return (
        <main>
            {
                (props.category === "Burger") ?
                    <>

                        <div className="carte">

                            <div className="titre-carte-rouge">
                                <h2>{props.type}</h2>
                            </div>

                            <div className="contenu-carte">
                                <h3>{props.name}</h3>
                                <Button idcategory={props.idcategory} idregime={props.idregime}/>
                            </div>
                        </div>
                    </>
                    :
                    (props.category === "Pizza") ?
                    <>

                        <div className="carte">

                            <div className="titre-carte-jaune">
                                <h2>{props.type}</h2>
                            </div>

                            <div className="contenu-carte">
                                <h3>{props.name}</h3>
                                <Button idcategory={props.idcategory} idregime={props.idregime} />
                            </div>
                        </div>
                    </>
                    :
                    (props.category === "Salade") ?
                    <>

                        <div className="carte">

                            <div className="titre-carte-vert">
                                <h2>{props.type}</h2>
                            </div>

                            <div className="contenu-carte">
                                <h3>{props.name}</h3>
                                <Button idcategory={props.idcategory} idregime={props.idregime} />
                            </div>
                        </div>
                    </>
                    :
                    (props.category === "Pâtes") ?
                    <>

                        <div className="carte">

                            <div className="titre-carte-bleu">
                                <h2>{props.type}</h2>
                            </div>

                            <div className="contenu-carte">
                                <h3>{props.name}</h3>
                                <Button idcategory={props.idcategory} idregime={props.idregime}/>
                            </div>
                        </div>
                    </>
                    :
                    (props.category === "Desserts") ?
                    <>

                        <div className="carte">

                            <div className="titre-carte-rose">
                                <h2>{props.type}</h2>
                            </div>

                            <div className="contenu-carte">
                                <h3>{props.name}</h3>
                                <Button idcategory={props.idcategory} idregime={props.idregime}/>
                            </div>
                        </div>
                    </>
                    :
                    ""

            }



        </main>

    )
}

export default Carte;