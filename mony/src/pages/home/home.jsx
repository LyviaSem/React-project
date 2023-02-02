import { getProduct } from "../../Services/Products.service"
import { useLoaderData } from "react-router-dom";
import {Link} from "react-router-dom";



const Home = () =>{
    const products = useLoaderData();
    const {category, description, price, children} = useLoaderData();

    return (
        <main>
            <h1>Nos Menus</h1>
             <ul>
                {products.map((product) => <li key={product.id}> {product.category}</li>)}
            </ul> 
        </main>
    )
}

export default Home;