function retryPromise(fn, retries, delay){
    console.log("step1");
    return new Promise((resolve, reject)=>{
      function attempt(){
        fn.then(resolve).catch(error =>{
          if(retries == 0){
              reject(error)
          } else{
            retries--;
            console.log("attempt"+ retries)
            attempt();
          }
            
        })
      } 
      attempt();
    })
}

var test = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject()
  },0)
})
retryPromise(test, 5, 100)