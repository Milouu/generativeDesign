import Charts from './Charts.js'
import Ingredients from './Texts.js'

// To import from data.js
const productIngredients = [
  {
    name: 'Blé',
    percentage: '36'
  },
  {
    name: 'Avoine',
    percentage: '20'
  },
  {
    name: 'Avoine',
    percentage: '30'
  },
]

// init Ingredients & charts
const texts = new Ingredients()
const charts = new Charts()

// Craft ingredients then charts
texts.craftTitle('Chocolate cereal')
texts.craftIngredients(productIngredients)
charts.craftCharts(productIngredients)