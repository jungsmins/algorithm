function solution(left, right) {
    let result = 0;
    
    const divisor = (num) => {
        let arr = []
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) arr.push(i) 
        }
        return arr.length % 2 === 0 ? num : -num
    }
    
    for (let i = left; i <= right; i++) {
        result += divisor(i)
    }
    return result
}