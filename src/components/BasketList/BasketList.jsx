import './BasketList.css';
import { useContext } from 'react';
import { ShopContext } from '../../context';

import { BasketItem } from '../BasketItems/BasketItem';

const BasketList = () => {
  const {order = [], handleBasketShow} = useContext(ShopContext)
  const totalPrice = order.reduce((acc, val) => acc + val.price * val.quantity, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>
        <h4>Корзина</h4>
      </li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
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
