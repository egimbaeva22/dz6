//todolist
const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')
const todoBlock = document.querySelectorAll(".block_text")
const modal = document.querySelector(".modal_window")
const currentText = document.querySelector(".currentText")
const newText = document.querySelector(".newText")
const confirmBtn = document.querySelector(".confirm")
let newTask = ""

const showModal = (inputText) => {
    modal.style.display = "flex"
    currentText.value = inputText
}

const hideModal = () => {
    modal.style.display = "none"
    newText.value = ""
}

hideModal()

const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Произошла ошибка, введите какой-нибудь текст')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.innerText = 'EDIT'

    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', ()=>{
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)

    deleteButton.addEventListener("click", ()=>{
        div.remove()
    })

    editButton.addEventListener("click", ()=>{
        showModal(text.innerText)
    })

    newText.onchange = () => {
        newTask = newText.value
    }

    confirmBtn.onclick = () => {
        if (newTask) {
            text.innerText = newTask
            hideModal()
        }
    }

    input.value = '';
}

createButton.onclick = () => createTodo()
window.onkeydown = (event)=>{
    if(event.code === 'Enter'){
        createTodo()
    }
}