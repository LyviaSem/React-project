import { useLoaderData } from "react-router-dom";
import {getProducts} from "../../Services/Products.service.js";
import React, { useState } from "react";
import './Products.css'
import ModifButton from "../../components/ModifProduitBtn/ModifProduitBtn";

    export const productsLoader = async () => {
            const products = await getProducts();
            return products;
        }

    const Products = () => {
        const products = useLoaderData();
      
        const [showElements, setShowElements] = useState([false, false, false, false, false, false]);
      
        const toggleShowElement = (index) => {
            setShowElements(prevState => {
                return prevState.map((value, i) => {
                return i === index ? !value : false;
                });
            });
        };
      
        return (
          <div>
            <h1>Produits à l'unité</h1>
            <ul className="produits-unite">
              {products.map((product, index) => (
                <div key={index} className={`cat-${product.category}`}>
                  <li>
                    <button onClick={() => toggleShowElement(index)}>
                      <img className={product.category} src={product.image} alt={product.category} />
                    </button>
                  </li>
      
                  {showElements[index] && (
                    <div>
                      {product.specificRegime.map((regime) => (
                        <div key={regime.idregime}>
                          {regime.plat.map((plat) => (
                            <>
                            <div className="produit">
                            <p key={plat.idplat}>{plat.title}</p>
                            <ModifButton idcategory={product.idcategory} idregime={regime.idregime} idplat={plat.idplat}/>
                            </div>
                            </>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        );
      };

export default Products;
      