"use client";

import { useSelector } from "react-redux";
import WishlistCard from "./WishlistCard";
import styles from "../../styles/detailedcard.module.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import EmptyWishlist from "../wishlist/EmptyWishlist";

function Cart() {
  const list = useSelector((state) => state.wishlist);
  return (
    <div>
      <CustomNavbar />
      <h1 className={styles.heading}>Wishlist</h1>
      {list.map((product) => (
        <WishlistCard item={product} />
      ))}
      {list.length == 0 && <EmptyWishlist />}
      <Footer />
    </div>
  );
}

export default Cart;
