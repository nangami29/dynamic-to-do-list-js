// setuo event listener for page load
document.addEventListener('DOMContentLoaded')
//select DOM elements
const addButton= document.getElementById ('add-task-btn')
const taskInput = document.getElementById(id="task-input")
const taskList = document.getElementById(id="task-list")
//create the addTask function
function addTask (){
    let taskTest =taskInput.value.trim();
if (taskTest=== ""){
    alert(input('Enter a task'))
     return;
}
// task creation and removal
const li = document.createElement("li");
li.textContent = taskText;
const button =document.createElement('button');
button.textContent='Remove'
button.classList.add="remove-btn"
button.onclick =function(){
    taskList.removeChild(li);
   
};
// append button to li then li to the list
li.appendChild(button);
taskList.appendChild(li);
taskInput.value=""
// add event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', event.key='Enter', addTask)
}


document.addEventListener('DOMContentLoaded', addTask)
