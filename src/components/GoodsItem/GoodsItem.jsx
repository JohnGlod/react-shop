import './GoodsItem.css'

const GoodsItem = (props) => {

  const {
    id, 
    name,
    description,
    price,
    full_background, 
    addTheGoods = Function.prototype 
  } = props

  return (
      <div className="card">
        <div className="card-image">
          <img src={full_background} alt={name}/>
        </div>
        <h3 className="card-title center">{name}</h3>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() => addTheGoods({
            id, 
            name,
            price,
          })}>Купить</button>
          <span className="card-price right">{price}</span>
        </div>
      </div>
  )
};

export { GoodsItem };
