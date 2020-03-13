function getProduct() {
  setTimeout(() => {
    
    product = JSON.parse(sessionStorage.product)
    setup()
    redraw()
  }, 0);
}

// Set params
let product = JSON.parse(sessionStorage.product)
let param = {
  width: 260,
  height: 140,
}

// Set global
let seed

function preload() {
  chocolate_cereals_image = loadImage('./assets/images/chocolate_cereals.jpg')
  fruit_cereals_image = loadImage('./assets/images/fruit_cereals.jpg')
  corn_cereals_image = loadImage('./assets/images/corn_cereals.jpg')
}

function setup() {
  // Init canvas
  const canvas = createCanvas(param.width, param.height)
  canvas.parent('canvasTarget')
  
  // Init product
  let ingredients = product.ingredients
  
  param.ingredients = ingredients
  param.patterns = []
  
  // Set color
  param.bgColor = color(253, 253, 253)
  
  // Listener
  document.querySelector('.box').addEventListener('click', getProduct, true)
  
  for(let i = 0; i < param.ingredients.length + 1; i++) {
    let image = eval(product.slug + '_image')
    let x = random(image.width)
    let y = random(image.height)
    let color = image.get(x , y)

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

function keyTyped() {
  if(key === 'r') {
    document.location.reload(true)
  }
}
