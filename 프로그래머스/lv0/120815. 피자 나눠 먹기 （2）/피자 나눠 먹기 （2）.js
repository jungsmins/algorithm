function solution(n) {
    let i = 1;
    while(true) {
        let mul = n * i
        if (Number.isInteger(mul / 6)) {
            return mul / 6
        }
        i++
    }
}