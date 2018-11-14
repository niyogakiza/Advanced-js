const Hapi = require('hapi')
const good = require('good')



const routes = {}
routes.todo = require('./routes/todo.js')


const server = new Hapi.Server({
    host: 'localhost',
    port: 8080
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
    const response = h.response('From hapi server');
    response.type('text/plain');
    return response;
  }
})

server.route(routes.todo)

const options = {
    ops:{
        interval: 100000
    },
    reporters: {
        consoleReporters: [
            { module: 'good-console'},
            'stdout'
        ]
    }
}

server.register({
    register: good,
    options,
}, (err) => {
    if (err) return console.error(err)
})

server.start((err) => {
    if (err) throw err
    console.log(`Server is running at: ${server.info.uri}`)
})
