const removeFromArray = function(arr, ...rest) {

    if(rest.length === 0)
    return arr;

    rest.forEach(elem => {
        const idx = arr.indexOf(elem);
        if( idx !== -1){
            arr.splice(idx, 1);
        }
    });

    return arr;
};

console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;
