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
    return(
        <main>
            <h1>Welcome on Products page</h1>
    
            <ul>
                {products.map((product) =><li key={product.id}><h3> {product.categoryTitle} </h3> <Link to={`/products/${product.id}`}> {product.specificRegime}</Link></li>)}
            </ul>
        </main>
    )
}

export default Products;