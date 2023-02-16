import { useLoaderData } from "react-router-dom";
import CartButton from "../../components/AjoutPanierBtn/AjoutPanierBtn";
import { getPlat } from "../../services/Products.service"
import { useState } from "react";
//import { useStore } from "../../contexts/store.context";


export const platLoader = async ({params}) => {
    const product = await getPlat(+params.idcategory, +params.idregime, +params.idplat);
    console.log(product);
    if(!product){
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return product;
}


const ProductDetails = () =>{
    const produit = useLoaderData();
    console.log(produit)
    //const {cart: {addToCart}}= useStore();
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        // Crée un nouveau tableau qui inclut l'objet item
        const newCartItems = [...cartItems, item];
    
        // Met à jour l'état cartItems avec le nouveau tableau
        setCartItems(newCartItems);
        console.log(newCartItems)
    }

    return (
        <main>
            <h1>{produit.title}</h1>
            <div className="detail">
                {produit.ingredient.map((ingredient) =>
                    <p key={ingredient}>{ingredient}</p>

                )}
                <p>les allergenes: {produit.allergenes}</p>
            </div>
            <button onClick={() => addToCart({produit})}>ajout panier</button>
            {/* <CartButton callback={() => addToCart({...produit})}/> */}
       </main>

    )
}

export default ProductDetails;