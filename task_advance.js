const TodoApp = (() => {
    let items = []
    let uid = 1

    const makeTask = (label) => ({
        id: uid++,
        label,
        done: false
    })

    const finishTask = (task) => ({ ...task, done: true })

    const insert = (label) => {
        const task = makeTask(label)
        items = [...items, task]
        return task
    }

    const markDone = (id) => {
        items = items.map(task => task.id === id ? finishTask(task) : task)
    }

    const fetchAll = () => [...items]

    const print = () => {
        console.log("All Tasks:")
        items.forEach(task => {
            console.log(`${task.id}. [${task.done ? '✔' : ' '}] ${task.label}`)
        })
    }

    return {
        insert,
        markDone,
        fetchAll,
        print
    }
})()

TodoApp.insert("Understand closures")
TodoApp.insert("Explore modules")
TodoApp.markDone(1)
TodoApp.print()

const active = TodoApp.fetchAll().filter(t => !t.done)
console.log("Remaining:", active)
