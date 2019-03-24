const todos = [
  {
    title: 'Buy food',
    completed: true
  },
  {
    title: 'mango',
    completed: true
  },
  {
    title: 'banana',
    completed: true
  },
  {
    title: 'avocado',
    completed: false
  },
  {
    title: 'wash car',
    completed: true
  },
  {
    title: 'lunch',
    completed: true
  },
  {
    title: 'dinner',
    completed: false
  },
  {
    title: 'cooking',
    completed: true
  },
  {
    title: 'avocado',
    completed: true
  },
  {
    title: 'Buy food',
    completed: false
  },
]

const addTodo = (todos, title = '', completed = false) => {
  const add = {
    title,
    completed
  }
  return todos.push(add)
}

addTodo(todos, 'fruits', true)

// console.log(todos)
const removeTodo = (todos, todoTitle) => {
  const index = todos.findIndex(todo => todo.title.toLowerCase() === todoTitle.toLowerCase())
  if ( index > -1) {
    todos.splice(index, 1)
  }
}

removeTodo(todos, 'mango')

// console.log(todos)

const findTodo = (todo, query) => {
  return todo.filter(( todo, index) => {
    return todo.title.toLowerCase().includes(query.toLowerCase())
  })
}

const completedTodo = (todos) => todos.filter(todo => todo.completed === true)

console.log('completed : ',completedTodo(todos))



// console.log(findTodo(todos, 'fruits'))
