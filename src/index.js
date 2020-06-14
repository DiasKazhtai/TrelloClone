import './scss/index.scss'
import 'normalize.css'

const plans = []
const newBorder = document.querySelector('.newBorder')
const newBorderName = document.querySelector('.newBorderName')
const cancelBtn = document.querySelector('.cancelBtn')
const borderInput = document.querySelector('.borderInput')
const mainContainer  = document.querySelector('.main__container')
const createBtn = document.querySelector('.createBtn')

newBorder.addEventListener('click', () => {
    newBorderName.style = "display:block"
})
cancelBtn.addEventListener('click', () => {
    newBorderName.style = "display:none"
})
borderInput.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        plans.push(event.target.value)
        event.target.value = ''
    }
})
let i = -1
createBtn.addEventListener('click', () => {
    if(plans.length !=0  ){
        i += 1
        const div = document.createElement('div')
        div.classList.add('newPlan')
        div.innerHTML = plans[i]
        mainContainer.append(div)
    }
})