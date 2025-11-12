
Promise.myAllSetteled= function(fns){
 var count = 0
    var allSucess = true;
    var allResult = [];
    if(fns.length){
        return new Promise((resolve, reject)=>{
             for(i=0; i<fns.length;i++){
                (function(i){
                    fns[i].then((result)=>{
                        
                        executed(new Promise((resolve) => resolve(result)), i)
                    }).catch((error)=>{
                        allSucess = false;
                        executed(new Promise((resolve,reject) => reject(error)), i)
                    })
                })(i, );
            }
            function executed(res, i){
                allResult[i]=res;
                count++;
                if(count == fns.length){
                    debugger;
                    if(allSucess)
                        resolve(allResult);
                    else
                        reject(allResult)
                }
            }
        })
    }
}

var a = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    },1000)
});
var b = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(2);
    },2000)
});var c = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(3);
    },1500)
})
Promise.myAllSetteled([a,b,c]).then(res => {
    console.log("All success");
    console.log(res)
}).catch(err => {
     console.log("error");
    console.log(err)
});
//AllSettled will return all settled promises either resolved or rejected