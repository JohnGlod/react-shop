import './BasketItem.css';

const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    full_background,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item avatar'>
      <img src={full_background} alt={name} className='circle' />
      <span className='title basket-title'>{name}</span>
      <div className='basket-descr'>
        {' '}
        Количество:{' '}
        <span className='busket-descr busket-descr__accent'>
          {' '}
          <i
            className='material-icons basket-change'
            onClick={() => decQuantity(id)}
          >
            remove
          </i>{' '}
          {quantity}
          <i
            className='material-icons basket-change'
            onClick={() => incQuantity(id)}
          >
            add
          </i>
        </span>{' '}
        x Cтоимость товара :{' '}
        <span className='busket-descr busket-descr__accent'>{price}</span>{' '}
      </div>
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
};

export { BasketItem };
