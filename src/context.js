import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialValue = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialValue);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };
  value.handleBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };
  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };
  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  }
  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};