import { Product } from "@/types/product";

export default async function getProducts(): Promise<Product[]> {
    // const res = await fetch("https://fakestoreapi.com/products");
    // if (!res.ok) {
    //     throw new Error("Failed to fetch products");
    // }
    // return res.json();

    return [
        {
            id: 1,
            name: "116ES-411",
            price: 360.00,
            contents: ["100 PPM Carbon Monoxide", "25 PPM Hydrogen Sulfide", "25% LEL Pentane", "19% Oxygen", "Nitrogen"],
            image: "/images/product/116ES.jpg"
        },
        {
            id: 2,
            name: "116ES-421",
            price: 360.00,
            contents: ["116 Liter Ecosmart Cylinder", "100 PPM Carbon Monoxide", "50% LEL Methane", "15 PPM Hydrogen Sulfide", "18% Oxygen", "Nitrogen"],
            image: "/images/product/116ES.jpg"
        },
        {
            id: 3,
            name: "34L-421",
            price: 170.00,
            contents: ["34 Liter Aluiminum Cylinder", "100 PPM Carbon Monoxide", "50% LEL Methane", "25 PPM Hydrogen Sulfide", "18% Oxygen", "Nitrogen"],
            image: "/images/product/34Laluminum.png"
        },
        {
            id: 4,
            name: "58L-421",
            price: 200.00,
            contents: ["58 Liter Cylinder", "100 PPM Carbon Monoxide", "50% LEL Methane", "25 PPM Hydrogen Sulfide", "18% Oxygen", "Nitrogen"],
            image: "/images/product/58L.png"
        },
        {
            id: 5,
            name: "10L-490-T",
            price: 40.00,
            contents: ["10 Liter Cylinder", "200 PPM Carbon Monoxide", "50% LEL Methane", "25 PPM Hydrogen Sulfide", "10% Oxygen", "Nitrogen"],
            image: "/images/product/10L.png"
        },
        {
            id: 6,
            name: "34LS-258-100",
            price: 65.00,
            contents: ["34 Liter Cylinder", "Single Gas (100 PPM Calibration Gas)", "Air Balance"],
            image: "/images/product/34LS.png"
        },
        {
            id: 7,
            name: "58L-98-25",
            price: 125.00,
            contents: ["58 Liter Cylinder", "25 PPM Hydrogen Sulfide", "Nitrogen"],
            image: "/images/product/58L.png"
        },
        {
            id: 8,
            name: "34L-413-18",
            price: 170.00,
            contents: ["50 PPM Carbon Monoxide", "50% LEL Methane", "10 PPM Hydrogen Sulfide", "18% Oxygen", "Nitrogen"],
            image: "/images/product/34Laluminum.png"
        },
        {
            id: 9,
            name: "103L-1",
            price: 120.00,
            contents: ["20.9% Oxygen", "Nitrogen"],
            image: "/images/product/34Laluminum.png"
        },
        {
            id: 10,
            name: "10L-421",
            price: 40.00,
            contents: ["10 Liter Cylinder", "100 PPM Carbon Monoxide", "50% LEL Methane", "25 PPM Hydrogen Sulfide", "18% Oxygen", "Nitrogen"],
            image: "/images/product/10L.png"
        },
        {
            id: 11,
            name: "58L-428-20",
            price: 200.00,
            contents: ["58 Liter Cylinder", "60 PPM Carbon Monoxide", "1.45% vol. (50% LEL Pentane Stimulant) Methane", "20 PPM Hydrogen Sulfide", "15% Oxygen", "Nitrogen"],
            image: "/images/product/58L.png"
        },
        {
            id: 12,
            name: "34L-428-20",
            price: 175.00,
            contents: ["34 Liter Cylinder", "60 PPM Carbon Monoxide", "1.45% vol. (50% LEL Pentane Stimulant) Methane", "20 PPM Hydrogen Sulfide", "15% Oxygen", "Nitrogen"],
            image: "/images/product/34Laluminum.png"
        },
        {
            id: 13,
            name: "17L-1",
            price: 40.00,
            contents: ["20.9% Oxygen", "Nitrogen"],
            image: "/images/product/17L.png"
        },
        
    ];
}