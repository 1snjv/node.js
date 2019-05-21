var fs = require('fs')

// //asynchronous
// fs.readFile('file.txt','utf8',function(err,data) {
//     console.log(data)
// })
// console.log("somewhere in between")
// //synchronous
// fs.writeFileSync('write.txt',"sanjeev keshri woohooooo")


//remove a file 
// fs.unlink('write.txt',function(err) {
//     if(err) throw err;
//     console.log('file deleted')
// });

//add a directory

// fs.mkdirSync('newdir')

// remove a dir

// fs.rmdirSync('newdir')


// asynch dir creation and writing in file once directory is been created
fs.mkdir('newfile',function(){
    fs.readFile('file.txt','utf8',function(err,data) {
        if(err) throw err;
        fs.writeFile('./newfile/write.txt',data,function(err){
            if(err) throw err;
        })
    })
} )


