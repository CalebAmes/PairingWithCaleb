const { readFile } = require('fs').promises;
const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer(async(req, res) => {
    if (req.url === "/images") {
        const imageFilePath = './assets' + req.url;
        const imageFileContents = await readFile(imageFilePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(imageFileContents);
        return;
    }




    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('I have items');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});