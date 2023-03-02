import { getPlats } from "../../Services/Products.service";
import { useParams, useLoaderData } from "react-router-dom";
import './Menu.css'
import CartButton from "../../Components/Btn/AjoutPanierBtn";
import { useContext, useState, useRef } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import QuantityPicker from "../../Components/QuantityPicker/QuantityPicker";



export const platsLoader = async ({ params }) => {
    const product = await getPlats(+params.idcategory, +params.idregime);

    if (!product) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return product;
}


const Menu = () => {
    const products = useLoaderData();
    const { cart, setCart } = useContext(StoreContext);
    const { idcategory } = useParams();
    const [selectedOptions, setSelectedOptions] = useState({ plat: "", dessert: "", boisson: "", accompagnement: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const quantityInput = useRef();


    const getHeaderColor = (categoryID) => {
        switch (categoryID) {
            case 1:
                return "titre-carte-rouge";

            case 2:
                return "titre-carte-jaune";

            case 3:
                return "titre-carte-vert";

            case 4:
                return "titre-carte-bleu";

            default:
                break;
        }
    }

    const handleSelection = (field) => (e) => setSelectedOptions({ ...selectedOptions, [field]: e.target.value });

    const addToCart = () => {
        const productCartIndex = cart.findIndex(product => JSON.stringify(product.meal) === JSON.stringify(selectedOptions));

        if (productCartIndex !== -1) {
            const cartCopy = [...cart];
            cartCopy.splice(productCartIndex, 1, { ...cart[productCartIndex], quantity: Number(quantityInput.current.value) });
            setCart(cartCopy);
            setSuccessMessage("La quantité du menu a bien été modifiée.");
        } else {
            setCart([...cart, { meal: selectedOptions, price: products.menu_price, quantity: Number(quantityInput.current.value) }]);
            setSuccessMessage("Le menu a bien été ajouté au panier.")
        }

        setTimeout(() => setSuccessMessage(""), 4000);
    }

    return (
        <main>
            <div className="carte-menu">
                <div className={getHeaderColor((Number(idcategory)))}>
                    <h2>{products.name}</h2>
                </div>

                <div>
                    <select value={selectedOptions.plat} onChange={handleSelection("plat")}>
                        <option value="">Sélectionnez un plat</option>
                        {products.plat.map((plat, i) =>
                            <option key={i} value={plat.title}>{plat.title}</option>

                        )}
                    </select>
                </div>

                <div>
                    <select value={selectedOptions.accompagnement} onChange={handleSelection("accompagnement")}>
                        <option value="">Sélectionnez un accompagnement</option>
                        {products.accompaniments.map((acc, i) =>
                            <option key={i} value={acc.label}>{acc.label}</option>
                        )}
                    </select>
                </div>

                <div>
                    <select value={selectedOptions.boisson} onChange={handleSelection("boisson")}>
                        <option value="">Sélectionnez une boisson</option>
                        {products.boissons.map((boisson, i) =>
                            <option key={i} value={boisson.label}>{boisson.label}</option>
                        )}
                    </select>
                </div>

                <div>
                    <select value={selectedOptions.dessert} onChange={handleSelection("dessert")}>
                        <option value="">Sélectionnez un dessert</option>
                        {products.desserts.map((dessert, i) =>
                            <option key={i} value={dessert.label}>{dessert.label}</option>

                        )}
                    </select>
                </div>
                <div className="quantity-picker-container">
                    <p>
                        Quantité :
                    </p>
                    <QuantityPicker ref={quantityInput} />
                </div>
                {Object.values(selectedOptions).every(option => option !== "") ? (
                    <div>
                        <p className="info-message">Vous avez choisi {selectedOptions.plat} avec {selectedOptions.accompagnement}, {selectedOptions.boisson} et {selectedOptions.dessert}.</p>
                        <p className="total">Prix : {products.menu_price}€</p>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {!successMessage && <CartButton addToCart={addToCart} />}
                    </div>
                ) : (
                    <p className="error-message">Veuillez sélectionner une option pour chaque catégorie.</p>
                )}
            </div>
        </main>
    )
}

export default Menu;