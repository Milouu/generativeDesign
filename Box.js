import Charts from './Charts.js'
import Ingredients from './Texts.js'

export default class Box {
  constructor(products) {
    this.box = document.querySelector('.box')

    this.listeners(products)
  }

  listeners(products) {
    this.box.addEventListener('click', () => { this.generateBox(products) })
  }

  generateBox(products) {
    const index = Math.floor(Math.random() * products.length)
    
    // init Ingredients & charts
    const texts = new Ingredients()
    const charts = new Charts()

    // Craft ingredients then charts
    texts.craftTitle(products[index].name)
    texts.craftIngredients(products[index].ingredients)
    charts.craftCharts(products[index].ingredients)
  }
}