"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";
import styles from "../styles/navbar.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CustomNavbar = () => {
  // const list = useSelector((state) => state.cart);

  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/cart");
    const ls = await res.json();
    setCount(ls.data.length);
    setList(ls.data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" height={40} />
        </Link>
      </div>

      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href="/allproduct" className="font-bold font-sans text-[12px]">
            MEN
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/allproduct" className="font-bold font-sans text-[12px]">
            WOMEN
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/allproduct" className="font-bold font-sans text-[12px]">
            KIDS
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/allproduct" className="font-bold font-sans text-[12px]">
            HOME
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/allproduct" className="font-bold font-sans text-[12px]">
            BEAUTY
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/allproduct" className="font-bold font-sans text-[12px]">
            STUDIO
          </Link>
        </div>
      </div>

      <div className={styles.searchArea}>
        <div className="absolute left-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 stroke-2 gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          className="search h-[50%] w-[100%] pl-[30px] bg-[rgb(71, 72, 72)] focus:bg-white focus:outline-none focus:border-[2px] rounded justify-center items-center"
          type="text"
          placeholder="Search for products,brands and more"
        />
      </div>

      <div className={styles.options}>
        <div className="profile flex flex-col px-[12px] justify-center items-center">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="flex justify-center font-bold text-[12px]">
            Profile
          </div>
        </div>
        <Link href="/wishlist">
          <div className="wishlist flex flex-col px-[12px] justify-center items-center">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="flex justify-center font-bold text-[12px] items-center">
              Wishlist
            </div>
          </div>
        </Link>
        <Link href="/cart" rel="noopener noreferrer" target="_blank">
          <div className="cart flex flex-col px-[12px] justify-center ">
            <div className="flex justify-center relative ">
              <div className={styles.itemCount}>{count}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div className="flex justify-center font-bold text-[12px]">Bag</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CustomNavbar;
