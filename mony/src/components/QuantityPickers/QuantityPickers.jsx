import React from "react";
import '../../pages/panier/Panier.css'
import Poubelle from '../../img/poubelle.png'

function QuantityPickers({ item, updateQuantity, removeItem }) {
  return (
    <tr>
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
    </tr>
  );
}

export default QuantityPickers;
