document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todoList = document.getElementById('todoList');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
  
    // Add new task
    const addTask = () => {
      const taskText = todoInput.value.trim();
      if (!taskText) return alert('Please enter a task.');
  
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">✔️</button>
      `;
      todoList.appendChild(taskItem);
      todoInput.value = '';
  
      // Mark task as complete
      taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
    };
  
    // Clear completed tasks
    const clearCompletedTasks = () => {
      document.querySelectorAll('.completed').forEach((task) => task.remove());
    };
  
    addTaskBtn.addEventListener('click', addTask);
    clearTasksBtn.addEventListener('click', clearCompletedTasks);
  
    // Handle "Enter" key press to add task
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  });
  