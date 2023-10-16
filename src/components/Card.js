import { useRouter } from "next/navigation";
import "../styles/card.css";

function Card(props) {
  const router = useRouter();
  return (
    <div
      className="card border-4 border-double border-[#3b3b4b] my-5"
      onClick={() => router.push(`/detail/${props.id}`)}
    >
      <div className="card-photo">
        <img className="card-image" src={props.image} alt="card" />
      </div>
      <div className="card-details">
        <div className="card-title">{props.title}</div>
        <div className="card-price">Price: ${props.price}</div>
      </div>
    </div>
  );
}

export default Card;
