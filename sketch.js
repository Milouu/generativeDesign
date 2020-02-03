// Set params
let s = {}

// Set global
let seed

function preload() {
  webImage = loadImage('https://images.unsplash.com/photo-1580170525195-16a47393afab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80')
}

function setup() {
  // Init canvas
  createCanvas(window.innerWidth, window.innerHeight)

  // Set color
  s.rectColor = color(237, 0, 62)
  s.bgColor = color(163, 167, 174)

  // Init rect
  s.x = 75
  s.y = 75
  s.totalWitdh = 450
  s.height = 150
  s.count = 100
  s.randomColors = []

  for(let i = 0; i < 10; i++) {
    let x = random(webImage.width)
    let y = random(webImage.height)
    let c = webImage.get(x , y)
    s.randomColors.push(c)
  }

  seed = random(500)

  // Set style
  background(s.bgColor)
}

function draw() {
  randomSeed(seed)
  background(s.bgColor)
  noStroke()
  let w = s.totalWitdh / s.count
  for(let i = 0; i < s.count; i++) {
    let c = s.randomColors[Math.floor(Math.random() * s.randomColors.length)]
    fill(c)
    let x = s.x + i * w
    rect(x, s.y, w, random(s.height))
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