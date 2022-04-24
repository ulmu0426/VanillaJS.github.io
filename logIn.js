const loginForm = document.querySelector('#log-in')
const inputID = document.querySelector('#log-in input');
const btnLogIn = document.querySelector('#log-in button');

const logOutForm = document.querySelector('#log-out');
const userid = document.querySelector('#userid');
const HIDDEN_CLASSNAME = "hidden";
const LOGIN_KEY = "login";

const savedId = localStorage.getItem(LOGIN_KEY);

function paintGreeting(id){
    userid.innerText =`${id}`;    
    userid.classList.remove(HIDDEN_CLASSNAME);
    logOutForm.classList.remove(HIDDEN_CLASSNAME);
}

function saveID(id){
    localStorage.setItem(LOGIN_KEY,id);
}

function onLogIn(){
    const id = inputID.value;
    if(id === ""){
        alert("Please Write Your ID!");
    }
    else if(id.length < 2){
        alert("Please enter 2 or more ID!");
    }
    else{
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreeting(id);
        saveID(id);
    }

}


function handleToLogIn(event){
    event.preventDefault();
}

loginForm.addEventListener('submit',handleToLogIn);
btnLogIn.addEventListener('click', onLogIn);

if (savedId === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', handleToLogIn);
} else {
    //show the id
    paintGreeting(savedId);
}
