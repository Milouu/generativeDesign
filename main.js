import Box from './Box.js'
import { products } from './data.js'

// init Box
const box = new Box(products)
box.generateBox(products)