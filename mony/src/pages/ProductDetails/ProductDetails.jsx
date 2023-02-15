import { useLoaderData } from "react-router-dom";
import CartButton from "../../components/AjoutPanierBtn/AjoutPanierBtn";
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
            <div className="detail">
                <p>{produit.title}</p>
                {produit.ingredient.map((ingredient) =>
                    <p>{ingredient}</p>

                )}
                <p>les alergennes: {produit.allergenes}</p>
            </div>

             <CartButton />
       </main>

    )
}

export default ProductDetails;