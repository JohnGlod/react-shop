import { useEffect } from "react"
import './Alert.css'
const Alert = (props) => {
  const {name = '', closeAlert = Function.prototype } = props
  useEffect(() => {
    const timerId = setInterval(closeAlert, 3000)

    return () => clearInterval(timerId)
  },[name])

  return (
  <div id="toast-container">
    <div className="toast">{name} добавлен в корзину! </div>
  </div>)
}

export{Alert}