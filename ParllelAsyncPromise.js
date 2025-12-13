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
function parllelPromise(promises){
    return new Promise((res, rej)=>{
        var count =0;
        var results = [];
        for(let i=0; i< promises.length; i++){
            let rescount =0;
            promises[i]().then((result)=>{
                count++;
                results.push({"ind":i, "res": result})
                if(count == promises.length){
                    res(results);
                }
            }).catch((error)=>{
                count++;
                results.push({"ind":i, "res": error})
                if(count == promises.length){
                    res(results);
                }

            })
        }
    })

    
}

parllelPromise(promises).then(res=>{
    
    console.log(res);
})
