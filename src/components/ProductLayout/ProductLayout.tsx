'use client';

import getProducts from "@/api/products";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Listing from "../ProductListing/ProductListing";

export default function ProductLayout(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        async function fetchProducts() {
            const products = await getProducts()
            setProducts(products);
        }
        
        fetchProducts()
    }, []);

    return (
        <Row className="g-5">
            {products.map((product) => (
                <Col md={12} lg={6} xxl={4} key={product.id}>
                    <Listing product={product} />
                </Col>
            ))}
        </Row>
    );
}