import Link from "next/link";
import styles from "./Navbar.module.css";


export default function Nav(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}