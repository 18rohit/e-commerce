import '../styles/card.css'

function Card(props){
    return (
        <div className="card border-4 border-double border-[#3b3b4b]">
            <div className="card-photo"><img className="card-image" src={props.image} alt="card" /></div>
            <div className="card-details">
                <div className="card-title">{props.title}</div>
                <div className="card-price">Price: ${props.price}</div>
            </div>
        </div>
    )
}

export default Card;