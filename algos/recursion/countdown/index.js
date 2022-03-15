function countdown(n) {
    if (n <= 0) {
        return 'Liftoff!';
    } else {
        return `${n}, ` + countdown(n - 1);
    }
}
module.exports = countdown