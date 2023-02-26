import Button from '../Btn/CommandeMenuBtn'
import './cartes.css'

const Carte = (props) => {

    const getHeaderColor = (category) => {
        switch (category) {
            case "Burger":
                return "titre-carte-rouge";

            case "Pizza":
                return "titre-carte-jaune";

            case "Salade":
                return "titre-carte-vert";

            case "Pâtes":
                return "titre-carte-bleu";
        
            default:
                break;
        }
    }

    return (
        <main>
            <div className="carte">
                
                <div className={getHeaderColor(props.category)}>
                    <h2>{props.type}</h2>
                </div>
                   

                <div className="contenu-carte">
                    <h3>{props.name}</h3>
                    <Button idcategory={props.idcategory} idregime={props.idregime}/>
                </div>
            </div>
                    
        </main>

    )
}

export default Carte;