// Set params
let param = {
  width: 10,
  height: 10,
  count: 400,
}

// Set global
let seed

function preload() {
  webImage = loadImage('https://images.unsplash.com/photo-1580170525195-16a47393afab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80')
}

function setup() {
  // Init canvas
  createCanvas(window.innerWidth, window.innerHeight)

  // Set color
  param.paramColor = color(237, 0, 62)
  param.bgColor = color(253, 253, 253)
  param.randomColors = []

  for(let i = 0; i < 10; i++) {
    let x = random(webImage.width)
    let y = random(webImage.height)
    let c = webImage.get(x , y)
    param.randomColors.push(c)
    console.log('randomColor')
  }

  // Set random color once
  param.color = param.randomColors[Math.floor(random(param.randomColors.length))]

  seed = random(500)

  // Set style
  background(param.bgColor)
}

function draw() {
  background(param.bgColor)
  noStroke()
  randomSeed(seed)

  for(let i = 0; i < param.count; i++) {
    
    let x = random(window.innerWidth)
    let y = random(window.innerHeight)
    fill(param.color)
    rect(x, y, param.width, param.height)
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