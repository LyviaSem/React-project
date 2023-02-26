import React from "react";
import '../../pages/panier/Panier.css'
import Poubelle from '../../img/poubelle.png'
import { useContext, useState, useEffect, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../contexts/StoreContext";
import "./QuantityPicker.css"


const QuantityPicker = forwardRef(({ productQuantity, productIndex }, ref) => {
  const { cart, setCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(productQuantity ? productQuantity : 1);
  const location = useLocation();

  const changeProductQuantity = (quantity) => {
    if (quantity > 0) {
      setQuantity(quantity);

      if (productIndex !== undefined) {
        const cartCopy = [...cart];
        cartCopy.splice(productIndex, 1, { ...cart[productIndex], quantity: quantity });
        setCart(cartCopy);
      }
    }
  };

  const deleteProduct = () => {
    const cartCopy = [...cart];
    cartCopy.splice(productIndex, 1);
    setCart(cartCopy);
  };

  useEffect(() => {
    if (productQuantity) setQuantity(productQuantity);
  }, [cart])


  return (
    <div className="quantity-picker">
      <input
        ref={ref}
        type="number"
        value={quantity}
        onChange={(e) => changeProductQuantity(Number(e.target.value))}
      />
      {location.pathname === "/panier" && (
        <button onClick={deleteProduct}>
          <img className="supp" src={Poubelle} alt="" />
        </button>
      )}
    </div>
  );
});

export default QuantityPicker;
