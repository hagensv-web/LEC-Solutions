import styles from "./Navbar.module.css";


export default function Nav(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}