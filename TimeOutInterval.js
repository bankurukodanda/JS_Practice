function cusTime(cb, interval){
    var startTime = Date.now();
    var exceute = (...args)=>{
        var currentTime = Date.now();
        if(currentTime - startTime >= interval){
            cb();
        } else{
            requestAnimationFrame(()=>exceute(args));
        }
    }
    requestAnimationFrame(exceute)
}
cusTime(function(){
    console.log("wefew")
},1000);

function cusCI(cb, interval){
    var startTime = Date.now();
    var exceute = (...args)=>{
        var currentTime = Date.now();
        if(currentTime - startTime >= interval){
            cb();
            startTime = Date.now();
            requestAnimationFrame(()=>exceute(args));
        } else{
            requestAnimationFrame(()=>exceute(args));
        }
    }
    requestAnimationFrame(exceute)
}
cusCI(function(){
    console.log("wefew")
},1000);
