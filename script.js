// Get references to the input field, add button, and task list
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim(); // Get input and trim whitespace

    // If input is empty, return
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">✖</button>
    `;

    // Add event listener for task completion (click on the task text)
    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('completed'); // Toggle 'completed' class
    });

    // Add event listener for the delete button
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li); // Remove task from list
    });

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field after adding
    newTaskInput.value = "";
}

// Add task when button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add task when 'Enter' key is pressed
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
