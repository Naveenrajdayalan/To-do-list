document.getElementById('todo-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = document.getElementById('task-input').value.trim();
  const priority = document.getElementById('priority').value;

  if (taskText !== '') {
    const listItem = createTaskElement(taskText);
    const column = document.querySelector(`#${priority} .task-list`);
    column.appendChild(listItem);

    document.getElementById('task-input').value = '';
  }
});

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const btnContainer = document.createElement('div');
  btnContainer.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✅';
  completeBtn.title = 'Mark Complete';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.title = 'Delete Task';
  deleteBtn.onclick = () => {
    li.remove();
  };

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);
  li.appendChild(btnContainer);

  return li;
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light');
  document.querySelector('.theme-toggle').textContent = body.classList.contains('light') ? '🌙' : '🌞';
}

// Add delete all buttons to each column
['high', 'medium', 'low'].forEach(priority => {
  const column = document.getElementById(priority);
  const deleteAllBtn = document.createElement('button');
  deleteAllBtn.className = 'delete-all-btn';
  deleteAllBtn.textContent = '🧹 Delete All';
  deleteAllBtn.onclick = () => {
    const list = column.querySelector('.task-list');
    list.innerHTML = '';
  };
  column.appendChild(deleteAllBtn);
});
