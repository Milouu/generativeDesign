import Box from './Box.js'

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

// init Box
const box = new Box(productIngredients)