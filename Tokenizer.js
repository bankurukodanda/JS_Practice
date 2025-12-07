function tokenGenerator(text, delim, returnDelim) {

    if(delim === undefined) {
        delim = ' ';
    }
    const tokens = text.split(delim);
    var result = [];
    if(returnDelim) {
        for (i=0; i< tokens.length; i++) {
            result.push(tokens[i]);
            result.push(delim)
        }
            
        result.pop();
    } else{
        result = tokens;
    }
    
    return result;
}
console.log(tokenGenerator("hello how are you"));
console.log(tokenGenerator("hello how are you", 'o'));
console.log(tokenGenerator("hello how are you", 'o', true));
