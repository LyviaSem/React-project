import { getProducts } from "../../services/Products.service"
import { useLoaderData,useNavigate } from "react-router-dom";
import Cartes from "../../components/Cartes/Cartes"
import './Home.css'

export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Home = () =>{
    const products = useLoaderData();
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
        
                                    {product.specificRegime.map((prod) => {
                                        return (
                                            
                                            <Cartes category={product.category} type={prod.specificRegimeName} name={prod.name} idcategory={product.idcategory} idregime={prod.idregime} />
                                        
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