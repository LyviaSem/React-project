import { useLoaderData } from "react-router-dom";
import {getProducts} from "../../Services/Products.service.js";
import {Link} from "react-router-dom";

export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Products = () => {
    const products = useLoaderData();
    const {categoryTitle, description, price, children} = useLoaderData();
    console.log("products "+ products.children);
    return(
        <main>
            <h1>Nos produits à l'uniter</h1>
    
            <ul>
                {/* {products.map((product) => <li key={product.id}> {product.category}</li>)} */}
                {products.map((product) =>
                    {
                        <button key={product.idcategory}>{product.category}</button>
                        
                    }
                )}
            </ul>
        </main>
    )
}

export default Products;