var test1 = function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{res("test1");},5000) 
    })
}
var test2 = function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{res("test2");},1000) 
    })
}
var test3 = function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{res("test3");},3000) 
    })
}
var promises = [test1, test2, test3]
for(i =0; i< promises.length; i++){
    var p = await promises[i]();
    console.log(p);
}
