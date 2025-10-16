var flat = function (arr) {
    let nextLevel =false;
    let result=[];
    for( i=0;i<arr.length;i++){

        if(typeof arr[i] == 'number'){
            result.push(arr[i]);
        }
        if(typeof arr[i] == 'object'){
            if(!nextLevel)
             nextLevel= arr[i].some((a)=> typeof a == 'object');
            result.push(...arr[i]);
        }
    }
    if( nextLevel){
    return flat(result);    
    }
    return result;
};
var arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, [10], 11], 12], [13, 14, 15]];

console.log(flat(arr));
