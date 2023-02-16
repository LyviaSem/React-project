import { useLoaderData } from "react-router-dom";
import CartButton from "../../components/Btn/AjoutPanierBtn";
import { getPlat } from "../../services/Products.service"
import { useState } from "react";



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
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const newCartItems = [...cartItems, item];
    
        setCartItems(newCartItems);
        console.log(newCartItems)
    }

    const handleAddToCart = () => {
        addToCart({
            ...produit,
        });
      };

    


    return (
        <main>
            <h1>{produit.title}</h1>
            <div className="detail">
                {produit.ingredient.map((ingredient) =>
                    <p key={ingredient}>{ingredient}</p>

                )}
                <p>les allergenes: {produit.allergenes}</p>
            </div>
            <CartButton callback={() => handleAddToCart()}/>
            {/* <CartButton callback={() => addToCart({...produit})}/> */}
       </main>

    )
}

export default ProductDetails;