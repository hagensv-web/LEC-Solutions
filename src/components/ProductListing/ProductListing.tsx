import { Product } from "@/types/product"
import styles from "./ProductListing.module.css"

export default function Listing({ product }: { product: Product }) {
    return (
        <div className={styles.product}>
            <img src="Image Source"/>
            <div>
                <h3>{product.name}</h3>
                <p className={styles.price}>${product.price}</p>
                <ul>
                    {product.contents.map((value) => <li>{value}</li>)}
                </ul>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}