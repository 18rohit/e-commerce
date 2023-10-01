import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import '../styles/todaydeal.css'

function TopPicks(){

    const [todaysItem,setTodaysItem] = useState(new Array());
    
    useEffect(()=>{
        let arr = new Array();
        axios.get("https://fakestoreapi.com/products").then(response => {
            console.log(response.data);
            for(let item of response.data){
                if(item.id>7) arr.push(item);
            }
        }).then(()=>setTodaysItem(arr));
    },[])

    return (
        <>
        <h2>Top Picks</h2>
        <div className="todaydeal">
            {todaysItem.map((prod)=>{
                if(prod.title.length>=40) prod.title = prod.title.slice(0,25)+'...'
                return <Card key={prod.title} title={prod.title} price={prod.price} image={prod.image} />
            })}
        </div>
        </>
    )
}

export default TopPicks;