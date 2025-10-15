
/** 

Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.
**/
const curriedSum = function(...args){
  var sum = args.reduce((a,b)=> a+b);
  if(args.length == 0){
    return sum;
  } else{
    return function(...args2){
      if(args2.length ==0){
        return sum;
      }
      return curriedSum(sum,...args2)
    };
  }
}
console.log(curriedSum(1, 2, 7,9,3,1)());  // Output: 23
console.log(curriedSum(1)(2)(3)());      // Output: 6
console.log(curriedSum(1, 2)(3)());      // Output: 6
console.log(curriedSum(1)(2, 3)());      // Output: 6
console.log(curriedSum(1, 2, 3)());      // Output: 6
