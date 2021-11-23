import './Cart.css'

const Cart = (props) => {
  const { quantity = 0, handleBasketShow = Function.prototype } = props

  return (
    <button className="cart pink darken-1 white-text" onClick={handleBasketShow} >
      <div className="cart-icon">
        <i class="material-icons">shopping_basket</i>
      </div>
      {
        quantity ? <div className="cart-count">{quantity}</div> : null
      }
    </button>
  )
}

export {Cart}