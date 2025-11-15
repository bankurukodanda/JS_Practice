JSON.CusStringfy = (obj)=>{
    var text =""
    return stringfy(obj);
}
function valueIdentifier(value){
    if(typeof value == 'undefined'){
        return value;
    }
    if(typeof value == 'object'){
        if(Array.isArray(value)){
            return '['+ iterateObject(value) +']'
        } else{
            let text = stringfy(value);
            return text;
        }
    }
    if(typeof value == 'string' &&value == ""){
        return '""';
    }
    
    return value;
}
function stringfy(obj){
    var text = '{';
    var keys = Object.keys(obj);
    for(var i=0; i<keys.length; i++ ){
        let key = keys[i];
        var value =valueIdentifier(obj[key])
       
       if(value != undefined){
          text +='"'+key+'":'+ value
            if(i <keys.length -1)
                text +=",";
       } 
    }   
    return text+'}';
}
function iterateObject(arrayObj){
    var arrayText = '';
    for(var i=0; i< arrayObj.length; i++){
       arrayText += stringfy(arrayObj[i])
        if(i< arrayObj.length-1)
            arrayText +=",";
    }
       return arrayText;
    
}

var a={b:1,c:2,k:undefined,d:[{e:1, f:2},{l:0, m:2},{p:1, h:9}],u:''};
console.log(JSON.CusStringfy(a))
console.log(JSON.stringify(a))