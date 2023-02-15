import React from "react";
import '../../pages/Panier/Panier.css'

function TotalPrice({ items }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      Total: {total}€
    </div>
  );
}

export default TotalPrice;
