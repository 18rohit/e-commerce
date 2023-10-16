import Image from "next/image";
import styles from "../../styles/minicard.module.css";

function MiniCard(props) {
  return (
    <div className={styles.miniCard}>
      <div className={styles.imageContainer}>
        <Image
          src={props.item.image}
          fill
          alt="product image"
          className="img"
        />
      </div>
      <div className={styles.details}>
        <p className={styles.category}>{props.item.category}</p>
        <p className={styles.title}>{props.item.title.slice(0, 15) + "..."}</p>
        <p className={styles.price}>Price: ${props.item.price}</p>
      </div>
    </div>
  );
}

export default MiniCard;
