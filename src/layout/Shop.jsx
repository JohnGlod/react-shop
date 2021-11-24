import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from '../components/Preloader/Preloader';
import { GoodsList } from '../components/GoodsList/GoodsList';
import { Cart } from '../components/Cart/Cart';
import { BasketList } from '../components/BasketList/BasketList';
import { Alert } from '../components/Alert/Alert'

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('')

  const closeAlert = () => setAlertName('')
 
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity : newQuantity
        }
      }else {
        return el
      }
    })
    setOrder(newOrder)
  }
  const decQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity : newQuantity <= 1 ? 1 : newQuantity
        }
      }else{
          return el
      }
    })
    setOrder(newOrder)
  }

  const addToBasket = (item) => {
    const itemId = order.findIndex((orderItem) => orderItem.id === item.id);
    console.log(`itemId`, itemId);
    if (itemId < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemId) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name)
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
  };

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
      <Cart
        quantity={order.length}
        addToBasket={addToBasket}
        handleBasketShow={handleBasketShow}
      />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
        />
      )}
      {
        alertName && <Alert name={alertName} closeAlert={closeAlert}/>
      }
    </main>
  );
};

export { Shop };
