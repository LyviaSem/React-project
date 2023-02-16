import { useState } from "react";

const [cartItems, setCartItems] = useState([]);
export const addToCart = (item) => {
        // Crée un nouveau tableau qui inclut l'objet item
        const newCartItems = [...cartItems, item];
    
        // Met à jour l'état cartItems avec le nouveau tableau
        setCartItems(newCartItems);
        console.log(newCartItems)
    }