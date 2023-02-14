import React, { useState } from "react";
import QuantityPickers from "../../components/QuantityPickers/QuantityPickers";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import './Panier.css'


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
    <h1>Panier</h1>
    
      <div className="produits">
        <div className="carteProduit">
            <div className="fond-carte">
                <div className="carte-panier">
                    <div className="titre-carte">
                        <h3>Avenue Matignon</h3>
                    </div> 
                    <div className="contenu-carte">
                        <h4>Burger mexicain</h4>
                        <p>poulet panés, guacamole, tomates, oignon, mozarrella</p>
                        <h4>Accompagnement</h4>
                        <p>Frite</p>
                        <h4>Boisson</h4>
                        <p>Coca</p>
                        <h5>Total:10€</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="nom-Produit">
            <h2>Menu Avenue Matignon</h2>
            <p>Burger poulet, frite, coca</p>
            <p className="prix">10€</p>
        </div>
        <div className="quantite">
          {cartItems.map((item) => (
                <QuantityPickers
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            <TotalPrice items={cartItems}/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
  
export default CartPage;



  {/* <div>
      <h2>Panier</h2>
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
    </div> */}