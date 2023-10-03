'use client'

import Card from "@/components/Card";
import axios from "axios";
import { useState,useEffect } from "react";
import '../../styles/allproducts.css'

function AllProducts(){
    const [allProducts,setAllProducts] = useState(new Array());
    
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(response => setAllProducts(response.data));
    },[])

    return (
        <div className="container" >
            {allProducts.map(prod=>{
                if(prod.title.length>=30) prod.title = prod.title.slice(0,25)+'...'
                return <Card key={prod.id} image={prod.image} title={prod.title} price={prod.price} />
            })}
        </div>
    )
}

export default AllProducts;