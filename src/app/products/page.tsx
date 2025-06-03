'use client'

import getProducts from "@/api/products";
import Listing from "@/components/ProductListing/ProductListing";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
    title: "Products • LEC Solutions",
    description: "Explore our range of high-quality calibration gas products designed for the Oil and Gas Industry and Industrial Services Arena.",
    openGraph: {
        title: "LEC Solutions Products",
        description: "Explore our range of high-quality calibration gas products designed for the Oil and Gas Industry and Industrial Services Arena.",
    },
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        async function fetchProducts() {
            const products = await getProducts()
            setProducts(products);
        }
        
        fetchProducts()
    }, []);


    return (
        <main>
            <Container>
                <h1>Products</h1>
                <p>LEC Solutions will save you money. In most cases, our products are 30% less espensive than major OEMs with zero degrade in quality.</p>
                <button className="center">Need a Custom Blend? Click Here</button>
                <Row className="g-5">
                {products.map((product) => (
                    <Col md={12} lg={6} xxl={4} key={product.id}>
                        <Listing product={product} />
                    </Col>
                ))}
                </Row>
                <button className="center">Need a Custom Blend? Click Here</button>
            </Container>
        </main>
    );
}
