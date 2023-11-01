const fibonacci = function(n) {
    if(typeof n === "string"){
        n = parseInt(n);
    }
    if(n < 0){
        return "OOPS";
    }
    const arr = [0, 1];
    while(arr.length <= n){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;