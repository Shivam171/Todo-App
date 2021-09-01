function myFunction(){
    var image = document.getElementById("theme");
    if(document.body.style.backgroundImage.match("Media/Box.svg")){
        document.body.style.backgroundImage = "url(Media/Bubble.svg)";  
    }
    else{
        document.body.style.backgroundImage = "url(Media/Box.svg)";
    }
}

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => {
        addTodo(todo)
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    addTodo();
});

function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todoText;
    }

    if (todoText) 
    {
        const todoE1 = document.createElement("li");

        if(todo && todo.completed){
            todoE1.classList.add("completed");
        }
        
        todoE1.innerText = todoText;

        todoE1.addEventListener('click', () =>{
            todoE1.classList.toggle('completed');
            updateLS();
        });

        todoE1.addEventListener('contextmenu',(e) =>{
            e.preventDefault();
            todoE1.remove();
            updateLS();
        });

        todosUL.appendChild(todoE1);
        input.value= "";
        updateLS();
    }
}

function updateLS() {
    const todosE1 = document.querySelectorAll("li");

    const todos= [];

    todosE1.forEach(todosE1 => {
        todos.push({
            text: todosE1.innerText,
            completed: todosE1.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}