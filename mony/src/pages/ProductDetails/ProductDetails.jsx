import { useLoaderData } from "react-router-dom";
import Button from "../../components/btn/btn";
import Carte from "../../components/cartes/cartes";
import { getPlat } from "../../Services/Products.service"


export const platLoader = async ({params}) => {
    const product = await getPlat(+params.idcategory, +params.idregime, +params.idplat);
    console.log(product);
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

    return (
        <main>
             <h1>Detail produit</h1>
             <p>{produit.title}</p>
             {produit.ingredient.map((ingredient) =>
                <li>{ingredient}</li>

             )}
             <p>les alergennes: {produit.allergenes}</p>
       </main>

    )
}

export default ProductDetails;