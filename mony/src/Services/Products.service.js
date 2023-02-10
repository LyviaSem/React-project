import { PRODUCTS } from "../mocks/products"

export const getProducts = async() => {
    return PRODUCTS;
}

export const getProduct = (id) => {
    return PRODUCTS.find((product) => product.id === id)
}

export const getPlat = (idcategory, idregime) => {
//    return PRODUCTS.specificRegime.find((prod) =>{
//         // product.idcategory === idcategory && prod.idregime === idregime
//         console.log( PRODUCTS)
//     })
    return PRODUCTS[idcategory-1].specificRegime.find((prod) => prod.idregime === idregime)
    //console.log( PRODUCTS[idcategory-1].specificRegime.find((prod) => prod.idregime === idregime))
   }    

    



