import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import './Products.css'
import ModifButton from "../../Components/Btn/ModifProduitBtn";

const Products = () => {
  const products = useLoaderData();

  const allergenes = [
    { value: 'Gluten', label: 'Gluten' },
    { value: 'Lactose', label: 'Lactose' },
    { value: 'Crustacés', label: 'Crustacés'},
    { value: 'Graine de sésame', label: 'Graine de sésame'}
  ]

  const [selectedAllergene, setselectedAllergene] = useState('aucun  filtre');

  const handleChangeAllergene = (e) => {
    setselectedAllergene(e.target.value);
  }

  const [elementIndex, setElementIndex] = useState(-1);

  const toggleShowElement = (index) => {
    if (index === elementIndex) {
      setElementIndex(-1);
      return
    }

    setElementIndex(index)
  };

  return (
    <div>
      <h1>Produits à l'unité</h1>
      <div>
        <select value={selectedAllergene} onChange={handleChangeAllergene}>
          <option value="aucun filtre">Aucun filtre</option>
          {allergenes.map((allergene) => 
            <option key={allergene.value} value={allergene.label}>{allergene.label}</option>
          )}
        </select>
      </div>
      <ul className="produits-unite">
        {products.map((product, i) => (
          <li key={i} className={"category"}>
            <div className="button-container">
              <button onClick={() => toggleShowElement(i)}>
                <img className={product.category} src={product.image} alt={product.category} />
              </button>
            </div>

            {elementIndex === i && (
              <div className="produits">
                {product.specificRegime.map((regime, i) => (
                  // <div key={i}>
                  //   {regime.plat.map((plat, i) => (
                  //     <div key={i} className="produit">
                  //       <p key={plat.idplat}>{plat.title}</p>
                  //       <ModifButton idcategory={product.idcategory} idregime={regime.idregime} idplat={plat.idplat} />
                  //     </div>
                  //   ))}
                  // </div>
                  <div key={i}>
                    {regime.plat
                      .filter(plat => !selectedAllergene || !plat.allergenes.includes(selectedAllergene))
                      .map((filteredPlat, i) => (
                        <>
                        <div className="produit" key={i}>
                          <p key={filteredPlat.id}>{filteredPlat.title}</p>
                          <ModifButton idcategory={product.idcategory} idregime={regime.idregime} idplat={filteredPlat.idplat}/> 
                        </div>
                        </>
                      ))
                    }
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
