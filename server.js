const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 8080

http.createServer(function (request, response) {
    var path = url.parse(request.url, true).pathname
    var query = url.parse(request.url, true).query
    console.log(`Path: ${path}`)
    console.log(`Query: ${JSON.stringify(query)}`)
    console.log(`Address: ${request.socket.remoteAddress}\n`)
    if (path == '/')
        serveData('/html/demo.html', response)
    else
        serveData(path, response)
}).listen(port, '0.0.0.0')

function serveData(path, response) {
    fs.readFile(__dirname + path, function(error, data) {
        if (error) {
            response.writeHead(404, {'Content-Type':'text/plain'})
            response.write(`${error}`)
            response.end()
        }
        else {
            response.writeHead(200, {'Content-Type':'text/html'})
            response.write(data)
            response.end()
        }
    })
}
