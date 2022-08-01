function GoodsItem(props) {
    const { id, name, description, price, full_background } = props;

    return (
    <div className="card" id={id}>
        <div className="card-image">
            <img src={full_background} alt={name} />
            
         </div>
        <div className="card-content">
            <span className="card-title" style={{fontSize:'2rem'}}>{name}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className="btn">Купить</button>
            <span className="right">{price} $ </span>
        </div>
     </div> 
    );
}

export default GoodsItem;