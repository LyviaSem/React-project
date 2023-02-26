import { PRODUCTS } from "../mocks/products"

export const getProducts = async () => PRODUCTS;

export const getProduct = (id) => PRODUCTS.find((product) => product.id === id);

export const getPlats = (idcategory, idregime) => PRODUCTS[idcategory-1].specificRegime.find((prod) => prod.idregime === idregime);    

export const getPlat = (idcategory, idregime, idplat) => PRODUCTS[idcategory-1].specificRegime[idregime-1].plat.find((plat) => plat.idplat === idplat);

    



