const todoList = [
    {
        title: 'Shopping',
        dateCreated:'Jan 21, 2008',
        list: [
            {text: 'Node.js Books', done: false},
            {text: 'MacBook', done: false},
            {text: 'Shoes', done: true},
        ]
    },
    {
        title: 'Places to visit',
        dateCreated: 'Feb 12, 2018',
        list: [
            {text: 'Nairobi, Kenya', done: false},
            {text: 'Moscow, Russia', done: false}
        ]
    }
];

module.exports = [
    {
        method: 'GET',
        path: '/todo',
        handler: (request, reply) => reply(todoList)
    },
    {
        method: 'GET',
        path: '/todo/{id}',
        handler: (request, reply) => {
            const id = request.params.id -1
            if (todoList[id]) return reply(todoList[id])
            return reply({ message: 'Not found'}).code(404)
        }
    },
    {
        method: 'POST',
        path: '/todo',
        handler: (request, reply) => {
            const todo = request.payload
            todoList.push(todo)
            return reply({ message: 'Created'})
        }
    }
]
