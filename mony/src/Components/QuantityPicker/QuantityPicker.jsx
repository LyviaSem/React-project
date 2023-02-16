import React from "react";
import '../../pages/Panier/Panier.css'
import Poubelle from '../../Img/poubelle.png'
import { useEffect } from "react";

const QuantityPickers = ({ item, updateQuantity, removeItem }) => {
  useEffect(() => {
    if (parseInt(item.quantity) === 0) {
      removeItem(item.id);
    }
  }, [item.quantity]);


  return (
    <>
      <td>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
        />
      </td>
      <td>
        <button onClick={() => removeItem(item.id)}><img className="supp" src={Poubelle} alt=""/></button>
      </td>
    </>
  );
}

export default QuantityPickers;
