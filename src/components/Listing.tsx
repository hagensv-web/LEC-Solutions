interface Product {
    name: string,
    price: number,
    contents: string[]

}


export default function Listing({ name, price, contents}: Product) {
    return (
        <div>
            <img src="Image Source"/>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <ul>
                    {contents.map((value) => <li>{value}</li>)}
                </ul>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}