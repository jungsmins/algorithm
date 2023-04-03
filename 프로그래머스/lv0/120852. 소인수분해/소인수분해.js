function solution(n) {
    let arr = [];
    let i = 2;
    while(n > 1) {
        if (Number.isInteger(n / i)) {
            arr.push(i)
            n = n / i
        } else {
            i++
        }
    }
    return [...new Set(arr)]
}