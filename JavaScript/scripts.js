// Seleção de elementos

const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editinput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Funções

const saveTodo = (Text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerHTML = Text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todolist.appendChild(todo);

    todoinput.value = "";
    todoinput.focus();
};

const toggleForms = () => {
    editform.classList.toggle("hide");
    todoform.classList.toggle("hide");
    todolist.classList.toggle("hide");
};

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if (todoTitle.innerText == oldInputValue) {
            todoTitle.innerText = text;
        }

    });

};

// Eventos

todoform.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputValue = todoinput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }

});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }


    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();

        editinput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});


cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms();
});

editform.addEventListener("submit", (e) => {

    e.preventDefault();

    const editInputValue = editinput.value;

    if (editInputValue) {
        updateTodo(editInputValue);
    }

    toggleForms();

});

