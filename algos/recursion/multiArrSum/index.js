function multiDimSum(arr) {
    let sum  = 0;
    let arr4 = [1];
    if (arr.length === 0) return sum;
    else if (typeof arr[0] === 'number') sum += arr[0]
    else if (Array.isArray(arr[0])) return multiDimSum(arr[0])

    
}

module.exports = multiDimSum