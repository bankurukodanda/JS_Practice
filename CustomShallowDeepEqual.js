var Obj = {
    "a":3,
    "b":4
}
var test={
    "a":3,
    "b":4
}
var per = test;

Object.prototype.deepEqual = function(obj2){
    //compare by value
    return JSON.stringify(this) == JSON.stringify(obj2);
}
Object.prototype.shallowEqual = function(obj2){
    //compare by reference
    return this == obj2;
}

console.log(Obj.deepEqual(test));
console.log(per.deepEqual(test));

console.log(Obj.shallowEqual(test));
console.log(per.shallowEqual(test));