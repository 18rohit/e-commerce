import axios from "axios";
import { useEffect, useState } from "react";

import Category from "./Category";
import '../styles/category.css'

// import men from '../../public/images/men.jpeg'
// import women from '../../public/images/women.jpeg'
// import electronic from '../../public/images/electronic.png'
// import jewelery from '../../public/images/jewelery.jpeg'


function Categories(){
    const [categoriesSet,setCategoriesSet] = useState(new Set());
    const [categories,setCategories] = useState(new Array());
    let mp = new Map();
    mp.set("men","https://i.pinimg.com/originals/ef/bf/32/efbf328bb7f4a7afd5ae982f771568af.jpg");
    mp.set("jew","https://i.pinimg.com/550x/4f/31/9f/4f319f4869f0c40afa30d388487ef7c9.jpg");
    mp.set("ele","https://marketplace.canva.com/EAExEhIzpoM/1/0/1600w/canva-blue-minimal-electronics-modern-logo-F0L7TvGOD-I.jpg");
    mp.set("wom","https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?cs=srgb&dl=pexels-ivan-oboleninov-2916814.jpg&fm=jpg");

    useEffect(()=>{
        let temp = new Set();
        axios.get("https://fakestoreapi.com/products").then(response=>response.data.map(prod=>temp.add(prod.category))).then(()=>{setCategoriesSet(temp);})
    },[])

    useEffect(()=>{
        let arr = new Array();
        for(let item of categoriesSet) {arr.push(item);}
        setCategories(arr);
    },[categoriesSet])

    return (
        <>
        <h2>Categories</h2>
        <div className="categories">
            {categories.map((category)=>{
                return <Category key={category} image={mp.get(category.slice(0,3))} name={category} />
            })}
        </div>
        </>
    )
}

export default Categories;