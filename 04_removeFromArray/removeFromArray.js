const removeFromArray = function(givenArray,...removeCharacter) {

    
    let newArray = [];
    givenArray.forEach((item) => {
        if (!removeCharacter.includes(item))
            newArray.push(item);
            
    })
    
    
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
