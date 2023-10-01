'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import '../styles/banner.css'

function Banner() {
    const [bannerPhotos,setBannerPhotos] = useState(new Array());
    const [bannerPhoto,setBannerPhoto] = useState("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
    const [idx,setIdx] = useState(1);

    useEffect(()=>{
        function updateBanner(){
            if(idx===7) setIdx(0); 
            else setIdx(idx+1);
            console.log(idx);
        }
        const interval = setInterval(updateBanner,5000);
        return ()=>clearInterval(interval);
    },[])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=8').then(response => {
            setBannerPhotos(response.data)
        });
    },[])

    useEffect(()=>{
        if(bannerPhotos.length>0) setBannerPhoto(bannerPhotos[idx]["image"]);
    },[bannerPhotos,idx])

    return (<div className='banner-box'>
        <img src={bannerPhoto} className="banner" />
    </div>)
}

export default Banner;