import QuantityPicker from "../../Components/QuantityPicker/QuantityPicker";
import './Panier.css'
import { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import Button from "../../Components/Btn/BtnValidePanier";



const Panier = () => {
  const { cart } = useContext(StoreContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(cart);

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
          {cart.map((item, i) => (
            <tr key={i}>
              <td>
                <strong>{Object.keys(item.meal).length === 1 ? "Plat à l'unité" : "Menu"}</strong>
                <ul className="details-produit">
                  {Object.values(item.meal).map((option, i) => <li key={i}>{option}</li>)}
                </ul>
              </td>
              <td>{item.price}€</td>
              <td>
                <QuantityPicker productQuantity={item.quantity} productIndex={i} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Total: {total}€
      </div>
      {total > 0 && <Button total={total} />}
    </div>);
}


export default Panier;

