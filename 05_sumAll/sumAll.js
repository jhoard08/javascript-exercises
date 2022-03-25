const sumAll = function(x,n) {
    if(!Number.isInteger(x) || !Number.isInteger(n)){
        return "ERROR";
    }
    else if(x < 0 || n < 0){
        return "ERROR";
    }
    return n > x ? n*(n+1)/2 : x*(x+1)/2;
};

// Do not edit below this line
module.exports = sumAll;
