// function call(f){
//     f()
// }

// var sayhi = function() {
//     console.log("hi there")
// }

// call(sayhi)

var module = require("./counter")
console.log(module.counter([2,3,4,5,6,]))
console.log(module.add(2,3))
console.log(module.sub(2,3))
console.log(module.mult(2,3))