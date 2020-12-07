const http = require('http')

http.createServer((req, res) => {
    //res.write('<h1>Hello World</h1>')
    res.end()
}).listen(3000, ()=>{
    console.log('Welcome to the Server')
})
