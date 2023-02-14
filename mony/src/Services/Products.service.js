import { PRODUCTS } from "../mocks/products"

export const getProducts = async() => {
    return PRODUCTS;
}

export const getProduct = (id) => {
    return PRODUCTS.find((product) => product.id === id)
}

export const getPlats = (idcategory, idregime) => {
    return PRODUCTS[idcategory-1].specificRegime.find((prod) => prod.idregime === idregime)
}    

export const getPlat = (idcategory, idregime, idplat) => {
    return PRODUCTS[idcategory-1].specificRegime[idregime-1].plat.find((plat) => plat.idplat === idplat)   
}  

    



