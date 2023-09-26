const sumAll = function(m, n) {
    if(typeof m != 'number' || typeof n != 'number' || m < 0 || n < 0) return 'ERROR'
    if(m > n) [m, n] = [n, m];
    // 1 + 2 + ... + n = n(n+1)/2 formula, but generalized for ranges from m to n, m < n
    const sum = (n * (n+1))/2 - (m * (m-1))/2;
    let sum2 = 0;

    for(let i = m; i <= n; i++){
        sum2 += i;
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
