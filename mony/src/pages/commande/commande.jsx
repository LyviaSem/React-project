import { getPlat } from "../../Services/Products.service";
import { useLoaderData } from "react-router-dom";

export const platLoader = async ({params}) => {
    const product = await getPlat(+params.idcategory, +params.idregime);
    //console.log(product);
    if(!product){
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return product;
}

const Commande = () =>{
    const products = useLoaderData();
    console.log(products.plat)

    return (
        <main>
            <h1>Commande</h1>
            {products.plat.map((plat) => 
            <p key={plat.idplat}>{plat.title}</p>)}
            {/* {produit.map((prod) => <p key={prod.id}>{prod.id} {prod.name}</p>)} */}
            {/* {products.map((product) =>
                    
                    {
                        return(
                            <div key={product.id}>
                                <ul>
                                    <li>{product.category}</li>
                                    {product.specificRegime.map((prod) => {
                                        return (
                                            
                                            
                                            console.log(prod)
                                            // <p key={prod.id}>{prod.name}</p>
                                        )
                                    } )}
                                </ul>
                            </div>
                        )
                    }
                )}  */}
        </main>
    )
}

export default Commande;