var counter = function(arr) {
    return `length of array = ${arr.length}`
}

var add = function(a,b) {
    return `${a+b}`
}

var sub = function(a,b) {
    return `${a-b}`
}

var mult = function(a,b) {
    return `${a*b}`
}

var count =1;
// module.exports.counter=counter;
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=mult;
// module.exports.count=count;

module.exports={
    counter:counter,
    add:add,
    sub:sub,
    mult:mult,
    count:count
}
