

const fibonacci = function(num) {
    
    let arrNumbers = [0, 1];
    number = Number(num);
    if (number<0) return 'OOPS';

    for (let i = 0; i < number; i++){
        arrNumbers.push(arrNumbers[i]+arrNumbers[i+1])
    }
    console.log(arrNumbers);
    return arrNumbers[number]
};
fibonacci();
// Do not edit below this line
module.exports = fibonacci;
