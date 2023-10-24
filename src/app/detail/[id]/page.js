"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../../../styles/detail.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/cart/cartSlice";
import { addToWishlist } from "../../wishlist/wishlistSlice";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNavbar";
import swal from "sweetalert";

function Detail({ params }) {
  const dispatch = useDispatch();

  const addItemToCart = async () => {
    const res = await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      body: JSON.stringify(product),
    });
    swal("Added!", "Item has been added to the cart", "success");
  };

  const [product, setProduct] = useState({
    image: "",
    category: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => setProduct(response.data));
  }, []);

  return (
    <>
      <CustomNavbar />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={product.image} alt="product-image" fill />
        </div>
        <div className={styles.details}>
          <p className={styles.heading}>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </p>
          <p className={styles.desc}>
            {product.description.charAt(0).toUpperCase() +
              product.description.slice(1)}
          </p>
          <p className={styles.price}>Only at price of ${product.price}</p>
          <div className={styles.buttons}>
            <button
              className={styles.wishlist}
              onClick={() => dispatch(addToWishlist(product))}
            >
              Add to wishlist
            </button>
            <button
              className={styles.addToCart}
              // onClick={() => dispatch(addItem(product))}
              onClick={addItemToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
