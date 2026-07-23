const Product = (props: { title: string; price: number; inStock: boolean; categories: string[] }) => {
    return (
        <div>
        <h3>{props.title}</h3>
        <p>Price: ${props.price}</p>
        <p>In stock: {props.inStock? "Yes" : "No"}</p>
        <p>Categories: {props.categories.join(", ")}</p>
        </div>
    )
}
export default Product;