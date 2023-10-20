/* TODO: base versioning upon "version" specified inside package.json */
import Express from 'express'
import Pipeline from './src/backendPipeline'

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello, world! Node.js');
})

const port = 8000;
server.listen(port, () => {
    console.log('Server running on port ' + port);
})