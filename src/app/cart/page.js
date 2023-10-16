"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import CartCard from "./CartCard";
import styles from "../../styles/detailedcard.module.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import EmptyCart from "./EmptyCart";

function Cart() {
  const list = useSelector((state) => state.cart);
  return (
    <div>
      <CustomNavbar />
      <h1 className={styles.heading}>Cart Items</h1>
      {list.length == 0 && <EmptyCart />}
      {list.map((product) => (
        <CartCard item={product} />
      ))}
      {list.length > 0 && (
        <Link href="/payment">
          <button className={styles.checkout}>Proceed to checkout</button>
        </Link>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
