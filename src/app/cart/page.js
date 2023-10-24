"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import CartCard from "./CartCard";
import styles from "../../styles/detailedcard.module.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";

function Cart() {
  // const list = useSelector((state) => state.cart);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/cart");
    const ls = await res.json();
    console.log(ls.data);
    setList(ls.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CustomNavbar />
      <h1 className={styles.heading}>Cart Items</h1>
      {list.length == 0 && <EmptyCart />}
      {list.map((product) => (
        <CartCard item={product} func={fetchData} />
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
