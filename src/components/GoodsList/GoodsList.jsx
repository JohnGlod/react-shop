import './GoodsList.css'
import { GoodsItem } from '../GoodsItem/GoodsItem'

const GoodsList = (props) => {
  const {goods = [], addToBasket = Function.prototype } = props

  if (!goods.length) {
    return <h2 className="goods__response">Ничего не найдено </h2>
  }
  return (
    <div className="goods">
      {
        goods.map(item => {
          return <GoodsItem key={item.id} addToBasket={addToBasket} {...item}/>
        })
      }
    </div>
  )
}

export {GoodsList}