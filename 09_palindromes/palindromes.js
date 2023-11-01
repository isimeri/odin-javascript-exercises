const palindromes = function (str) {
    const regex = /[\d|\w]/g
    const charArr = str.match(regex);
    
    if(charArr.join("").toLowerCase() === charArr.reverse().join("").toLowerCase()){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
