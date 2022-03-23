const toDoForm = document.getElementById("todo-Form")
const toDoList = document.getElementById("todo-List")
const toDoInput = toDoForm.querySelector("input")

let toDoArray = []

function saveToDo(){
    localStorage.setItem("todos", JSON.stringify(toDoArray))
}

function deleteToDO(event){
    const li = event.target.parentElement
    li.remove()
    toDoArray = toDoArray.filter((item)=>item.id !== parseInt(li.id))
    saveToDo()
}
function paintToDo(newToDo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteToDO)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newToDo["text"]
    li.id = newToDo["id"]
    toDoList.appendChild(li)
    console.log(toDoList)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const dictionary = {
        text : newToDo,
        id: Date.now(),
    }
    toDoArray.push(dictionary)
    paintToDo(dictionary)
    saveToDo(toDoArray)
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const getSaveToDo = localStorage.getItem("todos")

if(getSaveToDo){
    const parsedToDo = JSON.parse(getSaveToDo)
    toDoArray = parsedToDo
    for(i=0;i<parsedToDo.length;i++){
        paintToDo(parsedToDo[i])
    }
    /*parsedToDo.forEach(함수이름) and give item 배열 값 넘겨줌
      parsedToDo.forEach((item) =>console.log("안녕하세요", item))
    */
    console.log(parsedToDo)
}