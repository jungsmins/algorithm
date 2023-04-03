function solution(left, right) {
    let result = 0;
    
    const divisor = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++
        }
        return count % 2 === 0 ? num : -num
    }
    
    for (let i = left; i <= right; i++) {
        result += divisor(i)
    }
    return result
}