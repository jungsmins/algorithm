function solution(numbers, k) {
    let result = 0;
    let x = 0;
    for (let i = 0; i < k; i++) {
        result = numbers[x]
        x += 2
        if (x > numbers.length) {
            x = x - numbers.length
        }
    }
    
    return result
}