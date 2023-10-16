import Link from "next/link";
import styles from "../../styles/emptycart.module.css";

function EmptyCart() {
  return (
    <div className={styles.main}>
      <h1 className={styles.empty}>Your cart is empty</h1>
      <Link href="/allproduct">
        <h3 className={styles.products}>Have a look in our store</h3>
      </Link>
    </div>
  );
}

export default EmptyCart;
