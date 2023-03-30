function solution(n) {
    let mul = 1
    for (let i = 1; i <= 11; i++) {
        mul *= i
        if (mul > n) return i - 1
    }
}