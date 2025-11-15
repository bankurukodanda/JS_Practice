const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, b: {d:5, e:6} };
//console.log(Object.assign({}, obj2, obj1))
///console.log(Object.assign(obj1, {}))
Object.cusAssign = (target, ...sources)=>{
    if(target == null){
        target = {};
    }
    if(sources.length >0){
        for(let i=0; i<sources.length; i++){
            for(key in sources[i]){
                target[key]= sources[i][key];   
            }
        }
    } 
        return target;
}

var orj = Object.assign({}, obj1, obj2);
var cust = Object.assign({}, obj1, obj2);
orj.b.d=10;
//cust.b.d=11;
console.log(orj);
console.log(obj2);
//console.log(cust);
//console.log(obj2);