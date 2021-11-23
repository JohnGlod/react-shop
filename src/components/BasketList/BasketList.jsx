import './BasketList.css';

import { BasketItem } from '../BasketItems/BasketItem';

const BasketList = (props) => {
  const { order = [], handleBasketShow = Function.prototype } = props;

  const totalPrice = order.reduce((acc, val) => acc + val.price * val.quantity, 0);

  return (
    <ul className='collection basket-list'>
      <li class='collection-item active'>
        <h4>Корзина</h4>
      </li>

      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}

      <li className='collection-item active'>
        Итоговая сумма: {totalPrice}
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
    </ul>
  );
};

export { BasketList };
