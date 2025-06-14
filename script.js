// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    /**
     * Adds a new task to the task list
     */
    function addTask() {
      // Retrieve and trim the input value
      const taskText = taskInput.value.trim();
  
      // Validate input
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create a new list item for the task
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create the remove button for the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
  
      // Attach event handler to remove the task when clicked
      removeBtn.onclick = function() {
        taskList.removeChild(li);
      };
  
      // Append the remove button to the list item
      li.appendChild(removeBtn);
  
      // Append the list item to the task list
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    }
  
    // Attach click event listener to the Add Task button
    addButton.addEventListener('click', addTask);
  
    // Attach keypress event listener to input field to allow adding task by pressing Enter
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Optionally, you can invoke addTask() here if you want to add a default task on page load
    // addTask();
  });
  