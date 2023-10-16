import "../styles/category.css";
import { useRouter } from "next/navigation";

function Category(props) {
  const router = useRouter();

  return (
    <div className="category-card" onClick={() => router.push("/allproduct")}>
      <div className="category-card-photo">
        <img src={props.image} />
      </div>
      <div className="category-card-details">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Category;
