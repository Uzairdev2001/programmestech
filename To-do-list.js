document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

function addTask(text) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            if (editButton.textContent === 'Edit') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = li.firstChild.textContent;
                li.firstChild.textContent = '';
                li.insertBefore(input, deleteButton);
    
                editButton.textContent = 'Save';
            } else {
                const inputField = li.querySelector('input[type="text"]');
                li.firstChild.textContent = inputField.value;
    
                li.removeChild(inputField);
                editButton.textContent = 'Edit';
            }
    
    });
 
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
