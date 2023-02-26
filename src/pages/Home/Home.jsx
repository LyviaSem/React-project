import { getProducts } from "../../Services/Products.service"
import { useLoaderData } from "react-router-dom";
import Cartes from "../../Components/cartes/cartes"
import './Home.css'

export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Home = () => {
    const products = useLoaderData();

    return (
        <main>
            <h1>Nos Menus</h1>
            {products.map((product, i) =>
                <div key={i}>
                    <h6>{product.category}</h6>
                    <ul className="regimes">
                        {product.specificRegime.map((prod, i) => <Cartes key={i} category={product.category} type={prod.specificRegimeName} name={prod.name} idcategory={product.idcategory} idregime={prod.idregime} />)}
                    </ul>
                </div>
            )}
        </main>
    )
}

export default Home;