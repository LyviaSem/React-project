import { getPlats } from "../../Services/Products.service";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CartButton from "../../components/Cartbtn/CartBtn";



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


const Commande = () =>{
    const products = useLoaderData();
    const [selectedPlat, setselectedPlat] = useState('');
    const [selectedDessert, setselectedDessert] = useState('');
    const [selectedBoisson, setselectedBoisson] = useState('');
    const [selectedAccompaniment, setselectedAccompaniment] = useState('');
    
  
    const handleChangePlat = (e) => {
        setselectedPlat(e.target.value);
      console.log(e)
    }

    const handleChangeDessert = (e) => {
        setselectedDessert(e.target.value);
      console.log(e)
    }

    const handleChangeBoisson = (e) => {
        setselectedBoisson(e.target.value);
      console.log(e)
    }

    const handleChangeAccompaniment = (e) => {
        setselectedAccompaniment(e.target.value);
      console.log(e)
    }

   

    return (
        <main>
            <h1>Commande</h1>

            <div>
            <select value={selectedPlat} onChange={handleChangePlat}>
            {products.plat.map((plat) =>
                <option key={plat.idplat} value={plat.title}>{plat.title}</option>
                
            )}
            </select>
            <p>Vous avez sélectionné: {selectedPlat}</p>
            </div>

            <div>
            <select value={selectedAccompaniment} onChange={handleChangeAccompaniment}>
            {products.accompaniments.map((acc) => 
                <option key={acc.value} value={acc.label}>{acc.label}</option>
            )}
            </select>
            <p>Vous avez sélectionné: {selectedAccompaniment}</p>
            </div> 

            <div>
            <select value={setselectedBoisson} onChange={handleChangeBoisson}>
            {products.boissons.map((boisson) => 
                <option key={boisson.value} value={boisson.label}>{boisson.label}</option>
            )}
            </select>
            <p>Vous avez sélectionné: {selectedBoisson}</p>
            </div> 

            <div>
            <select value={selectedDessert} onChange={handleChangeDessert}>
            {products.desserts.map((dessert) => 
                <option key={dessert.value} value={dessert.label}>{dessert.label}</option>
                
            )}
            </select>
            <p>Vous avez sélectionné: {selectedDessert}</p>
            </div>

            <CartButton />


            
           









           
        </main>
    )
}

export default Commande;