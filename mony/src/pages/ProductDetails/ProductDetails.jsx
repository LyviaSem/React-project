import { useLoaderData } from "react-router-dom";
import CartButton from "../../components/Btn/AjoutPanierBtn";
import { getPlat } from "../../services/Products.service"
import { useContext, useState } from "react";
import { StoreContext, StoreContextProvider, useStore } from "../../contexts/store.context";



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
    const store = useContext(StoreContext);
    console.log(store.cart.products)
    return (
<>


        <main>
            <h1>{produit.title}</h1>
            
            <div className="detail">
                {produit.ingredient.map((ingredient) =>
                    <p key={ingredient}>{ingredient}</p>

                )}
                <p key={produit.allergenes}>les allergenes: {produit.allergenes}</p>
                <p key={produit.price}>Prix: {produit.price}€</p>
            </div>

            <CartButton callback={() => store.cart.addToCart({...produit})}/>
            

       </main>
       </>
    )
}

export default ProductDetails;