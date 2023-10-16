import Image from "next/image";
import styles from "../../styles/detailedcard.module.css";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "./wishlistSlice";
import { addItem } from "../cart/cartSlice";

function WishlistCard(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <Image
          src={props.item.image}
          height={100}
          width={100}
          alt="product image"
          className={styles.image}
        />
      </div>
      <div>
        <div className={styles.detailSection}>
          <p className={styles.title}>{props.item.title}</p>
          <p className={styles.description}>{props.item.description}</p>
          <p className={styles.price}>{props.item.price}</p>
        </div>
        <div className={styles.buttonSection}>
          <button
            className={styles.save}
            onClick={() => dispatch(addItem(props.item))}
          >
            Add to cart
          </button>
          <button
            className={styles.delete}
            onClick={() => dispatch(removeFromWishlist(props.item.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
