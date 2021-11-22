import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from '../components/Preloader/Preloader';
import { GoodsList } from '../components/GoodsList/GoodsList';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.featured);
        data.featured && setGoods(data.featured);         //data.shop && setItems(data.shop);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className='container content'>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};

export { Shop };
