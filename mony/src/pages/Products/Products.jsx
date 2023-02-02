import { useLoaderData } from "react-router-dom";
import {getProducts} from "../../Services/Products.service.js";
import {Link} from "react-router-dom";

export const productsLoader = async () => {
    const products = await getProducts();
    //console.log(products);
    return products;
}

const Products = () => {
    const products = useLoaderData();
    const {categoryTitle, description, price, children} = useLoaderData();
    console.log("cat "+categoryTitle);
    return(
        <main>
            <h1>Welcome on Products page</h1>
    
            <ul>
                {categoryTitle}
                {products.map((product) => <li key={product.id}><Link to={`/products/${product.id}`}> {product.specificRegime}</Link></li>)}
            </ul>
        </main>
    )
}

export default Products;