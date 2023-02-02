import React, { useState } from "react";
import QuantityPickers from "../../components/QuantityPickers/QuantityPickers";
import TotalPrice from "../../components/TotalPrice/TotalPrice";


function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 20, quantity: 1 },
    { id: 3, name: "Product 3", price: 5, quantity: 3 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : { ...item }
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Panier</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <QuantityPickers
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </tbody>
      </table>
      <TotalPrice items={cartItems} />
    </div>
  );
}

export default CartPage;