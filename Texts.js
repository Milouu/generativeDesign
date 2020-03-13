export default class Texts {
  constructor() {
    this.ingredients = document.querySelector('.ingredients')
    this.title = document.querySelector('.box__title')

    this.text = this.ingredients.querySelector('.ingredients__text')
  }

  clearIngredients() {
    this.text.innerText = ''
  }

  craftTitle(name) {
    this.title.innerText = name
  }

  craftIngredients(ingredients) {
    // Clear
    this.clearIngredients()
    
    for(const [i, ingredient] of ingredients.entries()) {
      this.text.innerText+=`${ingredient.name} ${ingredient.percentage}%`
      i === ingredients.length - 1 ? this.text.innerText+='.' : this.text.innerHTML+=',&nbsp;'
    }
  }
}