"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import styles from "../styles/banner.module.css";

function Banner() {
  const [bannerPhotos, setBannerPhotos] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState(
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  );
  const [idx, setIdx] = useState(1);

  //   useEffect(() => {
  //     function updateBanner() {
  //       if (idx === 7) setIdx(0);
  //       else setIdx(idx + 1);
  //       console.log(idx);
  //     }
  //     const interval = setInterval(updateBanner, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    let i = 0;

    function updateBanner() {
      i++;
      setIdx(i % 8);
    }

    const interval = setInterval(updateBanner, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=8").then((response) => {
      setBannerPhotos(response.data);
    });
  }, []);

  useEffect(() => {
    if (bannerPhotos.length > 0) setBannerPhoto(bannerPhotos[idx]["image"]);
  }, [bannerPhotos, idx]);

  return (
    <div className={styles.bannerBox}>
      <Image
        src={bannerPhoto}
        width={1000}
        height={500}
        alt="banner"
        className={styles.banner}
      />
    </div>
  );
}

export default Banner;
