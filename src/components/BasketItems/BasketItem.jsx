import './BasketItem.css';

const BasketItem = (props) => {
  const {
    id, 
    name,
    price,
    full_background,
    quantity,
  } = props

  return (
    <li className='collection-item avatar'>
      <img src={full_background} alt={name} className='circle' />
      <span className='title basket-title' >{name}</span>
      <div className="basket-number">Количество: <span className='busket-number busket-number__accent'>{quantity}</span> * Cтоимость: <span className='busket-number busket-number__accent'>{price}</span> </div>
      <span className="secondary-content">
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
};

export { BasketItem };
