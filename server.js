const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    console.log(`Incoming request: ${req.url}`);

    if (req.url.startsWith("/static/")) {
        fs.readFile(req.url.substr(1), (error, data) => {
            if (error) {
                console.log(`Error: file not found: ${error}`)
                res.statusCode = 404
                res.end()
                return;
            }
            res.end(data)
        });
        return;
    }
    res.end('Hello I am from the server')
}).listen(3000, '127.0.0.1', () => {
    console.log(`Server is up running`);
})
