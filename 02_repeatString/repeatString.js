const repeatString = function(string, num) {
    let repeat = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = 0; i <= num - 1; i++){
        repeat += string;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
