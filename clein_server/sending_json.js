var http = require('http')

let server = http.createServer(function (req,res) {
    res.writeHead(200,{'content':'application/json'});
    myobj={
        name:'sanjeev',
        roll:205117001,
        age:23,
    }
    res.end(JSON.stringify(myobj));
})

server.listen(3001,'127.0.0.1');
console.log('server running');