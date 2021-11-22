import './Cart.css'

const Cart = (props) => {
  const { quantity = 0 } = props

  return (
    <button className="cart pink darken-1 white-text">
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