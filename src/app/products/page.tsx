'use client'

import getProducts from "@/api/products";
import Listing from "@/components/ProductListing/ProductListing";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
            <h1>Products</h1>
            <p>LEC Solutions will save you money. In most cases, our products are 30% less espensive than major OEMs with zero degrade in quality.</p>
            <button>Need a Custom Blend? Click Here</button>
            <Container>
                <Row>
            {products.map((product) => (
                <Col md={6} key={product.id}>
                    <Listing product={product} />
                </Col>
            ))}
                </Row>
            </Container>
        </main>
    );
}
