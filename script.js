document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = [];

  // Load tasks from local storage on page load
  function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach(taskText => createTaskElement(taskText));
    }
  }

  // Save current tasks array to local storage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Create and append task element
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.className = 'remove-btn';

    button.onclick = function () {
      taskList.removeChild(li);
      tasks = tasks.filter(task => task !== taskText); // Remove from array
      saveTasks(); // Update local storage
    };

    li.appendChild(button);
    taskList.appendChild(li);
  }

  // Add new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert('Enter a task');
      return;
    }

    tasks.push(taskText);      // Add to array
    saveTasks();               // Save to local storage
    createTaskElement(taskText); // Add to DOM
    taskInput.value = "";      // Clear input
  }

  // Event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  loadTasks(); // Run on page load
});
