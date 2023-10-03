import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Card from "./Card";
import '../styles/todaydeal.css'

function TodayDeal(){

    const [todaysItem,setTodaysItem] = useState(new Array());
    const router = useRouter();

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products?limit=10").then(response => {
            setTodaysItem(response.data);
        })
    },[])

    return (
        <>
        <h2>Today's Deal</h2>
        <div className="todaydeal" onClick={()=>router.push('/allproducts')}>
            {todaysItem.map((prod)=>{
                if(prod.title.length>=30) prod.title = prod.title.slice(0,25)+'...'
                return <Card key={prod.title} title={prod.title} price={prod.price} image={prod.image} />
            })}
        </div>
        </>
    )
}

export default TodayDeal;