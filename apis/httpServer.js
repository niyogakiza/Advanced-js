const http = require('http')
const server = http.createServer((request, response) => {
    console.log('Request starting...')
    response.write('Hello I am the server')
    response.end()
})

server.listen(5000, () => console.log('Server is up running....'))
