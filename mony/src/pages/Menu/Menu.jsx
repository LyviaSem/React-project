import { getPlats } from "../../Services/Products.service";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import './Menu.css'
import CartButton from "../../components/AjoutPanierBtn/AjoutPanierBtn";



export const platsLoader = async ({params}) => {
    const product = await getPlats(+params.idcategory, +params.idregime);
    console.log(product);
    if(!product){
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return product;
}


const Menu = () =>{
    const products = useLoaderData();
    const [selectedPlat, setselectedPlat] = useState('');
    const [selectedDessert, setselectedDessert] = useState('');
    const [selectedBoisson, setselectedBoisson] = useState('');
    const [selectedAccompaniment, setselectedAccompaniment] = useState('');
    
  
    const handleChangePlat = (e) => {
        setselectedPlat(e.target.value);
    }

    const handleChangeDessert = (e) => {
        setselectedDessert(e.target.value);
    }

    const handleChangeBoisson = (e) => {
        setselectedBoisson(e.target.value);
    }

    const handleChangeAccompaniment = (e) => {
        setselectedAccompaniment(e.target.value);
    }

   

    return (
        <main>
            <h1>Commande</h1>

            <div className="carte-menu">

            {
                
                (products.specificRegimeName === "Burger Poulet" || products.specificRegimeName === "Burger Boeuf" || products.specificRegimeName === "Burger Veggie") ?
                    

                    <div className="titre-carte-rouge">
                        <h2>{products.name}</h2>
                    </div>
                    
                    :
                    (products.specificRegimeName === "Pizza Napolitaine" || products.specificRegimeName === "Pizza Classique" || products.specificRegimeName === "Calzone") ?
                    

                    <div className="titre-carte-jaune">
                        <h2>{products.name}</h2>
                    </div>
                
                    :
                    (products.specificRegimeName === "Salade Viande" || products.specificRegimeName === "Salade Poisson" || products.specificRegimeName === "Salade Veggie") ?
                    

                    <div className="titre-carte-vert">
                        <h2>{products.name}</h2>
                    </div>
                
                    :
                    (products.specificRegimeName === "Pâtes Classique" || products.specificRegimeName === "Pâtes Veggie") ?

                    <div className="titre-carte-bleu">
                        <h2>{products.name}</h2>
                    </div>
                
                    :
                    ""
            }


                <div>
                    <select value={selectedPlat} onChange={handleChangePlat}>
                        {products.plat.map((plat) =>
                            <option key={plat.idplat} value={plat.title}>{plat.title}</option>
                            
                        )}
                    </select>
                </div>

                <div>
                    <select value={selectedAccompaniment} onChange={handleChangeAccompaniment}>
                        {products.accompaniments.map((acc) => 
                            <option key={acc.value} value={acc.label}>{acc.label}</option>
                        )}
                    </select>
                </div> 

                <div>
                    <select value={setselectedBoisson} onChange={handleChangeBoisson}>
                        {products.boissons.map((boisson) => 
                            <option key={boisson.value} value={boisson.label}>{boisson.label}</option>
                        )}
                    </select>
                </div> 

                <div>
                    <select value={selectedDessert} onChange={handleChangeDessert}>
                        {products.desserts.map((dessert) => 
                            <option key={dessert.value} value={dessert.label}>{dessert.label}</option>
                            
                        )}
                    </select>
                </div>
                {selectedPlat && selectedAccompaniment && selectedBoisson && selectedDessert && <p>Vous avez choisi {selectedPlat} avec {selectedAccompaniment}, {selectedBoisson} et {selectedDessert}</p>}
                <CartButton />
            </div>
           
        </main>
    )
}

export default Menu;