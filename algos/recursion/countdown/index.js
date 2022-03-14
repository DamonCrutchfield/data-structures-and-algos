function countdown(n) {
    let countdownString = '';
    if (n <= 0) {
        return countdownString + 'Liftoff!';
    } else {
        countdownString += `${n}, `;
    }
    return countdownString += countdown(n - 1)
}
module.exports = countdown