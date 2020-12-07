const http = require('http')

http.createServer((req, res) => {
    //res.write('<h1>Hello World</h1>')
    if (req.url === '/OK') {
        console.log('Inbound \'OK\' request being processed...')
    }
    res.writeHead(200)
    res.end()
}).listen(3000, ()=>{
    console.log('Welcome to the Server')
})
