const palindromes = function (palindrome) {

let arrPalindrome = palindrome.toLowerCase().split("");

let arrRemoveExtras = arrPalindrome.filter(char => /[a-z0-9]/.test(char));


let arrReversed = arrRemoveExtras.slice().reverse();

if (arrReversed.length === arrRemoveExtras.length) {
    for (let i = 0; i < arrRemoveExtras.length; i++){
        if (arrRemoveExtras[i] != arrReversed[i]) {
            return false
        }
             
    }
    return true;
} else
return false;

};
// Do not edit below this line
module.exports = palindromes;
