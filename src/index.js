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
        const newTask = document.createElement('input')
        newTask.classList.add('newTask')
        newTask.addEventListener('keydown', event => {
            if(event.key === 'Enter'){
                const task = document.createElement('div')
                task.classList.add('task')
                const taskItem = document.createElement('div')
                taskItem.innerHTML = event.target.value
                taskItem.classList.add('task-item')
                task.append(taskItem)
                const delet = document.createElement('span')
                delet.classList.add('material-icons')
                delet.classList.add('delet')
                delet.innerHTML = 'clear'
                const complet = document.createElement('span')
                complet.classList.add('material-icons')
                complet.classList.add('complet')
                complet.innerHTML = 'done'
                task.append(complet)
                task.append(delet)
                div.append(task)
                delet.addEventListener('click', event=> {
                    event.target.parentNode.remove()
                })
                complet.addEventListener('click', event=> {
                    taskItem.classList.toggle('line-through')
                })
                event.target.value = ''
            }
        })
        div.append(newTask)
        mainContainer.append(div)
    }
})


