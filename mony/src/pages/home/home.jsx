import { getProduct, getProducts } from "../../Services/Products.service"
import { useLoaderData,useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import Cartes from "../../components/cartes/cartes"
import './home.css'

export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Home = () =>{
    const products = useLoaderData();
    // const {category, description, price, children} = useLoaderData();
     console.log("children title "+products.id);

    return (
        <main>
            <h1>Nos Menus</h1>
                {products.map((product) =>
                    
                    {
                        return(
                            <div key={product.id}>
                                <h6>{product.category}</h6>
                                <ul>
                                    {/* <li>{product.category}</li> */}
                                    {product.specificRegime.map((prod) => {
                                        return (
                                            
                                            <Cartes category={product.category} type={prod.specificRegimeName} name={prod.name} idcategory={product.idcategory} idregime={prod.idregime} />
                                            //console.log(prod.idregime)
                                            // <p key={prod.id}>{prod.name}</p>
                                        )
                                    } )}
                                </ul>
                            </div>
                        )
                    }
                )}
        </main>
    )
}

export default Home;