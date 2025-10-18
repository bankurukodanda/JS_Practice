/**
Pipe: It combines functions from left to right. This means the output of the leftmost function is passed as the input to the next function


Compose: It combines functions from right to left . This means the output of the rightmost function is passed as the input to the next function

**/
function f1 (a){
    console.log("f1"+a)
    return ++a;
}
function f2 (a){
    console.log("f2"+a)
    return ++a;
}
function f3 (a){
    console.log("f3"+a)
    return ++a;
}
function f4 (a){
    console.log("f4"+a)
    return ++a;
}
function pipe(...args){
    var test= (a)=>{
        return args.reduce((b, func) =>{
          return func(b); 
        },a)
    };
    return test;
}

function compose(...args){
    var test= (a)=>{
        return args.reduceRight((b, func) =>{
          return func(b); 
        },a)
    };
    return test;
}
pipe(f1,f2,f3,f4)(5); //Output f1,f2,f3,f4
compose(f1,f2,f3,f4)(5);//Output f4,f3,f2,f1
