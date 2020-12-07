const http = require('http')

http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>')
    switch(req.url){
        case '/OK': 
        console.log('INBOUND: /OK')
        res.writeHead(200)
        break;
        case '/Bad-Request':
            console.log('INBOUND: Bad-Request')
            res.writeHead(400)
        break;
        case '/Created':
            console.log('INBOUND: Created')
            res.writeHead(201)
        break;
        case '/Forbidden':
            console.log('INBOUND: Forbidden')
            res.writeHead(403)
        break;
        case '/Found':
            console.log('INBOUND: Found')
            res.writeHead(302)
        break;      
        case '/Gateway-Timeout':
            console.log('INBOUND: Gateway-Timeout')
            res.writeHead(504)  
        break;
        case '/Internal-Server-Error':
            console.log('INBOUND: Internal-Server-Error')
            res.writeHead(500)
        break;
        case '/Moved-Permanently':
            console.log('INBOUND: Moved-Permanently')
            res.writeHead(301)
        break;
        case '/Unauthorized':
            console.log('INBOUND: Unauthorized')
            res.writeHead(401)
        break;
        case '/Not-Found':
            console.log('INBOUND: Not-Found')
            res.writeHead(404)
        break;
    }

    res.end()
}).listen(8080, ()=>{
    console.log('Welcome to the Server')
})

