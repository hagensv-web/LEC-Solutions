import ProductLayout from "@/components/ProductLayout/ProductLayout";
import { Container } from "react-bootstrap";

export const metadata = {
    title: "Products • LEC Solutions",
    description: "Explore our range of high-quality calibration gas products designed for the Oil and Gas Industry and Industrial Services Arena.",
    openGraph: {
        title: "LEC Solutions Products",
        description: "Explore our range of high-quality calibration gas products designed for the Oil and Gas Industry and Industrial Services Arena.",
    },
}

export default function Products() {
    return (
        <main>
            <Container>
                <h1>Products</h1>
                <p className="center-text">LEC Solutions will save you money. In most cases, our products are 30% less espensive than major OEMs with zero degrade in quality. Our lead time is normally next day which is unlike many other manufacturers who can run 10 or more days.</p>
                <p className="center-text">Our staff can help you choose the correct calibration mix for your application.</p>
                <button className="center">Need a Custom Blend? Click Here</button>
                <ProductLayout />
                <button className="center">Need a Custom Blend? Click Here</button>
            </Container>
        </main>
    );
}
