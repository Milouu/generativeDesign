// Set params
let param = {
  width: 100,
  height: 100,
  count: 400,
}

// Set global
let seed

function preload() {
  webImage = loadImage('./assets/images/all_berries.jpg')
}

function setup() {
  // Init canvas
  createCanvas(window.innerWidth, window.innerHeight)

  param.ingredients = ['lorem', 'ipsum', 'dolor', 'test', 'sah']
  param.patterns = []

  // Set color
  param.paramColor = color(237, 0, 62)
  param.bgColor = color(253, 253, 253)
  param.randomColors = []

  

  for(let i = 0; i < 10; i++) {
    let x = random(webImage.width)
    let y = random(webImage.height)
    let c = webImage.get(x , y)
    param.randomColors.push(c)
  }

  // Set random color once
  // param.color = param.randomColors[Math.floor(random(param.randomColors.length))]

  for(let i = 0; i < param.ingredients.length; i++) {
    const pattern = {}
    pattern.color = param.randomColors[Math.floor(random(param.randomColors.length))]
    param.patterns[i] = pattern
  }

  seed = random(500)

  // Set style
  background(param.bgColor)
}

function draw() {
  background(param.bgColor)
  // noStroke()
  strokeWeight(4)
  randomSeed(seed)

  for(let i = 0; i < param.count; i++) {
    for(let j = 0; j < param.ingredients.length; j++) {
      let x = random(window.innerWidth)
      let y = random(window.innerHeight)
      // fill(param.patterns[j].color)
      stroke(param.patterns[j].color)
      
      rotate(PI / random(3))
      // rect(x, y, param.width, param.height)
      let width = random(param.width)
      beginShape(TRIANGLES)
      vertex(x, y)
      vertex(x + width/2, y + random(param.height))
      vertex(x + width, y)
      endShape()
    }
  }
}

function keyTyped() {
  if(key === 's') {
    saveCanvas('cours-hetic', 'jpg')
  }
  if(key === 'r') {
    document.location.reload(true)
  }
  if(key === 'n') {
    seed = random(500)
  }
}