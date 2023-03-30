function solution(n) {
    let mul = 1
    let i = 1
    while(true) {
        mul *= i
        if (mul > n) return i - 1
        i++
    }
}