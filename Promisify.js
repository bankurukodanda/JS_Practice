function add(a,b, callback){
    setTimeout(function(){
        callback(a+b);
    },5000)
}

function promify(fun){
    return function(...args){
        return new Promise((res, rej)=>{
            fun(...args, function(result){
                if(result){
                    res(result);
                }
            })
        })        
    }
}
const promifiedAdd = promify(add);

promifiedAdd(1,2).then(function(res){
    console.log(res)
})
add(1,2,function(res){
    console.log(3);
})
