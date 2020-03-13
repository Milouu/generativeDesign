export default class Charts {
  constructor() {
    // DOM
    this.$container = document.querySelector('.charts')

    this.$charts = this.$container.querySelectorAll('.chart')
    this.$labels = this.$container.querySelectorAll('.label')
    this.$values = this.$container.querySelectorAll('.value')
  }

  clearCharts() {
    this.$container.innerHTML = ''
  }

  craftCharts(ingredients) {
    
    // Params
    const height = this.$container.offsetHeight

    // Clear
    this.clearCharts()
    
    for(const [i, $chart] of ingredients.entries()) {

      // Max 3 ingredients
      if(i >= 3) break

      const chart = `
        <li class="chart">
          <div class="chart__head">
              <img src="assets/images/chartHead.svg" alt="">
          </div>
          <div class="chart__body">
              <div class="chart__label">${ingredients[i].name} <span class="chart__value">${ingredients[i].percentage}%</span></div>
          </div>
        </li>`
      
        // Inject chart
        this.$container.innerHTML+=chart
        
        // Set height
        this.$container.querySelector('.chart:last-child').style.height = `${height * ingredients[i].percentage / this.getMax(ingredients)}px`

    }
  }

  getMax(ingredients) {

    const percentages = ingredients.map(ingredient => ingredient.percentage)

    return Math.max(...percentages)
  }
}

