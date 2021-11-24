import './BasketList.css';

import { BasketItem } from '../BasketItems/BasketItem';

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity  = Function.prototype,
  } = props;

  const totalPrice = order.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );

  return (
    <ul className='collection basket-list'>
      <li class='collection-item active'>
        <h4>Корзина</h4>
      </li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}

      <li className='collection-item active'>Итоговая сумма: {totalPrice}
        <button className="secondary-content btn-small pink darken-1">Оформить заказ</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export { BasketList };
