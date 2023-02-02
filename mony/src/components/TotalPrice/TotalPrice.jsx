import React from "react";

function TotalPrice({ items }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      Total: {total}€
    </div>
  );
}

export default TotalPrice;
