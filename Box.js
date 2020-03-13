import Charts from './Charts.js'
import Ingredients from './Texts.js'

export default class Box {
  constructor(products) {
    this.box = document.querySelector('.box')
    this.index = 0
    this.listeners(products)
  }

  listeners(products) {
    this.box.addEventListener('click', () => { this.generateBox(products) })
  }

  generateBox(products) {
    sessionStorage.setItem('product', products[this.index])
    
    // init Ingredients & charts
    const texts = new Ingredients()
    const charts = new Charts()

    // Craft ingredients then charts
    texts.craftTitle(products[this.index].name)
    texts.craftIngredients(products[this.index].ingredients)
    charts.craftCharts(products[this.index].ingredients)
    this.index === products.length - 1 ? this.index = 0 : this.index++
  }
}