const loginform = document.getElementById("login");
const loginInput = loginform.querySelector("input");
const loginButton = loginform.querySelector("button");
const greeting =  document.getElementById("greeting")


function nameSubmit(event){
    const name = loginInput.value;
    event.preventDefault();
    localStorage.setItem("username",name);
    loginform.classList.add("hidden");
    printIt(name)
}
function printIt(name){
    greeting.innerText = `HELLO ${name}`;
    greeting.classList.remove("hidden");
}
const savedName = localStorage.getItem("username");
if(savedName){
    loginform.classList.add("hidden");
    printIt(savedName)
}else{
    loginform.addEventListener("submit",nameSubmit);
}


