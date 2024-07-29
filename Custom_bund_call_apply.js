//Custom Bind

Function.prototype.myBind = function(...args){
 let obj = this;
 return function (...args2) {
   obj.apply(args[0], [...args.slice(1), ...args2]);
 }
}

//Custom Apply

Function.prototype.myApply = function(...args){
 var context = args[0];
 
 context.fn = this;
 context.fn(...args[1]);

}

//Custom Call

Function.prototype.myCall = function(...args){
 var context = args[0];
 
 context.fn = this;
 context.fn(...args.slice(1));

}
