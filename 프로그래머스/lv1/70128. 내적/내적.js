function solution(a, b) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i] * b[i]
    }
    return total
}