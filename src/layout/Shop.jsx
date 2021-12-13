import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../context';

import { Preloader } from '../components/Preloader/Preloader';
import { GoodsList } from '../components/GoodsList/GoodsList';
import { Cart } from '../components/Cart/Cart';
import { BasketList } from '../components/BasketList/BasketList';
import { Alert } from '../components/Alert/Alert';

const Shop = () => {
  const { 
    loading,
    alertName, 
    isBasketShow,
    setGoods 
  } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      })
      .catch((error) => console.error(error));
    //eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export { Shop };
