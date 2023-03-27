function solution(n) {
    let count = 0
    let result = 0
    for (let i = 1; i <= n; i++) {
        count = 0
        for (let j = 2; j <= n; j++) {
            if (i % j === 0) {
                count++
            }
        }
        if (count >= 2) {
            result++
        }
    }
    return result
}