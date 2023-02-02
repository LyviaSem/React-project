import Button from '../btn/btn'
import './cartes.css'

const Carte = () => {
    return(
        <main>
            <div className="carte">
                <div className="titre-carte">
                    <h2>Burger Poulet</h2>
                </div> 
              
                <div className="contenu-carte">
                    <h3>Avenue Matignon</h3>
                    <Button />
                </div>
            </div>  
        </main>
        
    )
}

export default Carte;