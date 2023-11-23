const input = document.querySelector('.input-task')
const button = document.querySelector('.button-add-task')
const listComplete = document.querySelector('.list-tasks')


let mylist = []

function addNewTask() {
    
    if (input.value === "" || !input.value.replace(/\s/g, '').length) {
        alert("Por favor, insira o que deseja.");
    } else mylist.push({
        task: input.value,
        complete: false
    })

    input.value = ''
    showTask()
}

function showTask() {
    let newLi = ''

    mylist.forEach((item, position) => {
        newLi = newLi + `  
       <li class="task ${item.complete && "done"}">
        <img class="icon"  src="./img/verificado.png" alt="verificar-task" onclick="completeTask(${position})">
        <p >${item.task}</p>
        <img class="icon"  src="./img/lixeira-de-reciclagem.png" alt="apagar-task" onclick="deleteItem(${position})">
        </li> `
    });

    listComplete.innerHTML = newLi
    localStorage.setItem('list', JSON.stringify(mylist))
}

function completeTask(position) {
    mylist[position].complete = !mylist[position].complete

    showTask()
}

function deleteItem(position) {
    mylist.splice(position, 1)
    showTask()
}

function rechargeTask() {
    const taskLocalStorage = localStorage.getItem('list')
    if (taskLocalStorage) {
        mylist = JSON.parse(taskLocalStorage)
    }
    showTask()
}



rechargeTask()

button.addEventListener('click', addNewTask)