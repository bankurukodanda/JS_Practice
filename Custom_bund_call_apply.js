//Custom Bind
/**
* Bind
* Invokes a function immediately with a specified this value and arguments passed individually.
* function.call(thisArg, arg1, arg2, ...)
*
**/
Function.prototype.myBind = function(...args){
 let obj = this;
 return function (...args2) {
   obj.apply(args[0], [...args.slice(1), ...args2]);
 }
}

//Custom Apply
/**
* Apply
* Invokes a function immediately with a specified this value and arguments passed as an array (or an array-like object).
* function.apply(thisArg, [argsArray])
*
**/
Function.prototype.myApply = function(...args){
 var context = args[0];
 
 context.fn = this;
 context.fn(...args[1]);

}

//Custom Call
/**
* Bind
* Creates a new function that, when called, has its this keyword permanently bound to the provided value. It does not invoke the function immediately.
* const newFunction = function.bind(thisArg, arg1, arg2, ...)
*
**/
Function.prototype.myCall = function(...args){
 var context = args[0];
 
 context.fn = this;
 context.fn(...args.slice(1));

}
