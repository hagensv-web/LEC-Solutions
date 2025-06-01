'use client'

import { useEffect } from "react";

export default function Products() {

    useEffect(() => {
        //TODO: query server
    }, []);


    return (
        <main>
            <h1>Products</h1>
            <p>LEC Solutions will save you money. In most cases, our products are 30% less espensive than major OEMs with zero degrade in quality.</p>
            <button>Need a Custom Blend? Click Here</button>
        </main>
    );
}
