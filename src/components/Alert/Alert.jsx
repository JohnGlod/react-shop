import './Alert.css';
import { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';

const Alert = () => {
  const { alertName = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setInterval(closeAlert, 3000);

    return () => clearInterval(timerId);
  }, [alertName]);

  return (
    <div id='toast-container'>
      <div className='toast'>{alertName} добавлен в корзину! </div>
    </div>
  );
};

export { Alert };
