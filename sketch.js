// Set params
let param = {
  width: 260,
  height: 140,
  count: 1
}

// Set global
let seed

function preload() {
  webImage = loadImage('./assets/images/chocolate_cereal.jpg')
}

function setup() {
  // Init canvas
  const canvas = createCanvas(param.width, param.height)
  canvas.parent('canvasTarget')

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
  // background(param.bgColor)
  background(param.patterns[2].color)

  // Stroke or not on patterns
  noStroke()
  // strokeWeight(4)
  randomSeed(seed)

  let x = 0
  let y = -(param.height/2)
  for(let i = 0; i < param.ingredients.length ; i++) {
    let width = (param.width / param.ingredients.length) * (1.5 + random(1))
    let height = param.height * (2 + random(1))
    x -= width/6

    fill(param.patterns[i].color)
    
    // rect(x, y, param.width, param.height)
    // let width = random(param.width + 100)
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
    rotate(PI / ((100))*random([-1, 1]))

    x += width / 1.5
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