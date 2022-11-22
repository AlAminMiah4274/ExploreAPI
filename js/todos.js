function loadToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayToDos(data))
}
loadToDos();

function displayToDos(todos) {
    const todosContainer = document.getElementById('todos-container');
    for (const todo of todos) {
        const todosDiv = document.createElement('div');
        todosDiv.innerHTML = `
            <h3>Tilte: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is completed: ${todo.completed ? 'Compeleted' : 'Not completed'}</p>
        `;
        todosContainer.appendChild(todosDiv);
    }
}