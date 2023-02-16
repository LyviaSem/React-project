import { useLoaderData } from "react-router-dom";
import CartButton from "../../components/Btn/AjoutPanierBtn";
import { getPlat } from "../../Services/Products.service"
import { useState } from "react";
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";



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

    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevState) =>
          prevState.map((item) =>
            item.id === id
              ? { ...item, quantity: newQuantity }
              : { ...item }
          )
        );
      };
    
      console.log(cartItems)
    
      const removeItem = (id) => {
        setCartItems((prevState) => prevState.filter((item) => item.id !== id));
      };
    


    return (
        <main>
            <h1>{produit.title}</h1>
            <div className="detail">
                {produit.ingredient.map((ingredient) =>
                    <p key={ingredient}>{ingredient}</p>

                )}
                <p key={produit.allergenes}>les allergenes: {produit.allergenes}</p>
                <p key={produit.price}>Prix: {produit.price}€</p>
            </div>
            
            <QuantityPicker item={produit} updateQuantity={updateQuantity}
              removeItem={removeItem}/>
            
            <CartButton callback={() => addToCart({...produit})}/>
       </main>

    )
}

export default ProductDetails;