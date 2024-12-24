const sumAll = function(firstNum,lastNum) {

    let sum = 0;
    let num1 = 0;
    let num2 = 0;
    if (typeof firstNum !== 'number' || typeof lastNum !== 'number'){
        return ('ERROR');
    } else if (firstNum <0 || lastNum <0){
        return ('ERROR');
    } else if (firstNum - Math.floor(firstNum) !== 0){
        return ('ERROR');
    } else if (firstNum < lastNum){
        num1 = firstNum;
        num2 = lastNum;
    } else if (lastNum < firstNum){
        num1 = lastNum;
        num2 = firstNum;
    } else {
        return ('ERROR');
    }
    for (let i = num1; i <= num2; i++){
        sum = sum + i;
    }
    


    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
