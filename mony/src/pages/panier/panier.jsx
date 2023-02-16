import React, { useState } from "react";
import QuantityPickers from "../../components/QuantityPicker/QuantityPicker";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import './Panier.css'
import { Link } from 'react-router-dom';
import Button from "../../components/Btn/BtnValidePanier";



const Panier = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Avenue Matignon", price: 12, quantity: 1 },
    { id: 2, name: "Salade Lyonnaise", price: 10, quantity: 1 },
    { id: 3, name: "Pates Carbonara", price: 13, quantity: 1 },
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

  console.log(cartItems)

  const removeItem = (id) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

return (

  <div>
      <h1>Panier</h1>
      <table>
        <thead>
          <tr>
            <th>Produits</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><QuantityPickers
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Total: {total}€
      </div>
      {console.log(cartItems.price)}
        <Button cartItem={cartItems} total={total}/>
    </div> );
}

export default Panier;