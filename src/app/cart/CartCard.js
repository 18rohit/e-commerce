import Image from "next/image";
import styles from "../../styles/detailedcard.module.css";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import { addToWishlist } from "../wishlist/wishlistSlice";
import swal from "sweetalert";

function CartCard(props) {
  const dispatch = useDispatch();

  const deleteItemFromCart = async () => {
    await fetch("http://localhost:3000/api/cart", {
      method: "DELETE",
      body: JSON.stringify(props.item),
    });
    swal("Deleted", "Your item has been removed from the cart", "success");
    props.func();
  };

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
            onClick={() => dispatch(addToWishlist(props.item))}
          >
            Add to wishlist
          </button>
          <button
            className={styles.delete}
            // onClick={() => dispatch(removeItem(props.item.id))}
            onClick={deleteItemFromCart}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
