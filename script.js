// script.js

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * Adds a new task to the task list.
   * Validates input, creates task item with remove button, and clears input.
   */
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');  // Using classList.add here

    // Remove task when remove button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button to the task item
    li.appendChild(removeBtn);

    // Append the task item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for Add Task button click
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key press in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
