import Charts from './Charts.js'
import Ingredients from './Texts.js'

export default class Box {
  constructor(productIngredients) {
    this.box = document.querySelector('.box')

    // init Ingredients & charts
    const texts = new Ingredients()
    const charts = new Charts()

    // Craft ingredients then charts
    texts.craftTitle('Chocolate cereal')
    texts.craftIngredients(productIngredients)
    charts.craftCharts(productIngredients)

    this.listeners()
  }

  listeners() {
    this.box.addEventListener('click', () => { this.generateBox() })
  }

  generateBox() {
    console.log('click')
  }
}