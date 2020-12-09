import Button from './button.js'
import AGoodItem from './agi.js'

export default class GoodItemInCart extends AGoodItem {
  constructor(props) {
    super(props)
  }
  //переопределяем рендер
  render(placeToRender) {
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('cart__good')

      block.innerHTML = `${this.name}  (${this.price})  ${this.counter} шт. `
      placeToRender.appendChild(block)

      const cartButton = new Button('убрать')
      block.appendChild(cartButton.getTemplate())
    }
  }
}