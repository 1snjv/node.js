//server created
// let http = require('http');
// let server = http.createServer(function (req,res) {

//     res.writeHead(200,{'content':'text/plain'});
//     res.end('server called');
// })

// server.listen(3000,'127.0.0.1');
// console.log('server running');


//readstream data and writestream data
var http = require('http')
var fs = require('fs')
// var readstream = fs.createReadStream(__dirname + '/file.txt', 'utf8')
// var writestream = fs.createWriteStream(__dirname + '/wite.txt')

// fs.unlink('./wite.txt',function (err) {
//     if(err) throw err;
// })
// readstream.on('data',function (chunk) {
//     console.log('chunk recieved');
//     writestream.write(chunk);
// })
// writing through pipe
// readstream.pipe(writestream);

let server = http.createServer(function (req,res) {

    if(req.url=='/home')
    {res.writeHead(200,{'content':'text/html'});
    var readstream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    readstream.pipe(res);}
    else{
        res.writeHead(200,{'content':'text/plain'});
        fs.createReadStream(__dirname + '/file.txt', 'utf8').pipe(res);
    }
    // res.end('server called');
})

server.listen(3001,'127.0.0.1');
console.log('server running');