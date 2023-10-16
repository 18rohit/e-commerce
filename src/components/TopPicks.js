import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Card from "./Card";
import styles from "../styles/todaydeal.module.css";

function TopPicks() {
  const [todaysItem, setTodaysItem] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let arr = new Array();
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        for (let item of response.data) {
          if (item.id > 7) arr.push(item);
        }
      })
      .then(() => setTodaysItem(arr));
  }, []);

  return (
    <>
      <h2>Top Picks</h2>
      <div
        className={styles.todaydeal}
        onClick={() => router.push("/allproduct")}
      >
        {todaysItem.map((prod) => {
          if (prod.title.length >= 40)
            prod.title = prod.title.slice(0, 25) + "...";
          return (
            <Card
              key={prod.title}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default TopPicks;
