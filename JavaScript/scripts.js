// Seleção de elementos

const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editinput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções


// Eventos

todoform.addEventListener("submit", (e) => {

    e.preventDefault()

    const inputValue = todoinput.value 

    if(inputValue){
        console.log(inputValue)
        // Save ToDo
    }

})