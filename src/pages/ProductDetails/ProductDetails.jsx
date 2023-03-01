import { useLoaderData } from "react-router-dom";
import CartButton from "../../Components/Btn/AjoutPanierBtn";
import { useContext, useState, useRef } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { getPlat } from "../../Services/Products.service"
import QuantityPicker from "../../Components/QuantityPicker/QuantityPicker";



export const platLoader = async ({ params }) => {
    const product = await getPlat(+params.idcategory, +params.idregime, +params.idplat);

    if (!product) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return product;
}


const ProductDetails = () => {
    const produit = useLoaderData();
    const { cart, setCart } = useContext(StoreContext);
    const [successMessage, setSuccessMessage] = useState("");
    const quantityInput = useRef();
    const [ingredientsSelectionnes, setIngredientsSelectionnes] = useState([]);
      
        
    const toggleIngredient = (ingredient) => {
        if (ingredientsSelectionnes.includes(ingredient)) {
            setIngredientsSelectionnes(ingredientsSelectionnes.filter((i) => i !== ingredient));
        } else {
            setIngredientsSelectionnes([...ingredientsSelectionnes, ingredient]);
        }
    };

    const isIngredientSelectionne = (ingredient) => {
        return ingredientsSelectionnes.includes(ingredient);
    };

    const addToCart = () => {
        const productCartIndex = cart.findIndex(product => JSON.stringify(product.meal) === JSON.stringify({ plat: produit.title }));

        if (productCartIndex !== -1) {
            const cartCopy = [...cart];
            cartCopy.splice(productCartIndex, 1, { ...cart[productCartIndex], quantity: Number(quantityInput.current.value) });
            setCart(cartCopy);
            setSuccessMessage("La quantité du plat a bien été modifiée.");
        } else {
            setCart([...cart, { meal: { plat: produit.title }, price: produit.price, quantity: Number(quantityInput.current.value) }]);
            setSuccessMessage("Le plat a bien été ajouté au panier.");
        }

        setTimeout(() => setSuccessMessage(""), 4000);
    }

    return (
        <main>
            <h1>{produit.title}</h1>

            <div className="detail">
                {produit.ingredient.map((ingredient) =>
                    // <p key={ingredient}>{ingredient}</p>
                    <button key={ingredient} onClick={() => toggleIngredient(ingredient)}>{ingredient}</button>

                )}
                <p>les allergenes: {produit.allergenes.join(', ')}</p>
                <p>Ingrédients sélectionnés : {ingredientsSelectionnes.join(', ')}</p>
                <p key={produit.price}>Prix : {produit.price}€</p>
            </div>

            <QuantityPicker ref={quantityInput} />

            {successMessage && <p className="success-message">{successMessage}</p>}
            {!successMessage && <CartButton addToCart={addToCart} />}
        </main>

    )
}

export default ProductDetails;