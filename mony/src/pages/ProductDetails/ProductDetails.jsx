import { useLoaderData } from "react-router-dom";
import Button from "../../components/btn/btn";
import Carte from "../../components/cartes/cartes";
import { getProduct } from "../../Services/Products.service"


// export const productLoader = async ({params}) => {
//     const product = await getProduct(+params.id);
//     console.log("product " + params.id);
//     if(!product){
//         throw new Response("", {
//             status: 404,
//             statusText: "Not Found",
//         });
//     }
//     return product;
//}


// const ProductDetails = () =>{
//     const produit = useLoaderData();
//     //console.dir("children title "+produit.children);
//     const pp = produit.children;
//     //console.log(pp)
//     return (
//         <main>
//             <h1>Produit à l'unité</h1>
//             {/* {produit.children.map((child) => console.log("oui "+child.name))}  */}
//             <Carte />
//         </main>
//         // <h3 key={child.id}> {child.name} </h3>
//     )
// }

// export default ProductDetails;