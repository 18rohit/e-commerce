import Link from "next/link";
import styles from "../../styles/emptycart.module.css";

function EmptyWishlist() {
  return (
    <div className={styles.main}>
      <h1 className={styles.empty}>No item in wishlist</h1>
      <Link href="/allproduct">
        <h3 className={styles.products}>Go to store to add some</h3>
      </Link>
    </div>
  );
}

export default EmptyWishlist;
