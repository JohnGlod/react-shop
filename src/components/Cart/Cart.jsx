import './Cart.css'
import { useContext } from 'react'
import { ShopContext } from '../../context';

const Cart = () => {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext)
  const quantity = order.length
  return (
    <button className="cart pink darken-1 white-text" onClick={handleBasketShow} >
      <div className="cart-icon">
        <i className="material-icons">shopping_basket</i>
      </div>
      {
        quantity ? <div className="cart-count">{quantity}</div> : null
      }
    </button>
  )
}

export {Cart}