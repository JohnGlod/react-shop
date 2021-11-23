import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from '../components/Preloader/Preloader';
import { GoodsList } from '../components/GoodsList/GoodsList'; 
import { Cart } from '../components/Cart/Cart';
import { BasketList } from '../components/BasketList/BasketList'

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const addTheGoods = (item) => {

    const itemId = order.findIndex(orderItem => orderItem.id === item.id)
    console.log(`itemId`, itemId)
    if (itemId < 0) {
      const newItem = {
        ...item,
        quantity : 1,
      }
      setOrder([...order, newItem])
    }else{
      const newOrder = order.map((orderItem, index) => {
        if (index === itemId ) {
          console.log(`index`, index)
          return {
            ...orderItem, 
            quantity: orderItem.quantity + 1 
          }
        }else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} addTheGoods={addTheGoods} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addTheGoods={addTheGoods}/>}
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} /> 
      }
    </main>
  );
};

export { Shop };
