// Custom Map
Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
// Custom  Filter
Array.prototype.myFilter = function(callback){
    let items=this;
    let itemsList =[];
    for( let i=0; i< items.length; i++){
      result =callback(items[i], i, this);
      if(result) {
        itemsList.push(items[i])
      }
    }
return itemsList
}
// Custom Reduce
Array.prototype.myReduce = function(callback){
  let items =this;
  let itemsList=[];
  let result =0;
  for( i=0; i< items.length; i++){
    result = callback(result, items[i], i, this)
  }
  return result;
}
