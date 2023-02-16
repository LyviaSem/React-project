import React from "react";
import '../../pages/Panier/Panier.css'
import Poubelle from '../../Img/poubelle.png'

function QuantityPickers({ item, updateQuantity, removeItem }) {
  return (
    <>
      <>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
        />
      </>
      <>
        <button onClick={() => removeItem(item.id)}><img className="supp" src={Poubelle} alt=""/></button>
      </>
    </>
  );
}

export default QuantityPickers;
