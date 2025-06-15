// setuo event listener for page load
document.addEventListener('DOMContentLoaded')
//select DOM elements
const addButton= document.getElementById ('add-task-btn')
const taskInput = document.getElementById(id="task-input")
const taskList = document.getElementById(id="task-list")
//create the addTask function
function addTask (){
    let taskTest =inputField.value.trim();
if (taskTest=== ""){
    alert(input('Enter a task'))
}
// task creation and removal
const li = document.createElement("li");
li.textContent = taskText;
const button =document.createElement('remove-btn');
button.textContent='Remove'
button.onclick =function(){
    taskList.remove(li)
};
// append button to li then li to the list
li.append(button);
taskList.append(li);
taskInput.value=""
// add event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', event.key='Enter', addTask)
}


document.addEventListener('DOMContentLoaded', addTask)
