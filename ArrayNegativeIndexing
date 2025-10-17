/***

The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

You create a Proxy with two parameters:

target: the original object which you want to proxy
handler: an object that defines which operations will be intercepted and how to redefine intercepted operations

**/
let target = [1,2,3,4,5,6,7]
const a = new Proxy(target,{
    get(target, prop){
        if(!isNaN(prop)){
            if(prop < 0)
                prop = target.length -1;
        }
        return target[prop]
    }
})
target = a;
console.log(target[-1]) //Output 7
