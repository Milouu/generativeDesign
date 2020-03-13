// import Box from './Box.js'
// import { products } from './data.js'

// const box = new Box(products)
// box.generateBox(products)

// let image = './assets/images/'+ products[box.index].slug +'.jpg'
// let ingredients = products[box.index].ingredients
let image = './assets/images/chocolate_cereals.jpg'
let ingredients = [1,2,3,4,5]

// Set params
let param = {
  width: 260,
  height: 140,
}

// Set global
let seed

function preload() {
  webImage = loadImage(image)
}

function setup() {
  // Init canvas
  const canvas = createCanvas(param.width, param.height)
  canvas.parent('canvasTarget')
  

  param.ingredients = ingredients
  param.patterns = []

  // Set color
  param.bgColor = color(253, 253, 253)

  
  for(let i = 0; i < param.ingredients.length + 1; i++) {
    let x = random(webImage.width)
    let y = random(webImage.height)
    let color = webImage.get(x , y)

    if(i === param.ingredients.length) {
      param.bgColor = color
      let hexColor = '#' + hex(color[0], 2) + hex(color[1], 2) + hex(color[2], 2)
      document.querySelector('.box__topLeft').style.borderBottomColor = hexColor
      document.querySelector('.box__topRight').style.borderBottomColor = hexColor
      let backface = document.querySelector('.box__topBack')
      backface.style.backgroundColor = hexColor
      backface.style.filter = "brightness(85%)"
    }
    else {
      const pattern = {}
      pattern.color = color
      param.patterns[i] = pattern
    }
  }

  seed = random(500)

  // Set style
  background(param.bgColor)
}

function draw() {
  background(param.bgColor)

  noStroke()
  randomSeed(seed)

  let x = 0
  let y = -(param.height/2)
  for(let i = 0; i < param.ingredients.length ; i++) {
    let width = (param.width / param.ingredients.length) * (1.5 + random(1))
    let height = param.height * (2 + random(1))
    x -= width/6

    fill(param.patterns[i].color)
    
    beginShape(TRIANGLES)
    vertex(x, y)
    if(y > 0) {
      vertex(x + width/2, y - height)
      vertex(x + width, y)
      y = -(param.height/2)
    } else {
      vertex(x + width/2, y + height)
      vertex(x + width, y)
      y = param.height * 1.5
    }
    endShape()

    // Rotation on patterns 
    rotate(PI / (100)*random([-1, 1]))

    x += width / 1.5
  }
}

// let drawPattern = function() {
//   draw()
// }

// let updatePattern = function() {
//   image = './assets/images/'+ products[box.index].slug +'.jpg'
//   ingredients = products[box.index].ingredients
//   drawPattern()
// }

// drawPattern()

// document.querySelector('.box').addEventListener('click', () => { updatePattern() })


// let sketch = function(p) {
//   // Set params
//   p.param = {
//     width: 260,
//     height: 140,
//   }

//   p.preload = function() {
//     p.webImage = p.loadImage(image)
//   }

//   p.setup = function() {
//     // Init canvas
//     p.canvas = p.createCanvas(p.param.width, p.param.height)
//     p.canvas.parent(parent)
    
//     p.param.ingredients = ingredients
//     p.param.patterns = []

//     // Set color
//     p.param.paramColor = p.color(237, 0, 62)
//     p.param.bgColor = p.color(253, 253, 253)

    

//     for(let i = 0; i < p.param.ingredients.length + 1; i++) {
//       let x = p.random(p.webImage.width)
//       let y = p.random(p.webImage.height)
//       let color = p.webImage.get(x , y)

//       if(i === p.param.ingredients.length) {
//         p.param.bgColor = color
//         let hexColor = '#' + p.hex(color[0], 2) + p.hex(color[1], 2) + p.hex(color[2], 2)
//         document.querySelector('.box__topLeft').style.borderBottomColor = hexColor
//         document.querySelector('.box__topRight').style.borderBottomColor = hexColor
//       }
//       else {
//         const pattern = {}
//         pattern.color = color
//         p.param.patterns[i] = pattern
//       }
//     }

//     p.seed = p.random(500)

//     // Set style
//     p.background(p.param.bgColor)
//   }

//   p.draw = function() {
//     p.background(p.param.bgColor)

//     p.noStroke()
//     p.randomSeed(p.seed)

//     p.x = 0
//     p.y = -(p.param.height/2)
//     for(let i = 0; i < p.param.ingredients.length ; i++) {
//       p.width = (p.param.width / p.param.ingredients.length) * (1.5 + p.random(1))
//       p.height = p.param.height * (2 + p.random(1))
//       p.x -= p.width/6

//       p.fill(p.param.patterns[i].color)
      
//       p.beginShape(p.TRIANGLES)
//       p.vertex(p.x, p.y)
//       if(p.y > 0) {
//         p.vertex(p.x + p.width/2, p.y - p.height)
//         p.vertex(p.x + p.width, p.y)
//         p.y = -(p.param.height/2)
//       } else {
//         p.vertex(p.x + p.width/2, p.y + p.height)
//         p.vertex(p.x + p.width, p.y)
//         p.y = p.param.height * 1.5
//       }
//       p.endShape()

//       // Rotation on patterns 
//       p.rotate(p.PI / (100)*p.random([-1, 1]))

//       p.x += p.width / 1.5
//     }
//   }
// }

// let sketch2 = function(p) {
//   // Set params
//   p.param = {
//     width: 260,
//     height: 140,
//     count: 1
//   }

//   p.preload = function() {
//     p.webImage = p.loadImage('./assets/images/chocolate_cereals.jpg')
//   }

//   p.setup = function() {
//     // Init canvas
//     p.canvas = p.createCanvas(p.param.width, p.param.height)
//     p.canvas.parent('canvasBackTarget')
    
//     p.param.ingredients = ['lorem', 'ipsum', 'dolor', 'test', 'sah']
//     p.param.patterns = []

//     // Set color
//     p.param.paramColor = p.color(237, 0, 62)
//     p.param.bgColor = p.color(253, 253, 253)

    

//     for(let i = 0; i < p.param.ingredients.length + 1; i++) {
//       let x = p.random(p.webImage.width)
//       let y = p.random(p.webImage.height)
//       let color = p.webImage.get(x , y)

//       if(i === p.param.ingredients.length) {
//         p.param.bgColor = color
//       }
//       else {
//         const pattern = {}
//         pattern.color = color
//         p.param.patterns[i] = pattern
//       }
//     }

//     p.seed = p.random(500)

//     // Set style
//     p.background(p.param.bgColor)
//   }

//   p.draw = function() {
//     p.background(p.param.bgColor)

//     p.noStroke()
//     p.randomSeed(p.seed)

//     p.x = 0
//     p.y = -(p.param.height/2)
//     for(let i = 0; i < p.param.ingredients.length ; i++) {
//       p.width = (p.param.width / p.param.ingredients.length) * (1.5 + p.random(1))
//       p.height = p.param.height * (2 + p.random(1))
//       p.x -= p.width/6

//       p.fill(p.param.patterns[i].color)
      
//       p.beginShape(p.TRIANGLES)
//       p.vertex(p.x, p.y)
//       if(p.y > 0) {
//         p.vertex(p.x + p.width/2, p.y - p.height)
//         p.vertex(p.x + p.width, p.y)
//         p.y = -(p.param.height/2)
//       } else {
//         p.vertex(p.x + p.width/2, p.y + p.height)
//         p.vertex(p.x + p.width, p.y)
//         p.y = p.param.height * 1.5
//       }
//       p.endShape()

//       // Rotation on patterns 
//       p.rotate(p.PI / (100)*p.random([-1, 1]))

//       p.x += p.width / 1.5
//     }
//   }
// }


// let space1 = new p5(sketch)
// let space2 = new p5(sketch2)





// function keyTyped() {
//   if(key === 's') {
//     saveCanvas('cours-hetic', 'jpg')
//   }
//   if(key === 'r') {
//     document.location.reload(true)
//   }
//   if(key === 'n') {
//     seed = random(500)
//   }
// }
