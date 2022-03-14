function bubbleSort(arr) {
    //sort an array of numbers by examining a number and the one that follows it
    let sorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
        let prevNumber = arr[i + 1]
        if (arr[i] > arr[i + 1]) {
            arr[i + 1] = arr[i]
            arr[i] = prevNumber
        }
    }
    console.log(arr)
    return arr;
}

module.exports = bubbleSort
