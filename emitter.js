//custom events on objects 

var emitter = require('events')
var util = require('util')
var myemitter = new emitter.EventEmitter()

function call(msg) {
    console.log(msg)
}

myemitter.on('someEvent',call)

// myemitter.emit('someEvent',"hello there")


var Person=function(name) {
    this.name = name
}
util.inherits(Person,emitter.EventEmitter)
var a= new Person("sanjeev")
var b= new Person("shaikha")

var people = [a,b]

people.forEach(element => {
    element.on('speak',function(msg) {
        console.log(element.name + ' said ' + msg)
    })
});

console.log("helo")
a.emit('speak','this has worked')
b.emit('speak','this has worked')