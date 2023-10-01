import '../styles/category.css'

function Category(props){
    return (
        <div className='category-card'>
            <div className='category-card-photo'><img src={props.image} /></div>
            <div className='category-card-details'><p>{props.name}</p></div>
        </div>
    )
}

export default Category;