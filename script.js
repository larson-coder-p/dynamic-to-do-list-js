document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    /**
     * Load tasks from Local Storage and populate the task list
     */
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // false to avoid saving again
    }
  
    /**
     * Save the current tasks in the DOM to Local Storage
     */
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(li => {
        const taskText = li.firstChild.textContent.trim();
        tasks.push(taskText);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    /**
     * Add a new task to the list and optionally save it to Local Storage
     * @param {string} taskText - The task description
     * @param {boolean} save - Whether to save the task to Local Storage (default true)
     */
    function addTask(taskText, save = true) {
      // If taskText is undefined, get from input field
      if (typeof taskText === 'undefined') {
        taskText = taskInput.value.trim();
      }
  
      // Validate input
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create new list item element
      const li = document.createElement('li');
  
      // Create a text node for the task text
      const taskTextNode = document.createTextNode(taskText);
      li.appendChild(taskTextNode);
  
      // Create the remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
  
      // Remove task on button click and update Local Storage
      removeBtn.onclick = () => {
        taskList.removeChild(li);
        saveTasks();
      };
  
      // Append remove button to list item
      li.appendChild(removeBtn);
  
      // Append list item to task list
      taskList.appendChild(li);
  
      // Clear input field if adding from user input
      if (save) {
        taskInput.value = '';
      }
  
      // Save updated tasks to Local Storage
      if (save) {
        saveTasks();
      }
    }
  
    // Event listener for Add Task button
    addButton.addEventListener('click', () => {
      addTask();
    });
  
    // Event listener for Enter key press in input field
    taskInput.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Load tasks from Local Storage when page loads
    loadTasks();
  });
  
  
  