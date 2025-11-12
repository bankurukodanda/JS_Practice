
Promise.cusRace= function(fns){
 
    if(fns.length){
        return new Promise((resolve, reject)=>{
             for(i=0; i<fns.length;i++){
                
                    fns[i].then((result)=>{
                        resolve(new Promise((res) => res(result)), i)
                    }).catch((error)=>{
                        reject(new Promise((res,rej) => rej(error)), i)
                    })
            }
        })
    }
}

var a = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(1);
    },1000)
});
var b = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(2);
    },2000)
});var c = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(3);
    },1500)
})
Promise.cusRace([a,b,c]).then(res => {
    console.log("All success");
    console.log(res)
}).catch(err => {
    
     console.log("error");
    console.log(err)
});
//Race will return the first settled promise either resolved or rejected