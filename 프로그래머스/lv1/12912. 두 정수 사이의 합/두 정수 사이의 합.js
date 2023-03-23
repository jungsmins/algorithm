function solution(a, b) {
    if (a <= b) {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum += i
        }
        return sum
    }
    
    if (a >= b) {
        let sum = 0;
        for (let i = b; i <= a; i++) {
            sum += i
        }
        return sum
    }
}