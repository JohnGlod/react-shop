import './GoodsList.css'
import { useContext } from 'react'
import { ShopContext } from '../../context'
import { GoodsItem } from '../GoodsItem/GoodsItem'

const GoodsList = () => {
  const {goods = [] } = useContext(ShopContext)

  if (!goods.length) {
    return <h2 className="goods__response">Ничего не найдено </h2>
  }
  return (
    <div className="goods">
      {
        goods.map(item => {
          return <GoodsItem key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export {GoodsList}