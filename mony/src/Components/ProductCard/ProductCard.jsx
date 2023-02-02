

const ProductCard = (props) => {
    
    const {title, description, price} = props.product;

    // const addToCart = () => {
    //     console.log(`Ajouter le produit ${title} au panier`)
    // }

    return (
        <article>
            <h3>{title} - {price}€</h3>
            <p>{description}</p>
        </article>
    )
    }

export default ProductCard;