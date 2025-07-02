const todoList = []

function insertTask(title) {
    todoList.push({ id: todoList.length + 1, title, done: false })
}

function markTaskDone(id) {
    const item = todoList.find(t => t.id === id)
    if (item) item.done = true
}

function showTasks() {
    console.log("To-Do List:")
    todoList.forEach(task => {
        console.log(`${task.id}. [${task.done ? '✔' : ' '}] ${task.title}`)
    })
}

insertTask("Study JavaScript")
insertTask("Solve exercises")
markTaskDone(1)
showTasks()
