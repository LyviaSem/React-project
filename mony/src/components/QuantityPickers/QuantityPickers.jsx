import React from "react";

function QuantityPickers({ item, updateQuantity, removeItem }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
        />
      </td>
      <td>
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </td>
    </tr>
  );
}

export default QuantityPickers;
