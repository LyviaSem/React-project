import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../Services/Products.service"

export const productLoader = async ({params}) => {
    const product = await getProduct(+params.id);
    if(!product){
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return product;
}

const ProductDetails = () =>{
    //const product = useLoaderData();
    const {categoryTitle, description, price, children} = useLoaderData();
    //console.log(product.title);
    return (
        <main>
            <h1>{categoryTitle}</h1>
            {children.map((child) => <p>{child.title} - {child.price}</p>)}
            <p>{description}</p>
        </main>
    )
}

export default ProductDetails;