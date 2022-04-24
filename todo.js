const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li =  event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newToDoObj){
    const li = document.createElement('li');
    li.id = newToDoObj.id;
    li.style.marginTop = "10px"
    li.style.padding = "5px";
    const span = document.createElement('span');
    span.style.width = "150px";
    span.innerText = newToDoObj.text;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-button');
    deleteButton.innerText = "X";

    deleteButton.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(deleteButton);


    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    if(newToDo !== ""){
        const newToDoObj = {
        id: Date.now(),
        text : newToDo,
    }
    toDos.push(newToDoObj);

    paintTodo(newToDoObj);

    saveToDos();
    }

}

toDoForm.addEventListener('submit',handleToDoSubmit);

const saveToDo = localStorage.getItem(TODOS_KEY);

if(saveToDo !== null){
    const parsedToDos = JSON.parse(saveToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}