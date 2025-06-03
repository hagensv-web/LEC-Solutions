import { Product } from "@/types/product"
import styles from "./ProductListing.module.css"
import Image from "next/image"
import publicAsset from "@/types/public_asset"

export default function Listing({ product }: { product: Product }) {
    return (
        <div className={styles.product}>
            <Image src={publicAsset(product.image)} alt={`Image of ${product.name}`} width={50} height={100}/>
            <div>
                <h3>{product.name}</h3>
                <p className={styles.price}>${product.price}</p>
                <ul>
                    {product.contents.map(
                        (value,index) => <li key={index}>{value}</li>)
                    }
                </ul>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}