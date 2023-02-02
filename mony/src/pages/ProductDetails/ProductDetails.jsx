import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../Services/Products.service"

export const productLoader = async ({params}) => {
    const product = await getProduct(+params.id);
    console.log("product " + params.id);
    if(!product){
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return product;
}

const ProductDetails = () =>{
    const produit = useLoaderData();
    console.log("children title "+produit.children);
    return (
        <main>
            <h1>Produit a l'unité</h1>
            {produit.children.map((child) =><h3 key={child.id}> {child.title} </h3>)}
        </main>
    )
}

export default ProductDetails;